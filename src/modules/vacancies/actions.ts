import { createAction } from 'redux-actions'
import { SUCCESS, REQUEST, FAILURE } from 'helpers/redux'
import { Key } from 'react'
import { FETCH_VACANCIES, FETCH_VACANCY, SET_FILTER, ADD_VACANCY, REMOVE_VACANCY } from './types'

// const actions = createActions<ANY_MIGRATION_TYPE>({
// 	ARCHIVE_VACANCY_CANDIDATE: (candidate: Candidate) => ({ candidate }),
// 	ARCHIVE_VACANCY_CANDIDATES: (newArchiveCandidates: Candidates) => ({
// 		newArchiveCandidates,
// 	}),
// })

// Fetch Vacancies
const fetchVacanciesRequest = createAction(REQUEST(FETCH_VACANCIES), (params: FilterType) => params)
const fetchVacanciesSuccess = createAction(SUCCESS(FETCH_VACANCIES), (newVacancies: Vacancies) => newVacancies)
const fetchVacanciesFailure = createAction(FAILURE(FETCH_VACANCIES), (err: ErrorType) => err)

// Fetch Vacancy
const fetchVacancyRequest = createAction(REQUEST(FETCH_VACANCY), (id: Key) => id)
const fetchVacancySuccess = createAction(SUCCESS(FETCH_VACANCY), (vacancy: Vacancy) => vacancy)
const fetchVacancyFailure = createAction(FAILURE(FETCH_VACANCY), (err: ErrorType) => err)

// Add Vacancy
const addVacancyRequest = createAction(REQUEST(ADD_VACANCY), (params: ANY_MIGRATION_TYPE) => params)
const addVacancySuccess = createAction(SUCCESS(ADD_VACANCY), (newVacancy: Vacancy) => newVacancy)
const addVacancyFailure = createAction(FAILURE(ADD_VACANCY), (err: ErrorType) => err)

// Remove Vacancy
const removeVacancyRequest = createAction(REQUEST(REMOVE_VACANCY), (id: Key) => id)
const removeVacancySuccess = createAction(SUCCESS(REMOVE_VACANCY), (id: Key) => id)
const removeVacancyFailure = createAction(FAILURE(REMOVE_VACANCY), (err: ErrorType) => err)

const setFilter = createAction(SET_FILTER, (params: SetFilterParamsType) => params)

export default {
	fetchVacanciesRequest,
	fetchVacanciesSuccess,
	fetchVacanciesFailure,
	fetchVacancyRequest,
	fetchVacancySuccess,
	fetchVacancyFailure,
	addVacancyRequest,
	addVacancySuccess,
	addVacancyFailure,
	removeVacancyRequest,
	removeVacancySuccess,
	removeVacancyFailure,
	setFilter,
}
