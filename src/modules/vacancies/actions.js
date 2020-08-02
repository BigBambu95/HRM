import { createActions } from 'redux-actions'

const actions = createActions({
	FETCH_VACANCIES_REQUEST: () => ({}),
	FETCH_VACANCIES_SUCCESS: (newVacancies) => ({ newVacancies }),
	FETCH_VACANCIES_FAILURE: (err) => ({ err }),
	FETCH_VACANCY_REQUEST: (id) => ({ id }),
	FETCH_VACANCY_SUCCESS: (vacancy) => ({ vacancy }),
	FETCH_VACANCY_FAILURE: (err) => ({ err }),
	FETCH_VACANCY_TEMPLATES_REQUEST: () => ({}),
	FETCH_VACANCY_TEMPLATES_SUCCESS: (templates) => ({ templates }),
	FETCH_VACANCY_TEMPLATES_FAILURE: (err) => ({ err }),
	SET_FILTER: (params) => ({ params }),
	ADD_VACANCY_REQUEST: (params) => ({ params }),
	ADD_VACANCY_SUCCESS: (newVacancy) => ({ newVacancy }),
	ADD_VACANCY_FAILURE: (err) => ({ err }),
	REMOVE_VACANCY: (id) => ({ id }),
	ARCHIVE_VACANCY_CANDIDATE: (candidate) => ({ candidate }),
	ARCHIVE_VACANCY_CANDIDATES: (newArchiveCandidates) => ({
		newArchiveCandidates,
	}),
})

export default actions
