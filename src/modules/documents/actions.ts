import { createActions } from 'redux-actions'
import { REQUEST, SUCCESS, FAILURE } from 'helpers/redux'
import DocumentsType from './types'

const actions = createActions({
	[REQUEST(DocumentsType.FETCH_DOCUMENTS)]: () => ({}),
	[SUCCESS(DocumentsType.FETCH_DOCUMENTS)]: (documents) => documents,
	[FAILURE(DocumentsType.FETCH_DOCUMENTS)]: (err) => err,
	[REQUEST(DocumentsType.REMOVE_DOCUMENT)]: (id) => id,
	[SUCCESS(DocumentsType.REMOVE_DOCUMENT)]: () => ({}),
	[FAILURE(DocumentsType.REMOVE_DOCUMENT)]: (err) => err,
})

export default actions
