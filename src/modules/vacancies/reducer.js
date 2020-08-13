import { handleActions } from 'redux-actions'
import { REQUEST, SUCCESS, FAILURE } from 'helpers/redux'
import {
	FETCH_VACANCIES,
	FETCH_VACANCY,
	ADD_VACANCY,
	REMOVE_VACANCY,
	SET_FILTER,
} from './types'

const initialState = {
	vacancies: [],
	vacancy: {
		candidates: [],
		filter: {
			age: 'Все',
			exp: 'Все',
			desiredSalary: 'Все',
		},
	},
	filter: {
		profession: 'Все',
		office: 'Все',
	},
	loading: true,
	error: null,
}

const vacancyList = handleActions(
	{
		[REQUEST(FETCH_VACANCIES)]: (state) => ({
			...state,
			vacancies: [],
			loading: true,
			error: null,
		}),
		[SUCCESS(FETCH_VACANCIES)]: (state, { payload }) => ({
			...state,
			vacancies: payload,
			loading: false,
			error: null,
		}),
		[FAILURE(FETCH_VACANCIES)]: (state) => ({
			...state,
			vacancies: [],
			loading: false,
			error: true,
		}),
		[REQUEST(FETCH_VACANCY)]: (state) => ({
			...state,
			vacancy: {
				candidates: [],
			},
			loading: true,
			error: null,
		}),
		[SUCCESS(FETCH_VACANCY)]: (state, { payload }) => ({
			...state,
			vacancy: payload,
			loading: false,
			error: null,
		}),
		[FAILURE(FETCH_VACANCY)]: (state) => ({
			...state,
			loading: false,
			error: true,
		}),
		[SET_FILTER]: (state, { payload }) => ({
			...state,
			filter: {
				...state.filter,
				[payload.name]: payload.value,
			},
		}),
		[REQUEST(ADD_VACANCY)]: (state) => ({
			...state,
		}),
		[SUCCESS(ADD_VACANCY)]: (state, { payload }) => ({
			...state,
			vacancies: state.vacancies.concat(payload),
		}),
		[FAILURE(ADD_VACANCY)]: (state) => ({
			...state,
		}),
		[REQUEST(REMOVE_VACANCY)]: (state) => ({
			...state,
		}),
		[SUCCESS(REMOVE_VACANCY)]: (state, { payload }) => ({
			...state,
			vacancies: state.vacancies.filter((v) => v._id !== payload),
		}),
		[FAILURE(REMOVE_VACANCY)]: (state) => ({
			...state,
		}),
		ARCHIVE_VACANCY_CANDIDATE: (state, { payload }) => ({
			...state,
			vacancy: {
				...state.vacancy,
				candidates: state.vacancy.candidates.filter((v) => v._id !== payload),
			},
		}),
		ARCHIVE_VACANCY_CANDIDATES: (state, { payload }) => ({
			...state,
			vacancy: {
				...state.vacancy,
				candidates: state.vacancy.candidates.filter(
					(i) => !payload.includes(i)
				),
			},
		}),
	},
	initialState
)

export default vacancyList
