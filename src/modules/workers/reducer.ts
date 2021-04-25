import { Action, handleActions } from 'redux-actions'
import { REQUEST, SUCCESS, FAILURE } from 'helpers/redux'
import WorkerTypes from './types'

export type FilterType = Record<string, string>

export interface WorkersListState extends BaseState {
	workers: Workers;
	worker: {
		salary: ANY_MIGRATION_TYPE,
	};
	filter: FilterType;
}

const initialState: WorkersListState = {
	workers: [],
	worker: {
		salary: [],
	},
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
		[REQUEST(WorkerTypes.FETCH_WORKERS)]: (state) => ({
			...state,
			workers: [],
			loading: true,
			error: null,
		}),
		[SUCCESS(WorkerTypes.FETCH_WORKERS)]: (state, action: Action<Workers>) => ({
			...state,
			workers: action.payload,
			loading: false,
			error: null,
		}),
		[FAILURE(WorkerTypes.FETCH_WORKERS)]: (state) => ({
			...state,
			workers: [],
			loading: false,
			error: true,
		}),
		[REQUEST(WorkerTypes.FETCH_WORKER)]: (state) => ({
			...state,
			loading: true,
			error: null,
		}),
		[SUCCESS(WorkerTypes.FETCH_WORKER)]: (state, action: Action<ANY_MIGRATION_TYPE>) => ({
			...state,
			worker: {
				...state.worker,
				...action.payload,
			},
			loading: false,
			error: null,
		}),
		[FAILURE(WorkerTypes.FETCH_WORKER)]: (state) => ({
			...state,
			worker: {
				salary: [],
			},
			loading: false,
			error: true,
		}),
		[REQUEST(WorkerTypes.FETCH_WORKER_SALARY)]: (state) => ({
			...state,
			loading: true,
			error: null,
		}),
		[SUCCESS(WorkerTypes.FETCH_WORKER_SALARY)]: (state, action: Action<ANY_MIGRATION_TYPE>) => ({
			...state,
			worker: {
				...state.worker,
				salary: action.payload,
			},
			loading: false,
			error: null,
		}),
		[FAILURE(WorkerTypes.FETCH_WORKER_SALARY)]: (state) => ({
			...state,
			worker: {
				...state.worker,
				salary: [],
			},
			loading: false,
			error: true,
		}),
		//@ts-ignore
		[WorkerTypes.SET_FILTER]: (state, action: Action<FilterType>) => ({
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
