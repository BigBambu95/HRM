interface Vacancy {
	id: string;
	profession: string;
	url: string;
	office: string;
	date: string;
	quickly: boolean;
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
