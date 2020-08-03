import { createActions } from 'redux-actions'

const officesActions = createActions({
  FETCH_OFFICES_REQUEST: () => ({}),
  FETCH_OFFICES_SUCCESS: (offices) => ({ offices }),
  FETCH_OFFICES_FAILURE: (err) => ({ err }),
})


export default officesActions;
