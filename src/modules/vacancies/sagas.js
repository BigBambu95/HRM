import { takeEvery, call, put } from 'redux-saga/effects'
import { hrmService } from 'index'


export function* fetchHotVacancies() {
	const vacancies = yield call(hrmService.getVacancies)
	yield put({ type: 'FETCH_HOT_VACANCIES_SUCCESS', vacancies })
}


export function* watchFetchHotVacancies() {
  yield takeEvery('FETCH_HOT_VACANCIES_REQUEST', fetchHotVacancies)
}