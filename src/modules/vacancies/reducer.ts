import { handleActions } from 'redux-actions'
import { REQUEST, SUCCESS, FAILURE } from 'helpers/redux'
import VacancyTypes from './types'

export interface VacancyState {
	vacancies: Vacancies | [];
	vacancy: {
		candidates: Candidates | [],
		filter: Record<string, string>,
	};
	filter: Record<string, string>;
	loading: boolean;
	error: boolean | null;
}

const initialState: VacancyState = {
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
		[REQUEST(VacancyTypes.FETCH_VACANCIES)]: (state) => ({
			...state,
			vacancies: [],
			loading: true,
			error: null,
		}),
		[SUCCESS(VacancyTypes.FETCH_VACANCIES)]: (state, { payload }) => ({
			...state,
			vacancies: payload,
			loading: false,
			error: null,
		}),
		[FAILURE(VacancyTypes.FETCH_VACANCIES)]: (state) => ({
			...state,
			vacancies: [],
			loading: false,
			error: true,
		}),
		[REQUEST(VacancyTypes.FETCH_VACANCY)]: (state) => ({
			...state,
			vacancy: {
				candidates: [],
			},
			loading: true,
			error: null,
		}),
		[SUCCESS(VacancyTypes.FETCH_VACANCY)]: (state, { payload }) => ({
			...state,
			vacancy: payload,
			loading: false,
			error: null,
		}),
		[FAILURE(VacancyTypes.FETCH_VACANCY)]: (state) => ({
			...state,
			loading: false,
			error: true,
		}),
		[VacancyTypes.SET_FILTER]: (state, { payload }) => ({
			...state,
			filter: {
				...state.filter,
				[payload.name]: payload.value,
			},
		}),
		[REQUEST(VacancyTypes.ADD_VACANCY)]: (state) => ({
			...state,
		}),
		[SUCCESS(VacancyTypes.ADD_VACANCY)]: (state, { payload }) => ({
			...state,
			vacancies: state.vacancies.concat(payload),
		}),
		[FAILURE(VacancyTypes.ADD_VACANCY)]: (state) => ({
			...state,
		}),
		[REQUEST(VacancyTypes.REMOVE_VACANCY)]: (state) => ({
			...state,
		}),
		[SUCCESS(VacancyTypes.REMOVE_VACANCY)]: (state, { payload }) => ({
			...state,
			vacancies: state.vacancies.filter((v) => v._id !== payload),
		}),
		[FAILURE(VacancyTypes.REMOVE_VACANCY)]: (state) => ({
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
				candidates: state.vacancy.candidates.filter((i) => !payload.includes(i)),
			},
		}),
	},
	initialState
)

export default vacancyList
