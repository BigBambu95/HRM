import { handleActions } from 'redux-actions'

const initialState = {
	vacancies: [],
	vacancy: {
		candidates: [],
		filter: {
			age: 'Все',
			exp: 'Все',
			desiredSalary: 'Все'
		}
	},
	filter: {
		profession: 'Все',
		office: 'Все'
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
		FETCH_VACANCIES_FAILURE: (state, { payload }) => ({
			...state,
			vacancies: [],
			loading: false,
			error: payload.err,
		}),
		FETCH_VACANCY_REQUEST: (state) => ({
			...state,
			vacancy: {
				candidates: []
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
		FETCH_VACANCY_FAILURE: (state, { payload }) => ({
			...state,
			vacancy: {},
			loading: false,
			error: payload.err,
		}),
		SET_FILTER: (state, { payload }) => ({
			...state,
			filter: {
				...state.filter,
				[payload.params.name]: payload.params.value
			}
		}),
		ADD_VACANCY: (state, { payload }) => ({
			...state,
			vacancies: state.vacancies.concat(payload.newVacancy)
		}),
		REMOVE_VACANCY: (state, { payload }) => {
			const filterdVacancies = state.vacancies.filter(
				(vacancy) => vacancy.url !== payload.id
			)

			return {
				...state,
				vacancies: filterdVacancies,
				vacancy: {},
			}
		},
		ARCHIVE_VACANCY_CANDIDATE: (state, { payload }) => {
			const filteredCandidates = state.vacancy.candidates.filter(
				(item) => item.id !== payload.id
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
