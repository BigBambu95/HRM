import { takeEvery, put, call } from 'redux-saga/effects'
import { REQUEST } from 'helpers/redux'
import Api from 'services/api'
import actions from './actions'
import { FETCH_SALARY } from './types'

function* fetchSalary() {
	try {
		const salary = yield call(Api.get, '/salary')
		yield put(actions.salary.fetchSalarySuccess(salary.data))
	} catch (err) {
		yield put(actions.salary.fetchSalaryFailure(err))
	}
}

export function* watchFetchSalary() {
	yield takeEvery(REQUEST(FETCH_SALARY), fetchSalary)
}
