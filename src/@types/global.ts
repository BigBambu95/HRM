type ANY_MIGRATION_TYPE = any

interface Tab {
	path: string;
	label: string;
	office: string;
	prevPage: string;
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

type AddTabParams = Record<'label' | 'path' | 'office' | 'prevPage', string>
