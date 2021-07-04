import { makeAutoObservable } from 'mobx'
import Api from '@services/api'
import { createQueryString } from '@helpers/sagas'

export interface SalaryStoreModel {
	salaryList: Salaries;
	sort: string;
	state: StateType;
	fetchSalaryList: (params: FilterType) => void;
}

export default class SalaryStore implements SalaryStoreModel {
	salaryList: Salaries = []

	sort = ''

	state: StateType = 'pending'

	constructor() {
		makeAutoObservable(this, {}, { autoBind: true })
	}

	async fetchSalaryList(params: FilterType) {
		this.state = 'pending'
		const query = createQueryString(params)

		try {
			const res = await Api.get(`/salaries/${query}`)
			this.salaryList = res.data
			this.state = 'done'
		} catch(err) {
			console.error(err)
			this.state = 'error'
		}
	}
}