import { takeEvery, call, put } from 'redux-saga/effects'
import Api from 'services/api'
import actions from './actions'

export function* fetchWorkers() {
	try {
		const workers = yield call(Api.get, '/workers')
		yield put(actions.fetchWorkersSuccess(workers.data))
	} catch (err) {
		yield put(actions.fetchWorkersFailure(err))
	}
}

export function* watchFetchWorkers() {
	yield takeEvery('FETCH_WORKERS_REQUEST', fetchWorkers)
}
