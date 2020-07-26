import C from '../contstants';

const vacancies = {
  vacanciesRequest: () => C.FETCH_VACANCIES_REQUEST,

  vacanciesLoaded: (vacancies) => ({
    payload: vacancies,
    type: C.FETCH_VACANCIES_SUCCESS,
  }),

  vacanciesError: (err) => ({
    payload: err,
    type: C.FETCH_VACANCIES_FAILURE,
  }),

  vacancyRequest: () => C.FETCH_VACANCY_REQUEST,

  vacancyLoaded: (vacancy) => ({
    payload: vacancy,
    type: C.FETCH_VACANCY_SUCCESS,
  }),

  vacancyError: (err) => ({
    payload: err,
    type: C.FETCH_VACANCY_FAILURE,
  }),

  setFilterProfessionValue: (value) => ({
    value,
    type: C.SET_FILTER_PROFESSION_VALUE,
  }),

  setFilterOfficeValue: (value) => ({
    value,
    type: C.SET_FILTER_OFFICE_VALUE,
  }),

  removeVacancy: (id) => ({
    payload: id,
    type: C.REMOVE_VACANCY,
  }),

  archiveCandidate: (candidate) => ({
    payload: candidate,
    type: C.ARCHIVE_VACANCY_CANDIDATE,
  }),

  archiveAllCandidates: (newArchiveCandidates) => ({
    payload: newArchiveCandidates,
    type: C.ARCHIVE_VACANCY_CANDIDATES,
  }),
};

export default vacancies;
