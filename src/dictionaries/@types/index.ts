interface Dictionary {
	_id: React.Key;
	name: string;
}

interface Office extends Dictionary {}
type Offices = Array<Office>

interface Department extends Dictionary {}
type Departments = Array<Department>

interface Profession extends Dictionary {}
type Professions = Array<Profession>

type PropsWithDictionaries<P> = P & {
	offices: Offices,
	departments: Departments,
	professions: Professions,
}
