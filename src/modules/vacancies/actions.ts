import { createActions } from 'redux-actions'
import { SUCCESS, REQUEST, FAILURE } from 'helpers/redux'
import VacancyTypes from './types'

const actions = createActions({
	[REQUEST(VacancyTypes.FETCH_VACANCIES)]: (params) => params,
	[SUCCESS(VacancyTypes.FETCH_VACANCIES)]: (newVacancies) => newVacancies,
	[FAILURE(VacancyTypes.FETCH_VACANCIES)]: (err) => err,
	[REQUEST(VacancyTypes.FETCH_VACANCY)]: (id) => id,
	[SUCCESS(VacancyTypes.FETCH_VACANCY)]: (vacancy) => vacancy,
	[FAILURE(VacancyTypes.FETCH_VACANCY)]: (err) => err,
	[VacancyTypes.SET_FILTER]: (params) => params,
	[REQUEST(VacancyTypes.ADD_VACANCY)]: (params) => params,
	[SUCCESS(VacancyTypes.ADD_VACANCY)]: (newVacancy) => newVacancy,
	[FAILURE(VacancyTypes.ADD_VACANCY)]: (err) => err,
	[REQUEST(VacancyTypes.REMOVE_VACANCY)]: (id) => id,
	[SUCCESS(VacancyTypes.REMOVE_VACANCY)]: (id) => id,
	[FAILURE(VacancyTypes.REMOVE_VACANCY)]: (err) => err,
	ARCHIVE_VACANCY_CANDIDATE: (candidate) => ({ candidate }),
	ARCHIVE_VACANCY_CANDIDATES: (newArchiveCandidates) => ({
		newArchiveCandidates,
	}),
})

export default actions
