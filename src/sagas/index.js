import { all, put, takeEvery, call } from 'redux-saga/effects'
import HRMService from 'services/hrm-service'
import {
	watchFetchVacancies,
	watchfetchVacancy,
	watchFetchVacancyTemplates,
	watchAddVacancy,
	watchRemoveVacancy,
} from 'modules/vacancies/sagas'

import { watchFetchWorkers, watchFetchWorker } from 'modules/workers/sagas'
import { officesActions } from 'actions'
import Api from 'services/api'

export function* fetchHotVacancies() {
	const vacancies = yield call(HRMService.getHotVacancies)
	try {
		yield put({ type: 'FETCH_HOT_VACANCIES_SUCCESS', vacancies })
	} catch (err) {
		yield put({ type: 'FETCH_HOT_VACANCIES_FAILURE', vacancies })
	}
}

export function* watchFetchHotVacancies() {
	yield takeEvery('FETCH_HOT_VACANCIES_REQUEST', fetchHotVacancies)
}

export function* fetchOffices() {
	try {
		const offices = yield call(Api.get, '/offices')
		yield put(officesActions.fetchOfficesSuccess(offices.data))
	} catch (err) {
		yield put(officesActions.fetchOfficesFailure(err))
	}
}

export function* watchFetchOffices() {
	yield takeEvery('FETCH_OFFICES_REQUEST', fetchOffices)
}

export default function* rootSaga() {
	yield all([
		watchFetchHotVacancies(),
		watchFetchVacancies(),
		watchfetchVacancy(),
		watchFetchOffices(),
		watchFetchVacancyTemplates(),
		watchAddVacancy(),
		watchRemoveVacancy(),
		watchFetchWorkers(),
		watchFetchWorker(),
	])
}
