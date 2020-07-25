import C from '../contstants';
import actionWorkers from './workers';
import worker from './worker';
import vacancies from './vacancies';
import documents from './documents';
import salary from './salary';
import candidates from './candidates';
import offices from './offices';




const addTab = payload => {
    return {
        type: C.ADD_TAB,
        payload
    }
};

const updateTab = payload => {
    return {
        type: C.UPDATE_TAB,
        payload
    }
};

const removeTab = payload => {
      return {
          type: C.REMOVE_TAB,
          payload
      }
};

const hotVacanciesRequest = () => 'FETCH_HOT_VACANCIES_REQUEST';

const hotVacanciesLoaded = hotVacansy => {
    return {
        payload: hotVacansy,
        type: 'FETCH_HOT_VACANCIES_SUCCESS'
    }
};

const hotVacanciesError = err => {
    return {
        payload: err,
        type: 'FETCH_HOT_VACANCIES_FAILURE'
    }
};

export {
    actionWorkers,
    worker,
    vacancies,
    documents,
    salary,
    candidates,
    offices,
    addTab,
    removeTab,
    updateTab,
    hotVacanciesRequest,
    hotVacanciesLoaded,
    hotVacanciesError,
}