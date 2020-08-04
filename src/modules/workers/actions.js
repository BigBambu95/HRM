import { createActions } from 'redux-actions'

const actions = createActions({
	FETCH_WORKERS_REQUEST: () => ({}),
	FETCH_WORKERS_SUCCESS: (workers) => ({ workers }),
	FETCH_WORKERS_FAILURE: (err) => ({ err }),
	OPEN_WORKER: () => ({}),
	SET_FILTER: (params) => ({ params }),
})

export default actions
