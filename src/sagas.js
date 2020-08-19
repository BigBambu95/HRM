import { spawn } from 'redux-saga/effects'
import { rootSaga as vacanciesSagas } from 'modules/vacancies'
import { rootSaga as dictionariesSagas } from 'dictionaries'
import { rootSaga as workersSagas } from 'modules/workers'
import { rootSaga as documentsSagas } from 'modules/documents'
import { rootSaga as salarySagas } from 'modules/salary'

export default function* rootSaga() {
	yield spawn(dictionariesSagas)
	yield spawn(vacanciesSagas)
	yield spawn(workersSagas)
	yield spawn(documentsSagas)
	yield spawn(salarySagas)
}
