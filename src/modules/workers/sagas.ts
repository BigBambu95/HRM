import { takeEvery, call, put, all, StrictEffect } from 'redux-saga/effects'
import Api from 'services/api'
import { REQUEST } from 'helpers/redux'
import { createQueryString } from 'helpers/sagas'
import { Action } from 'redux-actions'
import actions from './actions'
import { FETCH_WORKER, FETCH_WORKERS, FETCH_WORKER_SALARY } from './types'

// Загрузка списка сотрудников
function* fetchWorkers(action: Action<FilterType>): Generator<StrictEffect, void, Record<'data', Workers>> {
	try {
		const query = createQueryString(action.payload)
		const workers = yield call(Api.get, `/workers/${query}`)
		yield put(actions.fetchWorkersSuccess(workers.data))
	} catch (err) {
		yield put(actions.fetchWorkersFailure(err))
	}
}

function* watchFetchWorkers() {
	yield takeEvery(REQUEST(FETCH_WORKERS), fetchWorkers)
}

// Загрузка данных детальной страницы сотрудника
function* fetchWorker(action: Action<string>): Generator<StrictEffect, void, Record<'data', IWorker>> {
	try {
		const worker = yield call(Api.get, `/workers/${action.payload}`)
		yield put(actions.fetchWorkerSuccess(worker.data))
	} catch (err) {
		console.error(err)
		yield put(actions.fetchWorkerFailure(err))
	}
}

function* watchFetchWorker() {
	yield takeEvery(REQUEST(FETCH_WORKER), fetchWorker)
}

// Загрузка данных по зарплате сотрудника
function* fetchWorkerSalary(action: Action<string>): Generator<StrictEffect, void, Record<'data', Salary>> {
	try {
		const salary = yield call(Api.get, `/salaries/${action.payload}?month=July&year=2020`)
		yield put(actions.fetchWorkerSalarySuccess(salary.data))
	} catch (err) {
		yield put(actions.fetchWorkerSalaryFailure(err))
	}
}

function* watchFetchWorkerSalary() {
	yield takeEvery(REQUEST(FETCH_WORKER_SALARY), fetchWorkerSalary)
}

export default function* rootSaga() {
	yield all([watchFetchWorkers(), watchFetchWorker(), watchFetchWorkerSalary])
}
