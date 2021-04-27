import { takeEvery, call, put, all } from 'redux-saga/effects'
import Api from 'services/api'
import { REQUEST } from 'helpers/redux'
import { createQueryString } from 'helpers/sagas'
import { Toast } from 'components'
import actions from './actions'
import { FETCH_VACANCY, FETCH_VACANCIES, ADD_VACANCY, REMOVE_VACANCY } from './types'
import { Action } from 'redux-actions'

function* fetchVacancies(action: Action<FilterType>): ANY_MIGRATION_TYPE {
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

function* fetchVacancy(action: Action<string>): ANY_MIGRATION_TYPE {
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

function* addVacancy(action: Action<Vacancy>): ANY_MIGRATION_TYPE {
	try {
		const vacancy = yield call(Api.post, '/vacancies', action.payload)

		yield put(actions.addVacancySuccess(vacancy.data))
		Toast.push({ label: 'Вакансия добавлена' })
	} catch (err) {
		yield put(actions.addVacancyFailure(err))
		Toast.push({ label: 'Произошла ошибка' })
	}
}

function* watchAddVacancy() {
	yield takeEvery(REQUEST(ADD_VACANCY), actions.addVacancyRequest)
}

function* removeVacancy(action: Action<string>): ANY_MIGRATION_TYPE {
	try {
		const res = yield call(Api.delete, `/vacancies/${action.payload}`)
		if (!res.data.status) {
			throw new Error('Произошла ошибка при удалении вакансии')
		}
		yield put(actions.removeVacancySuccess(action.payload))
		Toast.push({ label: 'Вакансия удалена' })
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
