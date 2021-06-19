import { Action, handleActions } from 'redux-actions'
import { REQUEST, SUCCESS, FAILURE } from 'helpers/redux'
import { FETCH_SALARY } from './types'

export interface SalaryListState extends BaseState {
	salaries: Salaries;
	sort: string;
	filter: FilterType;
}

const initialState: SalaryListState = {
	salaries: [],
	filter: {
		month: '',
		profession: 'Все',
		office: 'Все',
		department: 'Все',
	},
	sort: '',
	loading: true,
	error: null,
}

const salaryList = handleActions(
	{
		[REQUEST(FETCH_SALARY)]: (state) => ({
			...state,
			salaries: [],
			loading: true,
			error: null,
		}),
		[SUCCESS(FETCH_SALARY)]: (state, action: Action<Salaries>) => ({
			...state,
			salaries: action.payload,
			loading: false,
			error: null,
		}),
		[FAILURE(FETCH_SALARY)]: (state, action: Action<ANY_MIGRATION_TYPE>) => ({
			...state,
			salaries: [],
			loading: false,
			error: action.payload,
		}),
	},
	initialState
)

export default salaryList
