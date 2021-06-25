import { createSelector } from 'reselect'
import { RootState } from '../../reducers'

export const selectCandidates = (state: RootState): Candidates => state.vacancyList.vacancy.candidates

export const selectReviewSummaryCandidates = createSelector(selectCandidates, (candidates) =>
	candidates.filter(({ status }) => status.toLowerCase() === 'рассмотрение резюме')
)

export const selectPhoneCandidates = createSelector(selectCandidates, (candidates) =>
	candidates.filter(({ status }) => status.toLowerCase() === 'телефонное интервью')
)

export const selectInterviewCandidates = createSelector(selectCandidates, (candidates) =>
	candidates.filter(({ status }) => status.toLowerCase() === 'собеседование')
)

export const selectFinalCandidates = createSelector(selectCandidates, (candidates) =>
	candidates.filter(({ status }) => status.toLowerCase() === 'кандидат')
)
