import { filterArr } from "../reducers/reducers-utils";


export const getVacancyProfessions = state => {
    const professionList = state.vacancyList.vacancies.map(item => item.profession);
    return [...new Set(professionList)];
};

export const getVacancyOffices = state => {
    const officeList = state.vacancyList.vacancies.map(item => item.office);
    return [...new Set(officeList)];
};

export const getFilteredVacancies = state => filterArr(state.vacancyList.vacancies, state.vacancyList.filterProfession, state.vacancyList.filterOffice);
