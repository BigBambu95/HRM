
import { filterArr } from 'reducers/reducers-utils';

export const getReviewSummaryCandidatesSelector = ({ vacancyList }) => vacancyList.vacancy.candidates.filter(({ status }) => status.toLowerCase() === 'рассмотрение резюме');

export const getPhoneCandidatesSelector = ({ vacancyList }) => vacancyList.vacancy.candidates.filter(({ status }) => status.toLowerCase() === 'телефонное интервью');

export const getInterviewCandidatesSelector = ({ vacancyList }) => vacancyList.vacancy.candidates.filter(({ status }) => status.toLowerCase() === 'собеседование');

export const getFinalCandidatesSelector = ({ vacancyList }) => vacancyList.vacancy.candidates.filter(({ status }) => status.toLowerCase() === 'кандидат');

export const getFilteredVacancies = ({ vacancyList }) => (
  filterArr(vacancyList.vacancies, vacancyList.filter.office, vacancyList.filter.profession)
);

