type ANY_MIGRATION_TYPE = any

interface Tab {
	path: string;
	label: string;
}

type Tabs = Array<Tab>

interface BaseState {
	loading: boolean;
	error: boolean | null;
}

type FilterType = Record<string, string>
