import C from '../contstants';

const workersList = (state, action) => {
  if (state === undefined) {
    return {
      workers: [],
      isWorker: false,
      filterProfession: 'Все',
      filterOffice: 'Все',
      filterDepartment: 'Все',
      loading: true,
      error: null,
    };
  }

  switch (action.type) {
    case C.FETCH_WORKERS_REQUEST:
      return {
        ...state,
        workers: [],
        loading: true,
        error: null,
      };

    case C.FETCH_WORKERS_SUCCESS:
      return {
        ...state,
        workers: action.payload,
        loading: false,
        error: null,
      };

    case C.FETCH_WORKERS_FAILURE:
      return {
        ...state,
        workers: [],
        loading: false,
        error: action.payload,
      };

    case C.OPEN_WORKER:
      return {
        ...state,
        isWorker: true,
      };

    case C.CLOSE_WORKER:
      return {
        ...state,
        isWorker: false,
      };

    case C.SET_FILTER_PROFESSION_VALUE:
      return {
        ...state,
        filterProfession: action.value,
      };

    case C.SET_FILTER_OFFICE_VALUE:
      return {
        ...state,
        filterOffice: action.value,
      };

    case C.SET_FILTER_DEPARTMENT_VALUE:
      return {
        ...state,
        filterDepartment: action.value,
      };

    default:
      return state;
  }
};

export default workersList;
