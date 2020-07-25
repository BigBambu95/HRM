import C from '../contstants';
import candidateList from './candidates';


const vacancyList = (state, action) => {

    if(state === undefined) {
        return {
            vacancies: [],
            vacancy: {
                candidates: []
            },
            filterProfession: 'Все',
            filterOffice: 'Все',
            loading: true,
            error: null
        }
    }

    switch (action.type) {
        case C.FETCH_VACANCIES_REQUEST:
            return {
                ...state,
                vacancies: [],
                loading: true,
                error: null
            };

        case C.FETCH_VACANCIES_SUCCESS:
            return {
                ...state,
                vacancies: action.payload,
                loading: false,
                error: null
            };

        case C.FETCH_VACANCIES_FAILURE:
            return {
                ...state,
                vacancies: [],
                loading: false,
                error: action.payload
            };

        case C.SET_FILTER_PROFESSION_VALUE:
            return {
                ...state,
                filterProfession: action.value
            };

        case C.SET_FILTER_OFFICE_VALUE:
            return {
                ...state,
                filterOffice: action.value
            };

        case C.FETCH_VACANCY_REQUEST:
            return {
                ...state,
                vacancy: {},
                loading: true,
                error: null
            };

        case C.FETCH_VACANCY_SUCCESS:
            return {
                ...state,
                vacancy: action.payload,
                loading: false,
                error: null
            };

        case C.FETCH_VACANCY_FAILURE:
            return {
                ...state,
                vacancy: {},
                loading: false,
                error: action.payload
            };

        case C.REMOVE_VACANCY:

            const notDeletedVacancies = state.vacancies.filter(vacancy => vacancy.url !== action.payload);

            return {
                ...state,
                vacancies: notDeletedVacancies,
                vacancy: {}
            };


        case C.ARCHIVE_VACANCY_CANDIDATE:

            const filteredCandidates = state.vacancy.candidates.filter(item => item.id !== action.payload.id);

            const newVacancy = {
                ...state.vacancy,
                candidates: filteredCandidates
            };

            return {
                ...state,
                vacancy: newVacancy
            };

        case C.ARCHIVE_VACANCY_CANDIDATES:

            const newCandidates = state.vacancy.candidates.filter(item => !action.payload.includes(item));

            return {
                ...state,
                vacancy: {
                    ...state.vacancy,
                    candidates: newCandidates
                }
            };

        default:
            return state;
    }


};

export default vacancyList;