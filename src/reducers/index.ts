import { combineReducers } from 'redux'
import vacancyList from 'modules/vacancies/reducer'
import workerList from 'modules/workers/reducer'
import { dictionaries } from 'dictionaries'
import documentList from 'modules/documents/reducer'
import salaryList from 'modules/salary/reducer'
import candidateList from './candidates'
import tabList from './tabs'
import menu from './menu'

export default combineReducers({
	workerList,
	documentList,
	vacancyList,
	salaryList,
	candidateList,
	menu,
	tabList,
	dictionaries,
})
