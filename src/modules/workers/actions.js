import { createActions } from 'redux-actions'
import { REQUEST, SUCCESS, FAILURE } from 'helpers/redux'
import { FETCH_WORKER, FETCH_WORKERS, SET_FILTER } from './types'

const actions = createActions({
	[REQUEST(FETCH_WORKERS)]: () => ({}),
	[SUCCESS(FETCH_WORKERS)]: (workers) => workers,
	[FAILURE(FETCH_WORKERS)]: (err) => err,
	[REQUEST(FETCH_WORKER)]: (id) => id,
	[SUCCESS(FETCH_WORKER)]: (worker) => worker,
	[FAILURE(FETCH_WORKER)]: (err) => err,
	[SET_FILTER]: (params) => params,
})

export default actions
