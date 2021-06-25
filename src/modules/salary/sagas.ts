import { takeEvery, put, call, all } from 'redux-saga/effects'
import { REQUEST } from 'helpers/redux'
import Api from 'services/api'
import actions from './actions'
import { FETCH_SALARY } from './types'

function* fetchSalary(): ANY_MIGRATION_TYPE {
	try {
		const salaries = yield call(Api.get, '/salaries')
		yield put(actions.fetchSalarySuccess(salaries.data))
	} catch (err) {
		yield put(actions.fetchSalaryFailure(err))
	}
}

function* watchFetchSalary() {
	yield takeEvery(REQUEST(FETCH_SALARY), fetchSalary)
}

export default function* rootSaga() {
	yield all([watchFetchSalary()])
}
