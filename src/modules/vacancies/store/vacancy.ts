import { makeAutoObservable } from 'mobx'
import { Key } from 'react'
import Api from '@services/api'
import { toast } from '@components'

export interface VacancyStoreModel {
	candidates: Candidates;
	filter: FilterType;
	state: StateType;
	fetchVacancy: (id: Key) => void;
	addCandidate: (id: Key, candidate: Candidate) => void;
	addCandidateInVacancy: (id: Key, candidateId: Key) => void;
	setFilter: (params: FilterType) => void;
}

class VacancyStore implements VacancyStoreModel {
	candidates: Candidates = []

	filter: FilterType = {
		age: 'Все',
		exp: 'Все',
		desiredSalary: 'Все',
	}

	state: StateType = 'pending'

	constructor() {
		makeAutoObservable(this, {}, { autoBind: true })
	}

	async fetchVacancy(id: Key) {
		this.state = 'pending'

		try {
			const res = await Api.get(`/vacancies/${id}`)
			this.candidates = res.data.candidates
			this.state = 'done'
		} catch (err) {
			this.state = 'error'
		}
	}

	async addCandidate(id: Key, candidate: Candidate) {
		try {
			const res = await Api.post('/candidates', candidate)
			this.addCandidateInVacancy(id, res.data.id)
		} catch (err) {
			toast.push({ label: 'Не удалось создать кандидата' })
		}
	}

	async addCandidateInVacancy(id: Key, candidateId: Key) {
		try {
			const res = await Api.put(`/vacancies/${id}`, { id: candidateId })

			this.fetchVacancy(res.data.id)
			toast.push({ label: 'Резюме успешно добавлено' })
		} catch (err) {
			toast.push({ label: 'Не удалось добавить кандидата в эту вакансию' })
		}
	}

	setFilter(params: FilterType) {
		this.filter[params.name] = params.value
	}

	get reviewSummaryCandidates() {
		return this.candidates.filter(({ status }) => status.toLowerCase() === 'рассмотрение резюме')
	}

	get phoneCandidates() {
		return this.candidates.filter(({ status }) => status.toLowerCase() === 'телефонное интервью')
	}

	get interviewCandidates() {
		return this.candidates.filter(({ status }) => status.toLowerCase() === 'собеседование')
	}

	get finalCandidates() {
		return this.candidates.filter(({ status }) => status.toLowerCase() === 'кандидаты')
	}
}

export default VacancyStore
