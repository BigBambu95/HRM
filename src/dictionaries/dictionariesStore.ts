import { makeAutoObservable } from 'mobx'
import Api from '@services/api'

interface DictionariesStoreModel {
	offices: Offices;
	professions: Professions;
	departments: Departments;
	fetchOffices: () => void;
	fetchProfessions: () => void;
	fetchDepartments: () => void;
}

class DictionariesStore implements DictionariesStoreModel {
	offices: Offices = []

	professions: Professions = []

	departments: Departments = []

	constructor() {
		makeAutoObservable(this, {}, { autoBind: true })
	}

	private async fetchDictionary(dictionary: string) {
		const res = await Api.get(`/${dictionary}`)
		try {
			this[dictionary] = res.data
		} catch(err) {
			console.error(err)
		}
	}

	fetchOffices() {
		this.fetchDictionary('offices')
	}

	fetchProfessions() {
		this.fetchDictionary('professions')
	}

	fetchDepartments() {
		this.fetchDictionary('departments')
	}
}

export default DictionariesStore