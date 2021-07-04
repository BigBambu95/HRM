interface DictionaryRecord {
	id: React.Key;
	name: string;
}

type Office = DictionaryRecord
type Offices = Array<Office>

type Department = DictionaryRecord
type Departments = Array<Department>

type Profession = DictionaryRecord
type Professions = Array<Profession>

type PropsWithDictionaries<P> = P & {
	offices: Offices,
	departments: Departments,
	professions: Professions,
}