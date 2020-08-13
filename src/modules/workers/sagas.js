import { takeEvery, call, put } from 'redux-saga/effects'
import Api from 'services/api'
import { REQUEST } from 'helpers/redux'
import actions from './actions'
import { FETCH_WORKER, FETCH_WORKERS } from './types'

export function* fetchWorkers() {
	try {
		const workers = yield call(Api.get, '/workers')
		yield put(actions.workers.fetchWorkersSuccess(workers.data))
	} catch (err) {
		yield put(actions.workers.fetchWorkersFailure(err))
	}
}

export function* watchFetchWorkers() {
	yield takeEvery(REQUEST(FETCH_WORKERS), fetchWorkers)
}

export function* fetchWorker({ payload }) {
	try {
		const worker = yield call(Api.get, `/workers/${payload}`)
		yield put(actions.workers.fetchWorkerSuccess(worker.data))
	} catch (err) {
		yield put(actions.workers.fetchWorkerFailure(err))
	}
}

export function* watchFetchWorker() {
	yield takeEvery(REQUEST(FETCH_WORKER), fetchWorker)
}
