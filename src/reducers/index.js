import workerList from './workers';
import worker from './worker';
import vacancyList from './vacancies';
import documentList from './documents';
import salaryList from './salary';
import candidateList from './candidates';
import tabList from './tabs';
import menu from './menu';
import officeList from './offices';


import { combineReducers } from "redux";

export default combineReducers({
    workerList,
    worker,
    documentList,
    vacancyList,
    salaryList,
    candidateList,
    menu,
    tabList,
    officeList
});