import { createActions } from 'redux-actions'
import { REQUEST, SUCCESS, FAILURE } from 'helpers/redux'
import DictionariesTypes from './types'

const dictionaryActions = createActions({
	[REQUEST(DictionariesTypes.FETCH_OFFICES)]: () => ({}),
	[SUCCESS(DictionariesTypes.FETCH_OFFICES)]: (offices) => offices,
	[FAILURE(DictionariesTypes.FETCH_OFFICES)]: (err) => err,
	[REQUEST(DictionariesTypes.FETCH_PROFESSIONS)]: () => ({}),
	[SUCCESS(DictionariesTypes.FETCH_PROFESSIONS)]: (professions) => professions,
	[FAILURE(DictionariesTypes.FETCH_PROFESSIONS)]: (err) => err,
	[REQUEST(DictionariesTypes.FETCH_DEPARTMENTS)]: () => ({}),
	[SUCCESS(DictionariesTypes.FETCH_DEPARTMENTS)]: (departments) => departments,
	[FAILURE(DictionariesTypes.FETCH_DEPARTMENTS)]: (err) => err,
})

export default dictionaryActions
