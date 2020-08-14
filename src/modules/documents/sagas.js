import { takeEvery } from 'redux-saga/effects'
import { REQUEST } from 'helpers/redux'
import HRMService from 'services/hrm-service'
import actions from './actions'
import { FETCH_DOCUMENTS } from './types'

function fetchDocuments() {
	HRMService.getDocuments()
		.then((data) => data.documents)
		.then((documents) => actions.documents.fetchDocumentsSuccess(documents))
}

export function* watchFetchDocuments() {
	yield takeEvery(REQUEST(FETCH_DOCUMENTS), fetchDocuments)
}
