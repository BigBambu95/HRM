import { createActions } from 'redux-actions'
import { REQUEST, SUCCESS, FAILURE } from 'helpers/redux'
import { FETCH_DOCUMENTS, REMOVE_DOCUMENT } from './types'

const actions = createActions({
	[REQUEST(FETCH_DOCUMENTS)]: () => ({}),
	[SUCCESS(FETCH_DOCUMENTS)]: (documents) => documents,
	[FAILURE(FETCH_DOCUMENTS)]: (err) => err,
	[REQUEST(REMOVE_DOCUMENT)]: (id) => id,
	[SUCCESS(REMOVE_DOCUMENT)]: () => ({}),
	[FAILURE(REMOVE_DOCUMENT)]: (err) => err,
})

export default actions
