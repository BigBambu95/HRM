import { makeAutoObservable } from 'mobx'
import Api from '@shared/api'
import { createQueryString } from '@shared/helpers/sagas'

export interface SalaryStoreModel {
	salaryList: { name: string, salary: Salary }[];
	state: StateType;
	fetchSalaryList: (params: FilterType) => void;
}

export default class SalaryStore implements SalaryStoreModel {
	salaryList: { name: string, salary: Salary }[] = []

	state: StateType = 'pending'

	filter: FilterType = {}

	constructor() {
		makeAutoObservable(this, {}, { autoBind: true })
	}

	async fetchSalaryList(params: any) {
		this.state = 'pending'
		const query = createQueryString(params)

		try {
			const res = await Api.get(`/salaries/${query}`)
			this.salaryList = res.data
			this.state = 'done'
		} catch (err) {
			console.error(err)
			this.state = 'error'
		}
	}

	setFilter(params: FilterType) {
		this.filter[params.name] = params.value
	}
}
