import C from '../contstants';

const actionWorkers = {
    workersRequest: () => C.FETCH_WORKERS_REQUEST,

    workersLoaded: newWorkers => {
        return {
            payload: newWorkers,
            type: C.FETCH_WORKERS_SUCCESS
        }
    },

    workersError: err => {
        return {
            payload: err,
            type: C.FETCH_WORKERS_FAILURE
        }
    },

    openWorker: () => C.OPEN_WORKER,

    setFilterProfessionValue: value => {
        return {
            value,
            type: C.SET_FILTER_PROFESSION_VALUE
        }
    },

    setFilterOfficeValue: value => {
        return {
            value,
            type: C.SET_FILTER_OFFICE_VALUE
        }
    },

    setFilterDepartmentValue: value => {
        return {
            value,
            type: C.SET_FILTER_DEPARTMENT_VALUE
        }
    },

    filterWorkers: () => {
        return {
            type: C.FILTER_WORKERS
        }
    },
};


export default actionWorkers;