import { all } from 'redux-saga/effects'
import { watchFetchHotVacancies } from 'modules/vacancies/sagas'

export default function* rootSaga() {
  yield all([
    watchFetchHotVacancies()
  ])
}

