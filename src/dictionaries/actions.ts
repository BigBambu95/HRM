import { createAction } from 'redux-actions'
import { REQUEST, SUCCESS, FAILURE } from 'helpers/redux'
import { FETCH_OFFICES, FETCH_DEPARTMENTS, FETCH_PROFESSIONS } from './types'

// Fetch offices
const fetchOfficesRequest = createAction(REQUEST(FETCH_OFFICES))
const fetchOfficesSuccess = createAction(SUCCESS(FETCH_OFFICES), (offices: Offices) => offices)
const fetchOfficesFailure = createAction(FAILURE(FETCH_OFFICES), (err: ErrorType) => err)

// Fetch professions
const fetchProfessionsRequest = createAction(REQUEST(FETCH_PROFESSIONS))
const fetchProfessionsSuccess = createAction(SUCCESS(FETCH_PROFESSIONS), (professions: Professions) => professions)
const fetchProfessionsFailure = createAction(FAILURE(FETCH_PROFESSIONS), (err: ErrorType) => err)

// Fetch departments
const fetchDepartmentsRequest = createAction(REQUEST(FETCH_DEPARTMENTS))
const fetchDepartmentsSuccess = createAction(SUCCESS(FETCH_DEPARTMENTS), (departments: Departments) => departments)
const fetchDepartmentsFailure = createAction(FAILURE(FETCH_DEPARTMENTS), (err: ErrorType) => err)

export default {
	fetchOfficesRequest,
	fetchOfficesSuccess,
	fetchOfficesFailure,
	fetchProfessionsRequest,
	fetchProfessionsSuccess,
	fetchProfessionsFailure,
	fetchDepartmentsRequest,
	fetchDepartmentsSuccess,
	fetchDepartmentsFailure,
}
