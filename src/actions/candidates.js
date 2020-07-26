import C from '../constants';

const candidates = {
  candidatesRequest: () => C.FETCH_CANDIDATES_REQUEST,
  candidatesLoaded: (newCandidates) => ({
    payload: newCandidates,
    type: C.FETCH_CANDIDATES_SUCCESS,
  }),
  candidatesError: (err) => ({
    payload: err,
    type: C.FETCH_CANDIDATES_FAILURE,
  }),

};

export default candidates;
