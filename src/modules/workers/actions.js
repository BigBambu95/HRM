import { createActions } from 'redux-actions'

const actions = createActions({
	FETCH_WORKERS_REQUEST: () => ({}),
	FETCH_WORKERS_SUCCESS: (workers) => ({ workers }),
	FETCH_WORKERS_FAILURE: (err) => ({ err }),
	FETCH_WORKER_REQUEST: (id) => ({ id }),
	FETCH_WORKER_SUCCESS: (worker) => ({ worker }),
	FETCH_WORKER_FAILURE: (err) => ({ err }),
	SET_FILTER: (params) => ({ params }),
})

export default actions
