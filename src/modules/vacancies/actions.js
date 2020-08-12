import { createActions } from 'redux-actions'
import { SUCCESS, REQUEST, FAILURE } from 'helpers/redux'
import {
	FETCH_VACANCIES,
	FETCH_VACANCY,
	FETCH_VACANCY_TEMPLATES,
	ADD_VACANCY,
	REMOVE_VACANCY,
	SET_FILTER,
} from './types'

const actions = createActions({
	[REQUEST(FETCH_VACANCIES)]: () => ({}),
	[SUCCESS(FETCH_VACANCIES)]: (newVacancies) => newVacancies,
	[FAILURE(FETCH_VACANCIES)]: (err) => err,
	[REQUEST(FETCH_VACANCY)]: (id) => id,
	[SUCCESS(FETCH_VACANCY)]: (vacancy) => vacancy,
	[FAILURE(FETCH_VACANCY)]: (err) => err,
	[REQUEST(FETCH_VACANCY_TEMPLATES)]: () => ({}),
	[SUCCESS(FETCH_VACANCY_TEMPLATES)]: (templates) => templates,
	[FAILURE(FETCH_VACANCY_TEMPLATES)]: (err) => err,
	[SET_FILTER]: (params) => params,
	[REQUEST(ADD_VACANCY)]: (params) => params,
	[SUCCESS(ADD_VACANCY)]: (newVacancy) => newVacancy,
	[FAILURE(ADD_VACANCY)]: (err) => err,
	[REQUEST(REMOVE_VACANCY)]: (id) => id,
	[SUCCESS(REMOVE_VACANCY)]: (id) => id,
	[FAILURE(REMOVE_VACANCY)]: (err) => err,
	ARCHIVE_VACANCY_CANDIDATE: (candidate) => ({ candidate }),
	ARCHIVE_VACANCY_CANDIDATES: (newArchiveCandidates) => ({
		newArchiveCandidates,
	}),
})

export default actions
