import { takeEvery, call, put } from 'redux-saga/effects'
import Api from 'services/api'
import actions from './actions'

export function* fetchVacancies() {
	try {
		const vacancies = yield call(Api.get, '/vacancies')
		yield put(actions.fetchVacanciesSuccess(vacancies.data))
	} catch (err) {
		yield put(actions.fetchVacanciesFailure(err))
	}
}

export function* watchFetchVacancies() {
	yield takeEvery('FETCH_VACANCIES_REQUEST', fetchVacancies)
}

export function* fetchVacancy({ payload }) {
	try {
		const vacancy = yield call(Api.get, `/vacancies/${payload.id}`)
		yield put(actions.fetchVacancySuccess(vacancy.data))
	} catch (err) {
		yield put(actions.fetchVacancyFailure(err))
	}
}

export function* watchfetchVacancy() {
	yield takeEvery('FETCH_VACANCY_REQUEST', fetchVacancy)
}

export function* fetchVacancyTemplates() {
	try {
		const templates = yield call(Api.get, '/vacancies/templates')
		yield put(actions.fetchVacancyTemplatesSuccess(templates.data))
	} catch (err) {
		yield put(actions.fetchVacancyTemplatesFailure(err))
	}
}

export function* watchFetchVacancyTemplates() {
	yield takeEvery('FETCH_VACANCY_TEMPLATES_REQUEST', fetchVacancyTemplates)
}