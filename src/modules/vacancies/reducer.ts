import { Action, handleActions } from 'redux-actions'
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
		[SUCCESS(VacancyTypes.FETCH_VACANCIES)]: (state, action: Action<Vacancies>) => ({
			...state,
			vacancies: action.payload,
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
		[SUCCESS(VacancyTypes.FETCH_VACANCY)]: (state, action: Action<Vacancy>) => ({
			...state,
			vacancy: action.payload,
			loading: false,
			error: null,
		}),
		[FAILURE(VacancyTypes.FETCH_VACANCY)]: (state) => ({
			...state,
			loading: false,
			error: true,
		}),
		//@ts-ignore
		[VacancyTypes.SET_FILTER]: (state, action: Action<Record<string, string>>) => ({
			...state,
			filter: {
				...state.filter,
				[action.payload.name]: action.payload.value,
			},
		}),
		[REQUEST(VacancyTypes.ADD_VACANCY)]: (state) => ({
			...state,
		}),
		[SUCCESS(VacancyTypes.ADD_VACANCY)]: (state, action: Action<ANY_MIGRATION_TYPE>) => ({
			...state,
			vacancies: state.vacancies.concat(action.payload),
		}),
		[FAILURE(VacancyTypes.ADD_VACANCY)]: (state) => ({
			...state,
		}),
		[REQUEST(VacancyTypes.REMOVE_VACANCY)]: (state) => ({
			...state,
		}),
		[SUCCESS(VacancyTypes.REMOVE_VACANCY)]: (state, action: Action<ANY_MIGRATION_TYPE>) => ({
			...state,
			vacancies: state.vacancies.filter((v) => v._id !== action.payload),
		}),
		[FAILURE(VacancyTypes.REMOVE_VACANCY)]: (state) => ({
			...state,
		}),
		ARCHIVE_VACANCY_CANDIDATE: (state, action: Action<ANY_MIGRATION_TYPE>) => ({
			...state,
			vacancy: {
				...state.vacancy,
				candidates: state.vacancy.candidates.filter((v) => v._id !== action.payload),
			},
		}),
		ARCHIVE_VACANCY_CANDIDATES: (state, action: Action<ANY_MIGRATION_TYPE>) => ({
			...state,
			vacancy: {
				...state.vacancy,
				candidates: state.vacancy.candidates.filter(
					(candidate) => !action.payload.includes(candidate)
				),
			},
		}),
	},
	initialState
)

export default vacancyList
