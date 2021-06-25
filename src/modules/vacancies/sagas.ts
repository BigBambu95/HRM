import { takeEvery, call, put, all, StrictEffect } from 'redux-saga/effects'
import Api from 'services/api'
import { REQUEST } from 'helpers/redux'
import { createQueryString } from 'helpers/sagas'
import { Toast } from 'components'
import { Action } from 'redux-actions'
import actions from './actions'
import { FETCH_VACANCY, FETCH_VACANCIES, ADD_VACANCY, REMOVE_VACANCY } from './types'

function* fetchVacancies(action: Action<FilterType>): Generator<StrictEffect, void, Record<'data', Vacancies>> {
	try {
		const query = createQueryString(action.payload)
		const vacancies = yield call(Api.get, `/vacancies/${query}`)
		yield put(actions.fetchVacanciesSuccess(vacancies.data))
	} catch (err) {
		yield put(actions.fetchVacanciesFailure(err))
	}
}

function* watchFetchVacancies() {
	yield takeEvery(REQUEST(FETCH_VACANCIES), fetchVacancies)
}

function* fetchVacancy(action: Action<string>): Generator<StrictEffect, void, Record<'data', Vacancy>> {
	try {
		const vacancy = yield call(Api.get, `/vacancies/${action.payload}`)
		yield put(actions.fetchVacancySuccess(vacancy.data))
	} catch (err) {
		yield put(actions.fetchVacancyFailure(err))
	}
}

function* watchfetchVacancy() {
	yield takeEvery(REQUEST(FETCH_VACANCY), fetchVacancy)
}

function* addVacancy(action: Action<Vacancy>): Generator<StrictEffect, void, Record<'data', Vacancy>> {
	try {
		const vacancy = yield call(Api.post, '/vacancies', action.payload)
		yield put(actions.addVacancySuccess(vacancy.data))
		new Toast().push({ label: 'Вакансия добавлена' })
	} catch (err) {
		yield put(actions.addVacancyFailure(err))
		console.error(err)
		new Toast().push({ label: 'Произошла ошибка' })
	}
}

function* watchAddVacancy() {
	yield takeEvery(REQUEST(ADD_VACANCY), addVacancy)
}

function* removeVacancy(action: Action<string>): Generator<StrictEffect, void, Record<'data', any>> {
	try {
		const res = yield call(Api.delete, `/vacancies/${action.payload}`)
		if (!res.data.status) {
			throw new Error('Произошла ошибка при удалении вакансии')
		}
		yield put(actions.removeVacancySuccess(action.payload))
		new Toast().push({ label: 'Вакансия удалена' })
	} catch (err) {
		yield put(actions.removeVacancyFailure(err))
	}
}

function* watchRemoveVacancy() {
	yield takeEvery(REQUEST(REMOVE_VACANCY), removeVacancy)
}

export default function* rootSaga() {
	yield all([watchFetchVacancies(), watchfetchVacancy(), watchAddVacancy(), watchRemoveVacancy()])
}
