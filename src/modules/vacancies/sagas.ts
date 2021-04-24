import { takeEvery, call, put, all } from 'redux-saga/effects'
import Api from 'services/api'
import { REQUEST } from 'helpers/redux'
import { createQueryString } from 'helpers/sagas'
import { Toast } from 'components'
import actions from './actions'
import VacancyTypes from './types'

function* fetchVacancies({ payload }) {
	try {
		const query = createQueryString(payload)
		const vacancies = yield call(Api.get, `/vacancies/${query}`)
		yield put(actions.vacancies.fetchVacanciesSuccess(vacancies.data))
	} catch (err) {
		yield put(actions.vacancies.fetchVacanciesFailure(err))
	}
}

function* watchFetchVacancies() {
	yield takeEvery(REQUEST(VacancyTypes.FETCH_VACANCIES), fetchVacancies)
}

function* fetchVacancy({ payload }) {
	try {
		const vacancy = yield call(Api.get, `/vacancies/${payload}`)
		yield put(actions.vacancies.fetchVacancySuccess(vacancy.data))
	} catch (err) {
		yield put(actions.vacancies.fetchVacancyFailure(err))
	}
}

function* watchfetchVacancy() {
	yield takeEvery(REQUEST(VacancyTypes.FETCH_VACANCY), fetchVacancy)
}

function* addVacancy({ payload }) {
	try {
		const vacancy = yield call(Api.post, '/vacancies', payload)

		yield put(actions.vacancies.addVacancySuccess(vacancy.data))
		Toast.push({ label: 'Вакансия добавлена' })
	} catch (err) {
		yield put(actions.vacancies.addVacancyFailure(err))
	}
}

function* watchAddVacancy() {
	yield takeEvery(REQUEST(VacancyTypes.ADD_VACANCY), addVacancy)
}

function* removeVacancy({ payload }) {
	try {
		const res = yield call(Api.delete, `/vacancies/${payload}`)
		if (!res.data.status) {
			throw new Error('Произошла ошибка при удалении вакансии')
		}
		yield put(actions.vacancies.removeVacancySuccess(payload))
		Toast.push({ label: 'Вакансия удалена' })
	} catch (err) {
		yield put(actions.vacancies.removeVacancyFailure(err))
	}
}

function* watchRemoveVacancy() {
	yield takeEvery(REQUEST(VacancyTypes.REMOVE_VACANCY), removeVacancy)
}

export default function* rootSaga() {
	yield all([watchFetchVacancies(), watchfetchVacancy(), watchAddVacancy(), watchRemoveVacancy()])
}
