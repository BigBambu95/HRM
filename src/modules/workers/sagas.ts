import { takeEvery, call, put, all } from 'redux-saga/effects'
import Api from 'services/api'
import { REQUEST } from 'helpers/redux'
import { createQueryString } from 'helpers/sagas'
import actions from './actions'
import { FETCH_WORKER, FETCH_WORKERS, FETCH_WORKER_SALARY } from './types'

// Загрузка списка сотрудников
function* fetchWorkers({ payload }) {
	try {
		const query = createQueryString(payload)
		const workers = yield call(Api.get, `/workers/${query}`)
		yield put(actions.workers.fetchWorkersSuccess(workers.data))
	} catch (err) {
		yield put(actions.workers.fetchWorkersFailure(err))
	}
}

function* watchFetchWorkers() {
	yield takeEvery(REQUEST(FETCH_WORKERS) as any, fetchWorkers)
}

// Загрузка данных детальной страницы сотрудника
function* fetchWorker({ payload }) {
	try {
		const worker = yield call(Api.get, `/workers/${payload}`)
		yield put(actions.workers.fetchWorkerSuccess(worker.data))
	} catch (err) {
		yield put(actions.workers.fetchWorkerFailure(err))
	}
}

function* watchFetchWorker() {
	yield takeEvery(REQUEST(FETCH_WORKER) as any, fetchWorker)
}

// Загрузка данных по зарплате сотрудника
function* fetchWorkerSalary({ payload }) {
	try {
		const salary = yield call(
			Api.get,
			`/salaries/${payload}?month=July&year=2020`
		)
		yield put(actions.workers.fetchWorkerSalarySuccess(salary.data))
	} catch (err) {
		yield put(actions.workers.fetchWorkerSalaryFailure(err))
	}
}

function* watchFetchWorkerSalary() {
	yield takeEvery(REQUEST(FETCH_WORKER_SALARY) as any, fetchWorkerSalary)
}

export default function* rootSaga() {
	yield all([watchFetchWorkers(), watchFetchWorker(), watchFetchWorkerSalary])
}
