import { handleActions } from 'redux-actions'
import { REQUEST, SUCCESS, FAILURE } from 'helpers/redux'
import { FETCH_WORKER, FETCH_WORKERS, SET_FILTER } from './types'

const initialState = {
	workers: [],
	worker: {},
	filter: {
		profession: 'Все',
		office: 'Все',
		department: 'Все',
	},
	loading: true,
	error: null,
}

const workersList = handleActions(
	{
		[REQUEST(FETCH_WORKERS)]: (state) => ({
			...state,
			workers: [],
			loading: true,
			error: null,
		}),
		[SUCCESS(FETCH_WORKERS)]: (state, { payload }) => ({
			...state,
			workers: payload,
			loading: false,
			error: null,
		}),
		[FAILURE(FETCH_WORKERS)]: (state) => ({
			...state,
			workers: [],
			loading: false,
			error: true,
		}),
		[REQUEST(FETCH_WORKER)]: (state) => ({
			...state,
			worker: {},
			loading: true,
			error: null,
		}),
		[SUCCESS(FETCH_WORKER)]: (state, { payload }) => ({
			...state,
			worker: payload,
			loading: false,
			error: null,
		}),
		[FAILURE(FETCH_WORKER)]: (state) => ({
			...state,
			worker: {},
			loading: false,
			error: true,
		}),
		[SET_FILTER]: (state, { payload }) => ({
			...state,
			filter: {
				...state.filter,
				[payload.name]: payload.value,
			},
		}),
	},
	initialState
)

export default workersList