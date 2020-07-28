import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { withData, withHRMService } from '../../components/hoc'

import {
	getFinalCandidatesSelector,
	getInterviewCandidatesSelector,
	getPhoneCandidatesSelector,
	getReviewSummaryCandidatesSelector,
} from '../../selectors/candidates'

import { vacanciesActions } from 'actions'
import CandidateList from './candidate-list'
import { ToolBar, ToolBarGroupItem } from '../../components/tool-bar'
import Button from '../../components/button'
import Grid from '../../components/grid'

const VacancyContainer = ({
	candidates = [],
	reviewSummaryCandidates,
	phoneCandidates,
	interviewCandidates,
	finalCandidates,
	editCandidate,
	archiveCandidate,
	archiveAllCandidates,
	deleteVacancy,
}) => {
	if (candidates.length === 0) {
		return <h4>На данную вакансию пока нет кандидатов!</h4>
	}

	return (
		<>
			<ToolBar>
				<ToolBarGroupItem>
					<Button variant="outlined" color="purple">
						Добавить резюме
					</Button>
					<Button variant="icon">
						<PencilIcon />
					</Button>
					<Button variant="icon" onClick={deleteVacancy}>
						<RemoveBasketIcon />
					</Button>
				</ToolBarGroupItem>
			</ToolBar>
			<Grid columns={4} gap="2em">
				<CandidateList
					title="Рассмотрение резюме"
					items={reviewSummaryCandidates}
					editItem={editCandidate}
					archiveItem={archiveCandidate}
					archiveAllItems={archiveAllCandidates}
				/>
				<CandidateList
					title="Телефонное интервью"
					items={phoneCandidates}
					editItem={editCandidate}
					archiveItem={archiveCandidate}
					archiveAllItems={archiveAllCandidates}
				/>
				<CandidateList
					title="Собеседование"
					items={interviewCandidates}
					editItem={editCandidate}
					archiveItem={archiveCandidate}
					archiveAllItems={archiveAllCandidates}
				/>
				<CandidateList
					title="Кандидаты"
					items={finalCandidates}
					editItem={editCandidate}
					archiveItem={archiveCandidate}
					archiveAllItems={archiveAllCandidates}
				/>
			</Grid>
		</>
	)
}

VacancyContainer.propTypes = {
	candidates: PropTypes.array.isRequired,
}

const mapStateToProps = ({ vacancyList: { vacancy, loading, error } }) => ({
	candidates: vacancy.candidates,
	reviewSummaryCandidates: getReviewSummaryCandidatesSelector(vacancy),
	phoneCandidates: getPhoneCandidatesSelector(vacancy),
	interviewCandidates: getInterviewCandidatesSelector(vacancy),
	finalCandidates: getFinalCandidatesSelector(vacancy),
	loading,
	error,
})

const mapDispatchToProps = (dispatch, ownProps) => {
	const {
		fetchVacancyRequest,
		fetchVacancySuccess,
		fetchVacancyFailure,
		removeVacancy,
	} = vacanciesActions
	const { hrmService, match, history } = ownProps

	return {
		fetchVacancy: () => {
			dispatch(fetchVacancyRequest())
			hrmService
				.getVacancy(match.params.id)
				.then((data) => dispatch(fetchVacancySuccess(data)))
				.catch((err) => dispatch(fetchVacancyFailure(err)))
		},
		deleteVacancy: () => {
			dispatch(removeVacancy(match.params.id))
			history.push('/vacancies/')
		},
		editCandidate: () => dispatch(),
		// archiveCandidate: (candidate) => {
		// 	dispatch(archiveCandidate(candidate))
		// 	pushToast('Кандидат перемещен в архив')
		// },
		// archiveAllCandidates: (items) => dispatch(archiveAllCandidates(items)),
	}
}

export default compose(
	withRouter,
	withHRMService(),
	connect(mapStateToProps, mapDispatchToProps),
	withData('fetchVacancy')
)(VacancyContainer)
