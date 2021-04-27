interface DictionaryRecord {
	_id: React.Key;
	name: string;
}

interface Office extends DictionaryRecord {}
type Offices = Array<Office>

interface Department extends DictionaryRecord {}
type Departments = Array<Department>

interface Profession extends DictionaryRecord {}
type Professions = Array<Profession>

type PropsWithDictionaries<P> = P & {
	offices: Offices,
	departments: Departments,
	professions: Professions,
}
