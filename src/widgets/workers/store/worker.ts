import { makeAutoObservable } from 'mobx'
import Api from '@shared/api'
import { Key } from 'react'

interface WorkerStoreModel {
	worker: IWorker;
	filter: FilterType;
	state: StateType;
	fetchWorker: (id: Key) => void;
}

export default class WorkerStore implements WorkerStoreModel {
	worker = {} as IWorker

	filter = {
		profession: 'Все',
		office: 'Все',
		department: 'Все',
	}

	state: StateType = 'pending'

	constructor() {
		makeAutoObservable(this, {}, { autoBind: true })
	}

	async fetchWorker(id: Key) {
		this.state = 'pending'

		try {
			const res = await Api.get(`/workers/${id}`)
			this.worker = res.data
			this.state = 'done'
		} catch (err) {
			this.state = 'error'
		}
	}
}