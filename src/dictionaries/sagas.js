import { call, put, takeEvery } from 'redux-saga/effects'
import { REQUEST } from 'helpers/redux'
import Api from 'services/api'
import { FETCH_OFFICES, FETCH_PROFESSIONS, FETCH_DEPARTMENTS } from './types'
import dictionaryActions from './actions'

function* fetchOffices() {
	try {
		const offices = yield call(Api.get, '/offices')
		yield put(dictionaryActions.fetchOfficesSuccess(offices.data))
	} catch (err) {
		yield put(dictionaryActions.fetchOfficesFailure(err))
	}
}

export function* watchFetchOffices() {
	yield takeEvery(REQUEST(FETCH_OFFICES), fetchOffices)
}

function* fetchProfessions() {
	try {
		const professions = yield call(Api.get, '/professions')
		yield put(dictionaryActions.fetchProfessionsSuccess(professions.data))
	} catch (err) {
		yield put(dictionaryActions.fetchProfessionsFailure(err))
	}
}

export function* watchFetchProfessions() {
	yield takeEvery(REQUEST(FETCH_PROFESSIONS), fetchProfessions)
}

function* fetchDepartments() {
	try {
		const departments = yield call(Api.get, '/departments')
		yield put(dictionaryActions.fetchDepartmentsSuccess(departments.data))
	} catch (err) {
		yield put(dictionaryActions.fetchDepartmentsFailure(err))
	}
}

export function* watchFetchDepartments() {
	yield takeEvery(REQUEST(FETCH_DEPARTMENTS), fetchDepartments)
}
