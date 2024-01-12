import { makeAutoObservable } from 'mobx'
import Api from '@shared/api'
import { createQueryString } from '@shared/helpers/sagas'
import Workers from '@pages/workers'

export interface WorkersStoreModel {
	workers: Workers;
	filter: FilterType;
	state: StateType;
	fetchWorkers: (params: FilterType) => void;
	setFilter: (params: FilterType) => void;
}

export default class WorkersStore implements WorkersStoreModel {
	workers: Workers = []

	filter: FilterType = {
		profession: 'Все',
		office: 'Все',
		department: 'Все',
	}

	state: StateType = 'pending'

	constructor() {
		makeAutoObservable(this, {}, { autoBind: true })
	}

	async fetchWorkers(params: FilterType) {
		this.state = 'pending'
		const query = createQueryString(params)

		try {
			const res = await Api.get(`/workers/${query}`)
			this.workers = res.data
			this.state = 'done'
		} catch (err) {
			this.state = 'error'
		}
	}

	setFilter(params: FilterType) {
		this.filter[params.name] = params.value
	}
}
