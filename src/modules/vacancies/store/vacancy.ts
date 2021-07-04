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
	addCandidateInVacancy: (id: Key, candidates: Array<Key>) => void;
	setFilter: (params: FilterType) => void;
}

export default class VacancyStore implements VacancyStoreModel {
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
		} catch(err) {
			this.state = 'error'
		}
	}

	async addCandidate(id: Key, candidate: Candidate) {
		try {
			const res = await Api.post('/candidates', candidate)
			this.candidates.push(res.data)
			this.addCandidateInVacancy(id, this.candidates.map((item) => item.id))
		} catch(err) {
			console.error(err)
			toast.push({ label: "Не удалось добавить резюме" })
		}
	}

	async addCandidateInVacancy(id: Key, candidateIds: Array<Key>) {
		try {
			const res = await Api.put(`/vacancies/${id}`, candidateIds)
			if (!res.data.status) {
				throw new Error('Произошла ошибка при добавлении кандидата в вакансию')
			}

			toast.push({ label: 'Резюме успешно добавлено' })
		} catch(err) {
			toast.push({ label: "Не удалось добавить резюме" })
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
		return this.candidates.filter(({ status }) => status.toLowerCase() === 'кандидат')
	}

}