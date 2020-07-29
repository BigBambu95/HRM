import { createActions } from 'redux-actions'

const candidatesActions = createActions({
	FETCH_CANDIDATES_REQUEST: () => ({}),
	FETCH_CANDIDATES_SUCCESS: (newCandidates) => ({ newCandidates }),
	FETCH_CANDIDATES_FAILURE: (err) => ({ err }),
})

export default candidatesActions
