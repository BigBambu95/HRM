import { Action, handleActions } from 'redux-actions'
import { REQUEST, SUCCESS, FAILURE } from 'helpers/redux'
import { FETCH_VACANCIES, FETCH_VACANCY, SET_FILTER, ADD_VACANCY, REMOVE_VACANCY } from './types'

const initialState: VacancyListState = {
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
		[SUCCESS(FETCH_VACANCIES)]: (state, action: Action<Vacancies>) => ({
			...state,
			vacancies: action.payload,
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
				...state.vacancy,
				candidates: [],
			},
			loading: true,
			error: null,
		}),
		[SUCCESS(FETCH_VACANCY)]: (state, action: Action<Vacancy>) => ({
			...state,
			vacancy: action.payload,
			loading: false,
			error: null,
		}),
		[FAILURE(FETCH_VACANCY)]: (state) => ({
			...state,
			loading: false,
			error: true,
		}),
		[SET_FILTER]: (state, action: Action<FilterType>) => ({
			...state,
			filter: {
				...state.filter,
				[action.payload.name]: action.payload.value,
			},
		}),
		[SUCCESS(ADD_VACANCY)]: (state, action: Action<Vacancies>) => ({
			...state,
			vacancies: state.vacancies.concat(action.payload),
		}),
		[SUCCESS(REMOVE_VACANCY)]: (state, action: Action<ANY_MIGRATION_TYPE>) => ({
			...state,
			vacancies: state.vacancies.filter((v) => v.id !== action.payload),
		}),
		ARCHIVE_VACANCY_CANDIDATE: (state, action: Action<ANY_MIGRATION_TYPE>) => ({
			...state,
			vacancy: {
				...state.vacancy,
				candidates: state.vacancy.candidates.filter((v) => v.id !== action.payload),
			},
		}),
		ARCHIVE_VACANCY_CANDIDATES: (state, action: Action<ANY_MIGRATION_TYPE>) => ({
			...state,
			vacancy: {
				...state.vacancy,
				candidates: state.vacancy.candidates.filter((candidate) => !action.payload.includes(candidate)),
			},
		}),
	},
	initialState
)

export default vacancyList
