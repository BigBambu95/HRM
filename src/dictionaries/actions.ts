import { createActions } from 'redux-actions'
import { REQUEST, SUCCESS, FAILURE } from 'helpers/redux'
import { FETCH_OFFICES, FETCH_PROFESSIONS, FETCH_DEPARTMENTS } from './types'

const dictionaryActions = createActions({
	[REQUEST(FETCH_OFFICES)]: () => ({}),
	[SUCCESS(FETCH_OFFICES)]: (offices) => offices,
	[FAILURE(FETCH_OFFICES)]: (err) => err,
	[REQUEST(FETCH_PROFESSIONS)]: () => ({}),
	[SUCCESS(FETCH_PROFESSIONS)]: (professions) => professions,
	[FAILURE(FETCH_PROFESSIONS)]: (err) => err,
	[REQUEST(FETCH_DEPARTMENTS)]: () => ({}),
	[SUCCESS(FETCH_DEPARTMENTS)]: (departments) => departments,
	[FAILURE(FETCH_DEPARTMENTS)]: (err) => err,
})

export default dictionaryActions
