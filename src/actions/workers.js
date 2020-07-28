import C from '../constants'

const actionWorkers = {
  workersRequest: () => C.FETCH_WORKERS_REQUEST,

  workersLoaded: (newWorkers) => ({
    payload: newWorkers,
    type: C.FETCH_WORKERS_SUCCESS,
  }),

  workersError: (err) => ({
    payload: err,
    type: C.FETCH_WORKERS_FAILURE,
  }),

  openWorker: () => C.OPEN_WORKER,

  setFilterProfessionValue: (value) => ({
    value,
    type: C.SET_FILTER_PROFESSION_VALUE,
  }),

  setFilterOfficeValue: (value) => ({
    value,
    type: C.SET_FILTER_OFFICE_VALUE,
  }),

  setFilterDepartmentValue: (value) => ({
    value,
    type: C.SET_FILTER_DEPARTMENT_VALUE,
  }),

  filterWorkers: () => C.FILTER_WORKERS,
};

export default actionWorkers;
