import { createActions } from 'redux-actions'
import { SUCCESS, REQUEST, FAILURE } from 'helpers/redux'
import VacancyTypes from './types'
import { Key } from 'react'

const actions = createActions<ANY_MIGRATION_TYPE>({
	[REQUEST(VacancyTypes.FETCH_VACANCIES)]: (params: ANY_MIGRATION_TYPE) => params,
	[SUCCESS(VacancyTypes.FETCH_VACANCIES)]: (newVacancies: Vacancies) => newVacancies,
	[FAILURE(VacancyTypes.FETCH_VACANCIES)]: (err: boolean | null) => err,
	[REQUEST(VacancyTypes.FETCH_VACANCY)]: (id: Key) => id,
	[SUCCESS(VacancyTypes.FETCH_VACANCY)]: (vacancy: Vacancy) => vacancy,
	[FAILURE(VacancyTypes.FETCH_VACANCY)]: (err: boolean | null) => err,
	[VacancyTypes.SET_FILTER]: (params: ANY_MIGRATION_TYPE) => params,
	[REQUEST(VacancyTypes.ADD_VACANCY)]: (params: ANY_MIGRATION_TYPE) => params,
	[SUCCESS(VacancyTypes.ADD_VACANCY)]: (newVacancy: Vacancy) => newVacancy,
	[FAILURE(VacancyTypes.ADD_VACANCY)]: (err: boolean | null) => err,
	[REQUEST(VacancyTypes.REMOVE_VACANCY)]: (id: Key) => id,
	[SUCCESS(VacancyTypes.REMOVE_VACANCY)]: (id: Key) => id,
	[FAILURE(VacancyTypes.REMOVE_VACANCY)]: (err: boolean | null) => err,
	ARCHIVE_VACANCY_CANDIDATE: (candidate: Candidate) => ({ candidate }),
	ARCHIVE_VACANCY_CANDIDATES: (newArchiveCandidates: Candidates) => ({
		newArchiveCandidates,
	}),
})

export default actions
