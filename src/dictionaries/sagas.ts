import { call, put, takeEvery, all } from 'redux-saga/effects'
import { REQUEST } from 'helpers/redux'
import Api from 'services/api'
import DictionariesTypes from './types'
import dictionaryActions from './actions'

function* fetchOffices() {
	try {
		const offices = yield call(Api.get, '/offices')
		yield put(dictionaryActions.fetchOfficesSuccess(offices.data))
	} catch (err) {
		yield put(dictionaryActions.fetchOfficesFailure(err))
	}
}

function* watchFetchOffices() {
	yield takeEvery(REQUEST(DictionariesTypes.FETCH_OFFICES), fetchOffices)
}

function* fetchProfessions() {
	try {
		const professions = yield call(Api.get, '/professions')
		yield put(dictionaryActions.fetchProfessionsSuccess(professions.data))
	} catch (err) {
		yield put(dictionaryActions.fetchProfessionsFailure(err))
	}
}

function* watchFetchProfessions() {
	yield takeEvery(REQUEST(DictionariesTypes.FETCH_PROFESSIONS), fetchProfessions)
}

function* fetchDepartments() {
	try {
		const departments = yield call(Api.get, '/departments')
		yield put(dictionaryActions.fetchDepartmentsSuccess(departments.data))
	} catch (err) {
		yield put(dictionaryActions.fetchDepartmentsFailure(err))
	}
}

function* watchFetchDepartments() {
	yield takeEvery(REQUEST(DictionariesTypes.FETCH_DEPARTMENTS), fetchDepartments)
}

export default function* rootSaga() {
	yield all([watchFetchOffices(), watchFetchProfessions(), watchFetchDepartments()])
}