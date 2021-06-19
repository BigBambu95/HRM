interface IWorker {
	_id: React.Key;
	name: string;
	profession: string;
	office: string;
	email: string;
	phone: string;
	department: string;
	avatar: string;
	status: string;
	tags: Array<string>;
}

type Workers = Array<IWorker>

interface WorkersListState extends BaseState {
	workers: Workers;
	worker: IWorker;
	filter: FilterType;
}
