import { DocumentsStore } from '@widgets/documents'
import { SalaryStore } from '@widgets/salary'
import { CandidatesStore } from '@widgets/candidates'
import { VacanciesStore, VacancyStore } from '@widgets/vacancies'
import { WorkerStore, WorkersStore } from '@widgets/workers'
import DictionariesStore from './dictionariesStore'
import TabsStore from './TabsStore'

export interface RootStoreModel {
	vacanciesStore: VacanciesStore;
	vacancyStore: VacancyStore;
	workerStore: WorkerStore;
	workersStore: WorkersStore;
	dictionariesStore: DictionariesStore;
	documentsStore: DocumentsStore;
	salariesStore: SalaryStore;
	tabsStore: TabsStore;
	candidatesStore: CandidatesStore;
}

class RootStore implements RootStoreModel {
	vacanciesStore

	vacancyStore

	workerStore

	workersStore

	dictionariesStore

	documentsStore

	salariesStore

	tabsStore

	candidatesStore

	constructor() {
		this.vacanciesStore = new VacanciesStore()
		this.vacancyStore = new VacancyStore()
		this.workersStore = new WorkersStore()
		this.workerStore = new WorkerStore()
		this.dictionariesStore = new DictionariesStore()
		this.documentsStore = new DocumentsStore()
		this.salariesStore = new SalaryStore()
		this.tabsStore = new TabsStore()
		this.candidatesStore = new CandidatesStore()
	}
}

const rootStore = new RootStore()

export default rootStore
