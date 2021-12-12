interface Vacancy {
	id: string;
	url?: string;
	profession: string;
	office: string;
	date: string;
}

type Vacancies = Array<Vacancy>

interface Candidate {
	id: string;
	name: string;
	avatar: string;
	status: string;
	age: string;
	exp: string;
	desiredSalary: string;
}

type Candidates = Array<Candidate>
