import { Action, handleActions } from 'redux-actions'
import { REQUEST, SUCCESS, FAILURE } from 'helpers/redux'
import { FETCH_DEPARTMENTS, FETCH_PROFESSIONS, FETCH_OFFICES } from './types'

const initialState: DictionariesState = {
	offices: [],
	professions: [],
	departments: [],
	loading: true,
	error: null,
}

const dictionaries = handleActions(
	{
		// --------- FETCH OFFICES ------------
		[REQUEST(FETCH_OFFICES)]: (state) => ({
			...state,
			offices: [],
			loading: true,
			error: null,
		}),
		[SUCCESS(FETCH_OFFICES)]: (state, action: Action<Offices>) => ({
			...state,
			offices: action.payload,
			loading: false,
			error: null,
		}),
		[FAILURE(FETCH_OFFICES)]: (state) => ({
			...state,
			offices: [],
			loading: false,
			error: true,
		}),

		// --------- FETCH PROFESSIONS ------------
		[REQUEST(FETCH_PROFESSIONS)]: (state) => ({
			...state,
			professions: [],
			loading: true,
			error: null,
		}),
		[SUCCESS(FETCH_PROFESSIONS)]: (state, action: Action<Professions>) => ({
			...state,
			professions: action.payload,
			loading: false,
			error: null,
		}),
		[FAILURE(FETCH_PROFESSIONS)]: (state) => ({
			...state,
			professions: [],
			loading: false,
			error: true,
		}),

		// --------- FETCH DEPARTMENTS ------------
		[REQUEST(FETCH_DEPARTMENTS)]: (state) => ({
			...state,
			departments: [],
			loading: true,
			error: null,
		}),
		[SUCCESS(FETCH_DEPARTMENTS)]: (state, action: Action<Departments>) => ({
			...state,
			departments: action.payload,
			loading: false,
			error: null,
		}),
		[FAILURE(FETCH_DEPARTMENTS)]: (state) => ({
			...state,
			departments: [],
			loading: false,
			error: true,
		}),
	},
	initialState
)

export default dictionaries
