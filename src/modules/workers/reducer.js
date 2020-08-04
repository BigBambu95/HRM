import { handleActions } from 'redux-actions'

const initialState = {
	workers: [],
	isWorker: false,
	filterProfession: 'Все',
	filterOffice: 'Все',
	filterDepartment: 'Все',
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
		OPEN_WORKER: (state) => ({
			...state,
			isWorker: true,
		}),
		CLOSE_WORKER: (state) => ({
			...state,
			isWorker: false,
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
