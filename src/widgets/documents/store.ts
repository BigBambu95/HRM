import { makeAutoObservable } from 'mobx'
import Api from '@shared/api'
import { createQueryString } from '@shared/helpers/sagas'
import { Key } from 'react'
import { toast } from '@shared/components'

export interface DocumentsStoreModel {
	documents: IDocument[];
	documentsSort: string;
	state: StateType;
	fetchDocuments: (params: FilterType) => void;
	removeDocument: (id: Key) => void;
}

export default class DocumentsStore implements DocumentsStoreModel {
	documents: IDocument[] = []

	documentsSort = 'none'

	state: StateType = 'pending'

	constructor() {
		makeAutoObservable(this, {}, { autoBind: true })
	}

	async fetchDocuments(params: FilterType) {
		this.state = 'pending'
		const query = createQueryString(params)

		try {
			const res = await Api.get(`/documents/${query}`)
			this.documents = res.data
			this.state = 'done'
		} catch (err) {
			console.error(err)
			this.state = 'error'
		}
	}

	async removeDocument(id: Key) {
		try {
			const res = await Api.delete(`/documents/${id}`)
			if (!res.data.status) {
				throw new Error('Произошла ошибка при удалении вакансии')
			}

			this.documents = this.documents.filter((v) => v.id !== id)
			toast.push({ label: 'Документ удален' })
		} catch (err) {
			console.error(err)
			toast.push({ label: 'Не удалось удалить документ' })
		}
	}
}
