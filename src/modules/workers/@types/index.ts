interface Worker {
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

type Workers = Array<Worker>
