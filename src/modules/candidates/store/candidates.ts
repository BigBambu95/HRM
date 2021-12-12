import { makeAutoObservable } from 'mobx'
import Api from '@services/api'
import { createQueryString } from '@helpers/sagas'

export interface CandidatesStoreModel {
	candidates: Candidates;
	state: StateType;
	fetchCandidates: (params: FilterType) => void;
	setFilter: (params: FilterType) => void;
}

export default class CandidatesStore {
	candidates: Candidates = []

	filter: FilterType = {}

	state: StateType = 'pending'

	constructor() {
		makeAutoObservable(this, {}, { autoBind: true })
	}

	async fetchCandidates(params: FilterType) {
		this.state = 'pending'
		const query = createQueryString(params)

		try {
			const res = await Api.get(`/candidates/${query}`)
			this.candidates = res.data
			this.state = 'done'
		} catch (err) {
			this.state = 'error'
		}
	}

	setFilter(params: FilterType) {
		this.filter[params.name] = params.value
	}
}
