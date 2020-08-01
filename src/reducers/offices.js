import { handleActions } from 'redux-actions'

const initialState = {
  offices: [],
  loading: true,
  error: null,
}

const officeList = handleActions({
  FETCH_OFFICES_REQUEST: (state) => ({
    ...state,
    offices: [],
    loading: true,
    error: null
  }),
  FETCH_OFFICES_SUCCESS: (state, { payload }) => ({
    ...state,
    offices: payload.offices,
    loading: false,
    error: null,
  }),
  FETCH_OFFICES_FAILURE: (state) => ({
    ...state,
    offices: [],
    loading: false,
    error: true,
  }),
}, initialState)

export default officeList;
