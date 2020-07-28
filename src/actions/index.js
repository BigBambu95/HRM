import C from '../constants';
import actionWorkers from './workers';
import worker from './worker';
import vacanciesActions from './vacancies';
import documents from './documents';
import salary from './salary';
import candidates from './candidates';
import offices from './offices';

const addTab = (payload) => ({
  type: C.ADD_TAB,
  payload,
});

const updateTab = (payload) => ({
  type: C.UPDATE_TAB,
  payload,
});

const removeTab = (payload) => ({
  type: C.REMOVE_TAB,
  payload,
});

const hotVacanciesRequest = () => 'FETCH_HOT_VACANCIES_REQUEST';

const hotVacanciesLoaded = (hotVacansy) => ({
  payload: hotVacansy,
  type: 'FETCH_HOT_VACANCIES_SUCCESS',
});

const hotVacanciesError = (err) => ({
  payload: err,
  type: 'FETCH_HOT_VACANCIES_FAILURE',
});

export {
  actionWorkers,
  worker,
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
  vacanciesActions
};
