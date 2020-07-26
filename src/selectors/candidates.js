export const getReviewSummaryCandidatesSelector = ({ candidates = [] }) => candidates.filter((item) => item.status.toLowerCase() === 'рассмотрение резюме');

export const getPhoneCandidatesSelector = ({ candidates = [] }) => candidates.filter((item) => item.status.toLowerCase() === 'телефонное интервью');

export const getInterviewCandidatesSelector = ({ candidates = [] }) => candidates.filter((item) => item.status.toLowerCase() === 'собеседование');

export const getFinalCandidatesSelector = ({ candidates = [] }) => candidates.filter((item) => item.status.toLowerCase() === 'кандидат');

export const getArchiveCandidatesSelector = (state) => state.candidateList.candidates;
