import { takeEvery, put, call } from 'redux-saga/effects'
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

export function* watchFetchDocuments() {
	yield takeEvery(REQUEST(FETCH_DOCUMENTS), fetchDocuments)
}
