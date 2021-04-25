import { createActions } from 'redux-actions'
import { SUCCESS, REQUEST, FAILURE } from 'helpers/redux'
import { FETCH_VACANCIES, FETCH_VACANCY, SET_FILTER, ADD_VACANCY, REMOVE_VACANCY } from './types'
import { Key } from 'react'

const actions = createActions<ANY_MIGRATION_TYPE>({
	[REQUEST(FETCH_VACANCIES)]: (params: ANY_MIGRATION_TYPE) => params,
	[SUCCESS(FETCH_VACANCIES)]: (newVacancies: Vacancies) => newVacancies,
	[FAILURE(FETCH_VACANCIES)]: (err: boolean | null) => err,
	[REQUEST(FETCH_VACANCY)]: (id: Key) => id,
	[SUCCESS(FETCH_VACANCY)]: (vacancy: Vacancy) => vacancy,
	[FAILURE(FETCH_VACANCY)]: (err: boolean | null) => err,
	[SET_FILTER]: (params: ANY_MIGRATION_TYPE) => params,
	[REQUEST(ADD_VACANCY)]: (params: ANY_MIGRATION_TYPE) => params,
	[SUCCESS(ADD_VACANCY)]: (newVacancy: Vacancy) => newVacancy,
	[FAILURE(ADD_VACANCY)]: (err: boolean | null) => err,
	[REQUEST(REMOVE_VACANCY)]: (id: Key) => id,
	[SUCCESS(REMOVE_VACANCY)]: (id: Key) => id,
	[FAILURE(REMOVE_VACANCY)]: (err: boolean | null) => err,
	ARCHIVE_VACANCY_CANDIDATE: (candidate: Candidate) => ({ candidate }),
	ARCHIVE_VACANCY_CANDIDATES: (newArchiveCandidates: Candidates) => ({
		newArchiveCandidates,
	}),
})

export default actions
