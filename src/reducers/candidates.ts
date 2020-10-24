import C from '../constants';

const candidateList = (state, action) => {
  if (state === undefined) {
    return {
      candidates: [],
      loading: true,
      error: null,
    };
  }

  switch (action.type) {
    case C.FETCH_CANDIDATES_REQUEST:
      return {
        ...state,
        candidates: [],
        loading: true,
        error: null,
      };

    case C.FETCH_CANDIDATES_SUCCESS:
      return {
        ...state,
        candidates: action.payload,
        loading: false,
        error: null,
      };

    case C.FETCH_CANDIDATES_FAILURE:
      return {
        ...state,
        candidates: [],
        loading: false,
        error: action.payload,
      };

    case C.ARCHIVE_VACANCY_CANDIDATE:

      return {
        ...state,
        candidates: state.candidates.concat(action.payload),
      };

    case C.ARCHIVE_VACANCY_CANDIDATES:

      return {
        ...state,
        candidates: state.candidates.concat(action.payload),
      };

    default:
      return state;
  }
};

export default candidateList;
