import { handleActions } from 'redux-actions'

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
	vacancyTemplates: [],
	filter: {
		profession: 'Все',
		office: 'Все',
	},
	loading: true,
	error: null,
}

const vacancyList = handleActions(
	{
		FETCH_VACANCIES_REQUEST: (state) => ({
			...state,
			vacancies: [],
			loading: true,
			error: null,
		}),
		FETCH_VACANCIES_SUCCESS: (state, { payload }) => ({
			...state,
			vacancies: payload.newVacancies,
			loading: false,
			error: null,
		}),
		FETCH_VACANCIES_FAILURE: (state) => ({
			...state,
			vacancies: [],
			loading: false,
			error: true,
		}),
		FETCH_VACANCY_REQUEST: (state) => ({
			...state,
			vacancy: {
				candidates: [],
			},
			loading: true,
			error: null,
		}),
		FETCH_VACANCY_SUCCESS: (state, { payload }) => ({
			...state,
			vacancy: payload.vacancy,
			loading: false,
			error: null,
		}),
		FETCH_VACANCY_FAILURE: (state) => ({
			...state,
			loading: false,
			error: true,
		}),
		FETCH_VACANCY_TEMPLATES_REQUEST: (state) => ({
			...state,
			vacancyTemplates: [],
			loading: true,
			error: null,
		}),
		FETCH_VACANCY_TEMPLATES_SUCCESS: (state, { payload }) => ({
			...state,
			vacancyTemplates: payload.templates,
			loading: false,
			error: null,
		}),
		FETCH_VACANCY_TEMPLATES_FAILURE: (state) => ({
			...state,
			vacancyTemplates: [],
			loading: false,
			error: true,
		}),
		SET_FILTER: (state, { payload }) => ({
			...state,
			filter: {
				...state.filter,
				[payload.params.name]: payload.params.value,
			},
		}),
		ADD_VACANCY_REQUEST: (state) => ({
			...state,
		}),
		ADD_VACANCY_SUCCESS: (state, { payload }) => ({
			...state,
			vacancies: state.vacancies.concat(payload.newVacancy),
		}),
		ADD_VACANCY_FAILURE: (state) => ({
			...state,
		}),
		REMOVE_VACANCY_REQUEST: (state) => ({
			...state,
		}),
		REMOVE_VACANCY_SUCCESS: (state, { payload }) => ({
			...state,
			vacancies: state.vacancies.filter((v) => v._id !== payload.id),
		}),
		REMOVE_VACANCY_FAILURE: (state) => ({
			...state,
		}),
		ARCHIVE_VACANCY_CANDIDATE: (state, { payload }) => {
			const filteredCandidates = state.vacancy.candidates.filter(
				(v) => v.id !== payload.id
			)

			return {
				...state,
				vacancy: {
					...state.vacancy,
					candidates: filteredCandidates,
				},
			}
		},
		ARCHIVE_VACANCY_CANDIDATES: (state, { payload }) => {
			const newCandidates = state.vacancy.candidates.filter(
				(item) => !payload.includes(item)
			)

			return {
				...state,
				vacancy: {
					...state.vacancy,
					candidates: newCandidates,
				},
			}
		},
	},
	initialState
)

export default vacancyList
