import { combineReducers } from 'redux'
import vacancyList from 'modules/vacancies/reducer'
import workerList from 'modules/workers/reducer'
import worker from './worker'
import documentList from './documents'
import salaryList from './salary'
import candidateList from './candidates'
import tabList from './tabs'
import menu from './menu'
import officeList from './offices'

export default combineReducers({
	workerList,
	worker,
	documentList,
	vacancyList,
	salaryList,
	candidateList,
	menu,
	tabList,
	officeList,
})
