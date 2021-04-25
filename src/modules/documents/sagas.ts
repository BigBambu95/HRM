import { takeEvery, put, call, all } from 'redux-saga/effects'
import { REQUEST } from 'helpers/redux'
import Api from 'services/api'
import actions from './actions'
import { FETCH_DOCUMENTS } from './types'

function* fetchDocuments() {
	try {
		const documents = yield call(Api.get, '/documents')
		yield put(actions.documents.fetchDocumentsSuccess(documents.data))
	} catch (err) {
		yield put(actions.documents.fetchDocumentsFailure(err))
	}
}

function* watchFetchDocuments() {
	yield takeEvery(REQUEST(FETCH_DOCUMENTS), fetchDocuments)
}

export default function* rootSaga() {
	yield all([watchFetchDocuments()])
}
