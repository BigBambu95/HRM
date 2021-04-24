import { handleActions } from 'redux-actions'
import { REQUEST, SUCCESS, FAILURE } from 'helpers/redux'
import DictionariesTypes from './types'

export interface DictionariesState {
	offices: Offices;
	professions: Professions;
	departments: Departments;
	loading: boolean;
	error: boolean | null;
}

const initialState: DictionariesState = {
	offices: [],
	professions: [],
	departments: [],
	loading: true,
	error: null,
}

const dictionaries = handleActions(
	{
		[REQUEST(DictionariesTypes.FETCH_OFFICES)]: (state) => ({
			...state,
			offices: [],
			loading: true,
			error: null,
		}),
		[SUCCESS(DictionariesTypes.FETCH_OFFICES)]: (state, { payload }) => ({
			...state,
			offices: payload,
			loading: false,
			error: null,
		}),
		[FAILURE(DictionariesTypes.FETCH_OFFICES)]: (state) => ({
			...state,
			offices: [],
			loading: false,
			error: true,
		}),

		// --------- FETCH PROFESSIONS ------------
		[REQUEST(DictionariesTypes.FETCH_PROFESSIONS)]: (state) => ({
			...state,
			professions: [],
			loading: true,
			error: null,
		}),
		[SUCCESS(DictionariesTypes.FETCH_PROFESSIONS)]: (state, { payload }) => ({
			...state,
			professions: payload,
			loading: false,
			error: null,
		}),
		[FAILURE(DictionariesTypes.FETCH_PROFESSIONS)]: (state) => ({
			...state,
			professions: [],
			loading: false,
			error: true,
		}),

		// --------- FETCH DEPARTMENTS ------------
		[REQUEST(DictionariesTypes.FETCH_DEPARTMENTS)]: (state) => ({
			...state,
			departments: [],
			loading: true,
			error: null,
		}),
		[SUCCESS(DictionariesTypes.FETCH_DEPARTMENTS)]: (state, { payload }) => ({
			...state,
			departments: payload,
			loading: false,
			error: null,
		}),
		[FAILURE(DictionariesTypes.FETCH_DEPARTMENTS)]: (state) => ({
			...state,
			departments: [],
			loading: false,
			error: true,
		}),
	},
	initialState
)

export default dictionaries
