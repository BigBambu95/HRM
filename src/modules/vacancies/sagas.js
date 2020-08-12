import { takeEvery, call, put } from 'redux-saga/effects'
import Api from 'services/api'
import { REQUEST } from 'helpers/redux'
import actions from './actions'
import {
	FETCH_VACANCIES,
	FETCH_VACANCY,
	ADD_VACANCY,
	REMOVE_VACANCY,
	FETCH_VACANCY_TEMPLATES,
} from './types'

export function* fetchVacancies() {
	try {
		const vacancies = yield call(Api.get, '/vacancies')
		yield put(actions.vacancies.fetchVacanciesSuccess(vacancies.data))
	} catch (err) {
		yield put(actions.vacancies.fetchVacanciesFailure(err))
	}
}

export function* watchFetchVacancies() {
	yield takeEvery(REQUEST(FETCH_VACANCIES), fetchVacancies)
}

export function* fetchVacancy({ payload }) {
	try {
		const vacancy = yield call(Api.get, `/vacancies/${payload}`)
		yield put(actions.vacancies.fetchVacancySuccess(vacancy.data))
	} catch (err) {
		yield put(actions.vacancies.fetchVacancyFailure(err))
	}
}

export function* watchfetchVacancy() {
	yield takeEvery(REQUEST(FETCH_VACANCY), fetchVacancy)
}

export function* fetchVacancyTemplates() {
	try {
		const templates = yield call(Api.get, '/vacancies/templates')
		yield put(actions.vacancies.fetchVacancyTemplatesSuccess(templates.data))
	} catch (err) {
		yield put(actions.vacancies.fetchVacancyTemplatesFailure(err))
	}
}

export function* watchFetchVacancyTemplates() {
	yield takeEvery(REQUEST(FETCH_VACANCY_TEMPLATES), fetchVacancyTemplates)
}

export function* addVacancy({ payload }) {
	try {
		const vacancy = yield call(Api.post, '/vacancies', payload)

		yield put(actions.vacancies.addVacancySuccess(vacancy.data))
	} catch (err) {
		yield put(actions.vacancies.addVacancyFailure(err))
	}
}

export function* watchAddVacancy() {
	yield takeEvery(REQUEST(ADD_VACANCY), addVacancy)
}

export function* removeVacancy({ payload }) {
	try {
		const res = yield call(Api.delete, `/vacancies/${payload}`)
		if (!res.data.status) {
			throw new Error('Произошла ошибка при удалении вакансии')
		}

		yield put(actions.vacancies.removeVacancySuccess(payload))
	} catch (err) {
		yield put(actions.vacancies.removeVacancyFailure(err))
	}
}

export function* watchRemoveVacancy() {
	yield takeEvery(REQUEST(REMOVE_VACANCY), removeVacancy)
}
