import { handleActions } from 'redux-actions'

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
		FETCH_WORKERS_REQUEST: (state) => ({
			...state,
			workers: [],
			loading: true,
			error: null,
		}),
		FETCH_WORKERS_SUCCESS: (state, { payload }) => ({
			...state,
			workers: payload.workers,
			loading: false,
			error: null,
		}),
		FETCH_WORKERS_FAILURE: (state) => ({
			...state,
			workers: [],
			loading: false,
			error: true,
		}),
		FETCH_WORKER_REQUEST: (state) => ({
			...state,
			worker: {},
			loading: true,
			error: null,
		}),
		FETCH_WORKER_SUCCESS: (state, { payload }) => ({
			...state,
			worker: payload.worker,
			loading: false,
			error: null,
		}),
		FETCH_WORKER_FAILURE: (state) => ({
			...state,
			worker: {},
			loading: false,
			error: true,
		}),
		SET_FILTER: (state, { payload }) => ({
			...state,
			filter: {
				...state.filter,
				[payload.params.name]: payload.params.value,
			},
		}),
	},
	initialState
)

export default workersList
