import { handleActions } from 'redux-actions'
import { REQUEST, SUCCESS, FAILURE } from 'helpers/redux'
import { FETCH_DOCUMENTS } from './types'

const initialState = {
	documents: [],
	documentsSort: '',
	loading: true,
	error: null,
}

const documentList = handleActions(
	{
		[REQUEST(FETCH_DOCUMENTS)]: (state) => ({
			...state,
			documents: [],
			loading: true,
			error: null,
		}),
		[SUCCESS(FETCH_DOCUMENTS)]: (state, { payload }) => ({
			...state,
			documents: payload,
			loading: false,
			error: null,
		}),
		[FAILURE(FETCH_DOCUMENTS)]: (state, { payload }) => ({
			...state,
			documents: [],
			loading: false,
			error: payload,
		}),
	},
	initialState
)

export default documentList
