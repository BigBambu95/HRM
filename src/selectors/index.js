import { filterArr } from '../reducers/reducers-utils';

export const getVacancyProfessions = (state) => [...new Set(state.vacancyList.vacancies.map((item) => item.profession))]

export const getVacancyOffices = (state) => [...new Set(state.vacancyList.vacancies.map((item) => item.office))]

export const getFilteredVacancies = ({ vacancyList }) => (
  filterArr(vacancyList.vacancies, vacancyList.filterProfession, vacancyList.filterOffice)
);
