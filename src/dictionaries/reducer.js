import { handleActions } from 'redux-actions'
import { REQUEST, SUCCESS, FAILURE } from 'helpers/redux'
import { FETCH_OFFICES, FETCH_PROFESSIONS } from './types'

const initialState = {
	offices: [],
	loading: true,
	error: null,
}

const dictionaries = handleActions(
	{
		[REQUEST(FETCH_OFFICES)]: (state) => ({
			...state,
			offices: [],
			loading: true,
			error: null,
		}),
		[SUCCESS(FETCH_OFFICES)]: (state, { payload }) => ({
			...state,
			offices: payload,
			loading: false,
			error: null,
		}),
		[FAILURE(FETCH_OFFICES)]: (state) => ({
			...state,
			offices: [],
			loading: false,
			error: true,
		}),
		[REQUEST(FETCH_PROFESSIONS)]: (state) => ({
			...state,
			professions: [],
			loading: true,
			error: null,
		}),
		[SUCCESS(FETCH_PROFESSIONS)]: (state, { payload }) => ({
			...state,
			professions: payload,
			loading: false,
			error: null,
		}),
		[FAILURE(FETCH_PROFESSIONS)]: (state) => ({
			...state,
			professions: [],
			loading: false,
			error: true,
		}),
	},
	initialState
)

export default dictionaries