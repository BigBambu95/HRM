import { createActions } from 'redux-actions'

const actions = createActions({
	FETCH_VACANCIES_REQUEST: () => ({}),
	FETCH_VACANCIES_SUCCESS: (newVacancies) => ({ newVacancies }),
	FETCH_VACANCIES_FAILURE: (err) => ({ err }),
	FETCH_VACANCY_REQUEST: (url) => ({ url }),
	FETCH_VACANCY_SUCCESS: (vacancy) => ({ vacancy }),
	FETCH_VACANCY_FAILURE: (err) => ({ err }),
	SET_FILTER_PROFESSION_VALUE: (val) => ({ val }),
	SET_FILTER_OFFICE_VALUE: (val) => ({ val }),
	ADD_VACANCY: (newVacancy) => ({ newVacancy }),
	REMOVE_VACANCY: (id) => ({ id }),
	ARCHIVE_VACANCY_CANDIDATE: (candidate) => ({ candidate }),
	ARCHIVE_VACANCY_CANDIDATES: (newArchiveCandidates) => ({ newArchiveCandidates }),
})

export default actions