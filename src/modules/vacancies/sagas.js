import { takeEvery, call, put } from 'redux-saga/effects'
import HRMService from 'services/hrm-service'
import actions from './actions'

export function* fetchVacancies() {
	const vacancies = yield call(HRMService.getVacancies)
	try {
		yield put(actions.fetchVacanciesSuccess(vacancies))
	} catch(err) {
		yield put(actions.fetchVacanciesFailure(err))
	}
}

export function* watchFetchVacancies() {
	yield takeEvery('FETCH_VACANCIES_REQUEST', fetchVacancies)
}

export function* fetchVacancy({ payload }) {
	const vacancy = yield call(HRMService.getVacancy, payload.url)
	try {
		yield put(actions.fetchVacancySuccess(vacancy))
	} catch(err) {
		yield put(actions.fetchVacancyFailure(err))
	}
}

export function* watchfetchVacancy() {
	yield takeEvery('FETCH_VACANCY_REQUEST', fetchVacancy)
}