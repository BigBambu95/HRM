import { createActions } from 'redux-actions'
import { REQUEST, SUCCESS, FAILURE } from 'helpers/redux'
import WorkerTypes from './types'

export default createActions({
	[REQUEST(WorkerTypes.FETCH_WORKERS)]: (params) => params,
	[SUCCESS(WorkerTypes.FETCH_WORKERS)]: (workers) => workers,
	[REQUEST(WorkerTypes.FETCH_WORKER)]: (id) => id,
	[FAILURE(WorkerTypes.FETCH_WORKERS)]: (err) => err,
	[SUCCESS(WorkerTypes.FETCH_WORKER)]: (worker) => worker,
	[FAILURE(WorkerTypes.FETCH_WORKER)]: (err) => err,
	[REQUEST(WorkerTypes.FETCH_WORKER_SALARY)]: (id) => id,
	[SUCCESS(WorkerTypes.FETCH_WORKER_SALARY)]: (salary) => salary,
	[FAILURE(WorkerTypes.FETCH_WORKER_SALARY)]: (err) => err,
	[WorkerTypes.SET_FILTER]: (params) => params,
})
