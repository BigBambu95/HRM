import { createSelector } from 'reselect'

export const selectCandidates = (state: ANY_MIGRATION_TYPE) => state.vacancyList.vacancy.candidates

export const selectReviewSummaryCandidates = createSelector(selectCandidates, (items) =>
	items.filter(({ status }: ANY_MIGRATION_TYPE) => status.toLowerCase() === 'рассмотрение резюме')
)

export const selectPhoneCandidates = createSelector(selectCandidates, (items) =>
	items.filter(({ status }: ANY_MIGRATION_TYPE) => status.toLowerCase() === 'телефонное интервью')
)

export const selectInterviewCandidates = createSelector(selectCandidates, (items) =>
	items.filter(({ status }: ANY_MIGRATION_TYPE) => status.toLowerCase() === 'собеседование')
)

export const selectFinalCandidates = createSelector(selectCandidates, (items) =>
	items.filter(({ status }: ANY_MIGRATION_TYPE) => status.toLowerCase() === 'кандидат')
)
