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

type AddTabParams = Record<'label' | 'path' | 'office' | 'prevPage', string>

type StateType = 'pending' | 'done' | 'error'