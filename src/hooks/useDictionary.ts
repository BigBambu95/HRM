import { useContext, useEffect } from 'react'
import { StoreContext } from '@store/StoreContext'

const useDictionary = () => {
	const { dictionariesStore } = useContext(StoreContext)
	const { professions, offices, departments, fetchOffices, fetchProfessions, fetchDepartments } = dictionariesStore

	useEffect(() => {
		fetchOffices()
		fetchProfessions()
		fetchDepartments()
	}, [])

	return [professions, offices, departments]
}

export default useDictionary