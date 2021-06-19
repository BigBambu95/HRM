import { combineReducers } from 'redux'
import { TypedUseSelectorHook, useSelector as useReduxSelector } from 'react-redux'
import vacancyList from 'modules/vacancies/reducer'
import workerList from 'modules/workers/reducer'
import { dictionaries } from 'dictionaries'
import documentList from 'modules/documents/reducer'
import salaryList from 'modules/salary/reducer'
import candidateList from './candidates'
import tabList from './tabs'
import menu from './menu'

const rootReducer = combineReducers({
	workerList,
	documentList,
	vacancyList,
	salaryList,
	candidateList,
	menu,
	tabList,
	dictionaries,
})

export type RootState = ReturnType<typeof rootReducer>

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector

export default rootReducer
