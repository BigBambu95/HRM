import moment from 'moment';
import C from '../constants';

const sortByAlphabet = (a, b) => {
  if (a.title < b.title) {
    return -1;
  }
  return 1;
};

const salaryList = (state, action) => {
  if (state === undefined) {
    return {
      salary: [],
      month: moment.months()[new Date().getMonth()],
      sort: '',
      loading: true,
      error: null,
    };
  }

  switch (action.type) {
    case C.FETCH_SALARY_REQUEST:
      return {
        ...state,
        salary: [],
        loading: true,
        error: null,
      };

    case C.FETCH_SALARY_SUCCESS:

      return {
        ...state,
        salary: action.payload,
        loading: false,
        error: null,
      };

    case C.FETCH_SALARY_FAILURE:
      return {
        ...state,
        salary: [],
        loading: false,
        error: action.payload,
      };

    case C.SET_MONTH:
      return {
        ...state,
        month: action.payload,
      };

    case C.SORT_SALARY:
      return {
        ...state,
        sort: action.payload,
      };

    default:
      return state;
  }
};

export default salaryList;
