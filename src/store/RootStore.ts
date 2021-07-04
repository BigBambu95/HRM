import { DocumentsStore } from '@modules/documents'
import { SalaryStore } from '@modules/salary'
import { VacanciesStore, VacancyStore } from '../modules/vacancies'
import { WorkerStore, WorkersStore } from '../modules/workers'
import DictionariesStore from '../dictionaries'

export interface RootStoreModel {
	vacanciesStore: VacanciesStore;
	vacancyStore: VacancyStore;
	workerStore: WorkerStore;
	workersStore: WorkersStore;
	dictionariesStore: DictionariesStore;
	documentsStore: DocumentsStore;
	salariesStore: SalaryStore;
}


class RootStore implements RootStoreModel {
	vacanciesStore

	vacancyStore

	workerStore

	workersStore

	dictionariesStore

	documentsStore

	salariesStore

	constructor() {
		this.vacanciesStore = new VacanciesStore()
		this.vacancyStore = new VacancyStore()
		this.workersStore = new WorkersStore()
		this.workerStore = new WorkerStore()
		this.dictionariesStore = new DictionariesStore()
		this.documentsStore = new DocumentsStore()
		this.salariesStore = new SalaryStore()
	}
}

const rootStore = new RootStore()

export default rootStore