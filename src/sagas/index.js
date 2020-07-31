import { all, put, takeEvery, call } from 'redux-saga/effects'
import HRMService from 'services/hrm-service'
import { watchFetchVacancies, watchfetchVacancy } from 'modules/vacancies/sagas'

export function* fetchHotVacancies() {
  const vacancies = yield call(HRMService.getHotVacancies)
  try {
    yield put({ type: 'FETCH_HOT_VACANCIES_SUCCESS', vacancies })
  } catch(err) {
    yield put({ type: 'FETCH_HOT_VACANCIES_FAILURE', vacancies })
  }

}


export function* watchFetchHotVacancies() {
  yield takeEvery('FETCH_HOT_VACANCIES_REQUEST', fetchHotVacancies)
}

export default function* rootSaga() {
  yield all([
    watchFetchHotVacancies(),
    watchFetchVacancies(),
    watchfetchVacancy()
  ])
}
