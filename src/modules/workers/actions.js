import { createActions } from 'redux-actions'
import { REQUEST, SUCCESS, FAILURE } from 'helpers/redux'
import {
	FETCH_WORKER,
	FETCH_WORKERS,
	SET_FILTER,
	FETCH_WORKER_SALARY,
} from './types'

export default createActions({
	[REQUEST(FETCH_WORKERS)]: (params) => params,
	[SUCCESS(FETCH_WORKERS)]: (workers) => workers,
	[FAILURE(FETCH_WORKERS)]: (err) => err,
	[REQUEST(FETCH_WORKER)]: (id) => id,
	[SUCCESS(FETCH_WORKER)]: (worker) => worker,
	[FAILURE(FETCH_WORKER)]: (err) => err,
	[REQUEST(FETCH_WORKER_SALARY)]: (id) => id,
	[SUCCESS(FETCH_WORKER_SALARY)]: (salary) => salary,
	[FAILURE(FETCH_WORKER_SALARY)]: (err) => err,
	[SET_FILTER]: (params) => params,
})
