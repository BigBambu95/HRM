import { call, put, takeEvery } from 'redux-saga/effects'
import { REQUEST } from 'helpers/redux'
import Api from 'services/api'
import { FETCH_OFFICES, FETCH_PROFESSIONS } from './types'
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
		const templates = yield call(Api.get, '/vacancies/templates')
		yield put(dictionaryActions.fetchProfessionsSuccess(templates.data))
	} catch (err) {
		yield put(dictionaryActions.fetchProfessionsFailure(err))
	}
}

export function* watchFetchProfessions() {
	yield takeEvery(REQUEST(FETCH_PROFESSIONS), fetchProfessions)
}
