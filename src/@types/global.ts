type ANY_MIGRATION_TYPE = any

interface Tab {
	path: string;
	label: string;
}

type Tabs = Array<Tab>

type ErrorType = boolean | null

type FilterType = Record<string, string>

type SetFilterParamsType = Record<'name' | 'value', string>

interface BaseState {
	loading: boolean;
	error: boolean | null;
}

interface VacancyListState extends BaseState {
	vacancies: Vacancies | [];
	vacancy: {
		candidates: Candidates | [],
		filter: FilterType,
	};
	filter: FilterType;
}

interface WorkersListState extends BaseState {
	workers: Workers;
	worker: {
		salary: ANY_MIGRATION_TYPE,
	};
	filter: FilterType;
}

interface DictionariesState {
	offices: Offices;
	professions: Professions;
	departments: Departments;
	loading: boolean;
	error: boolean | null;
}

interface GlobalState {
	workerList: WorkersListState;
	documentList: ANY_MIGRATION_TYPE;
	vacancyList: VacancyListState;
	salaryList: ANY_MIGRATION_TYPE;
	candidateList: ANY_MIGRATION_TYPE;
	menu: ANY_MIGRATION_TYPE;
	tabList: ANY_MIGRATION_TYPE;
	dictionaries: DictionariesState;
}
