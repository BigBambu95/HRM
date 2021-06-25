import { Action, handleActions } from 'redux-actions'
import { REQUEST, SUCCESS, FAILURE } from 'helpers/redux'
import { FETCH_WORKERS, FETCH_WORKER_SALARY, FETCH_WORKER, SET_FILTER } from './types'

const initialState: WorkersListState = {
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
		[SUCCESS(FETCH_WORKERS)]: (state, action: Action<Workers>) => ({
			...state,
			workers: action.payload,
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
			loading: true,
			error: null,
		}),
		[SUCCESS(FETCH_WORKER)]: (state, action: Action<IWorker>) => ({
			...state,
			worker: {
				...state.worker,
				...action.payload,
			},
			loading: false,
			error: null,
		}),
		[FAILURE(FETCH_WORKER)]: (state) => ({
			...state,
			worker: {},
			loading: false,
			error: true,
		}),
		[REQUEST(FETCH_WORKER_SALARY)]: (state) => ({
			...state,
			loading: true,
			error: null,
		}),
		[SUCCESS(FETCH_WORKER_SALARY)]: (state, action: Action<Workers>) => ({
			...state,
			worker: {
				...state.worker,
				salary: action.payload,
			},
			loading: false,
			error: null,
		}),
		[FAILURE(FETCH_WORKER_SALARY)]: (state) => ({
			...state,
			worker: {
				...state.worker,
				salary: [],
			},
			loading: false,
			error: true,
		}),
		[SET_FILTER]: (state, action: Action<FilterType>) => ({
			...state,
			filter: {
				...state.filter,
				[action.payload.name]: action.payload.value,
			},
		}),
	},
	initialState
)

export default workersList
