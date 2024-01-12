interface IWorker {
	id: React.Key;
	name: string;
	profession: string;
	office: string;
	email: string;
	phone: string;
	department: string;
	avatar: string;
	status: string;
	salary?: ANY_MIGRATION_TYPE;
	tags: Array<string>;
}

type Workers = Array<IWorker>

interface WorkersListState {
	workers: Workers;
	worker: IWorker;
	filter: FilterType;
}
