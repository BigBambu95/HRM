import C from '../constants'
import worker from './worker'
import documentsActions from './documents'
import salary from './salary'
import candidates from './candidates'
import officesActions from './offices'

const addTab = (payload) => ({
	type: C.ADD_TAB,
	payload,
})

const updateTab = (payload) => ({
	type: C.UPDATE_TAB,
	payload,
})

const removeTab = (payload) => ({
	type: C.REMOVE_TAB,
	payload,
})

const hotVacanciesRequest = () => ({
	type: 'FETCH_HOT_VACANCIES_REQUEST',
})

const hotVacanciesLoaded = (hotVacancy) => ({
	payload: hotVacancy,
	type: 'FETCH_HOT_VACANCIES_SUCCESS',
})

const hotVacanciesError = (err) => ({
	payload: err,
	type: 'FETCH_HOT_VACANCIES_FAILURE',
})

export {
	worker,
	documentsActions,
	salary,
	candidates,
	officesActions,
	addTab,
	removeTab,
	updateTab,
	hotVacanciesRequest,
	hotVacanciesLoaded,
	hotVacanciesError,
}
