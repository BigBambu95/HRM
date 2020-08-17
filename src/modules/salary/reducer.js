import { handleActions } from 'redux-actions'
import { REQUEST, SUCCESS, FAILURE } from 'helpers/redux'
import { FETCH_SALARY } from './types'

const initialState = {
	salary: [],
	filter: {
		month: null,
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
			salary: [],
			loading: true,
			error: null,
		}),
		[SUCCESS(FETCH_SALARY)]: (state, { payload }) => ({
			...state,
			salary: payload,
			loading: false,
			error: null,
		}),
		[FAILURE(FETCH_SALARY)]: (state, { payload }) => ({
			...state,
			salary: [],
			loading: false,
			error: payload,
		}),
	},
	initialState
)

export default salaryList
