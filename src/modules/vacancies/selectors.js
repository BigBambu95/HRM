import { filterArr } from 'reducers/reducers-utils'
import { createSelector } from 'reselect'

export const selectCandidates = (state) => state.vacancyList.vacancy.candidates

export const selectReviewSummaryCandidates = createSelector(
	selectCandidates,
	(items) =>
		items.filter(({ status }) => status.toLowerCase() === 'рассмотрение резюме')
)

export const selectPhoneCandidates = createSelector(selectCandidates, (items) =>
	items.filter(({ status }) => status.toLowerCase() === 'телефонное интервью')
)

export const selectInterviewCandidates = createSelector(
	selectCandidates,
	(items) =>
		items.filter(({ status }) => status.toLowerCase() === 'собеседование')
)

export const selectFinalCandidates = createSelector(selectCandidates, (items) =>
	items.filter(({ status }) => status.toLowerCase() === 'кандидат')
)

export const getFilteredVacancies = ({ vacancyList }) =>
	filterArr(
		vacancyList.vacancies,
		vacancyList.filter.office,
		vacancyList.filter.profession
	)
