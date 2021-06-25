import { createAction } from 'redux-actions'
import { REQUEST, SUCCESS, FAILURE } from 'helpers/redux'
import { FETCH_WORKER, FETCH_WORKER_SALARY, FETCH_WORKERS, SET_FILTER } from './types'

// Fetch workers
const fetchWorkersRequest = createAction(REQUEST(FETCH_WORKERS), (params: FilterType) => params)
const fetchWorkersSuccess = createAction(SUCCESS(FETCH_WORKERS), (workers: Workers) => workers)
const fetchWorkersFailure = createAction(FAILURE(FETCH_WORKERS), (err: ErrorType) => err)

// Fetch worker
const fetchWorkerRequest = createAction(REQUEST(FETCH_WORKER), (id: React.Key) => id)
const fetchWorkerSuccess = createAction(SUCCESS(FETCH_WORKER), (worker: IWorker) => worker)
const fetchWorkerFailure = createAction(FAILURE(FETCH_WORKER), (err: ErrorType) => err)

// Fetch worker salary
const fetchWorkerSalaryRequest = createAction(REQUEST(FETCH_WORKER_SALARY), (id: React.Key) => id)
const fetchWorkerSalarySuccess = createAction(SUCCESS(FETCH_WORKER_SALARY), (salary: Salary) => salary)
const fetchWorkerSalaryFailure = createAction(FAILURE(FETCH_WORKER_SALARY), (err: ErrorType) => err)

const setFilter = createAction(SET_FILTER, (params: SetFilterParamsType) => params)

export default {
	fetchWorkersRequest,
	fetchWorkersSuccess,
	fetchWorkersFailure,
	fetchWorkerRequest,
	fetchWorkerSuccess,
	fetchWorkerFailure,
	fetchWorkerSalaryRequest,
	fetchWorkerSalarySuccess,
	fetchWorkerSalaryFailure,
	setFilter,
}
