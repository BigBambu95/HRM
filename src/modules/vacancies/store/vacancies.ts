import { Key } from 'react'
import { makeAutoObservable } from 'mobx'
import Api from '@services/api'
import { createQueryString } from '@helpers/sagas'
import { toast } from '@components'

export interface VacanciesStoreModel {
	vacancies: Vacancies;
	state: StateType;
	filter: FilterType;
	fetchVacancies: (params: FilterType) => void;
	addVacancy: (vacancy: ANY_MIGRATION_TYPE) => void;
	removeVacancy: (id: Key) => void;
	setFilter: (params: FilterType) => void;
}

export default class VacanciesStore implements VacanciesStoreModel {
	vacancies: Vacancies = []

	state: StateType = 'pending'

	filter: FilterType = {}

	constructor() {
		makeAutoObservable(this, {}, { autoBind: true })
	}

	async fetchVacancies(params: FilterType) {
		this.state = 'pending'
		const query = createQueryString(params)

		try {
			const res = await Api.get(`/vacancies/${query}`)
			this.vacancies = res.data
			this.state = 'done'
		} catch (err) {
			console.error('Произошла ошибка при загрузке вакансий', err)
			this.state = 'error'
		}
	}

	async addVacancy(vacancy: ANY_MIGRATION_TYPE) {
		try {
			const res = await Api.post('/vacancies', vacancy)
			this.vacancies.push(res.data)
			toast.push({ label: 'Вакансия добавлена' })
		} catch (err) {
			console.error(err)
			toast.push({ label: 'Произошла ошибка' })
		}
	}

	async removeVacancy(id: Key) {
		try {
			const res = await Api.delete(`/vacancies/${id}`)
			if (!res.data.status) {
				throw new Error('Произошла ошибка при удалении вакансии')
			}

			this.vacancies = this.vacancies.filter((v) => v.id !== id)
			toast.push({ label: 'Вакансия удалена' })
		} catch (err) {
			console.error(err)
			toast.push({ label: 'Произошла ошибка' })
		}
	}

	setFilter(params: FilterType) {
		this.filter[params.name] = params.value
	}
}
