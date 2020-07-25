import C from '../contstants';

const vacancies = {
     vacanciesRequest: () => C.FETCH_VACANCIES_REQUEST,

     vacanciesLoaded: vacancies => {
        return {
            payload: vacancies,
            type: C.FETCH_VACANCIES_SUCCESS
        }
    },

     vacanciesError: err => {
        return {
            payload: err,
            type: C.FETCH_VACANCIES_FAILURE
        }
    },

    vacancyRequest: () => C.FETCH_VACANCY_REQUEST,

    vacancyLoaded: vacancy => {
        return {
            payload: vacancy,
            type: C.FETCH_VACANCY_SUCCESS
        }
    },

    vacancyError: err => {
        return {
            payload: err,
            type: C.FETCH_VACANCY_FAILURE
        }
    },

    setFilterProfessionValue: value => {
      return {
          value,
          type: C.SET_FILTER_PROFESSION_VALUE
      }
    },

    setFilterOfficeValue: value => {
        return {
            value,
            type: C.SET_FILTER_OFFICE_VALUE
        }
    },

    removeVacancy: id => {
         return {
             payload: id,
             type: C.REMOVE_VACANCY
         }
    },


    archiveCandidate: candidate => {
        return {
            payload: candidate,
            type: C.ARCHIVE_VACANCY_CANDIDATE
        }
    },

    archiveAllCandidates: newArchiveCandidates => {
        return {
            payload: newArchiveCandidates,
            type: C.ARCHIVE_VACANCY_CANDIDATES
        }
    }
};

export default vacancies;