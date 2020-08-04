import React, { useEffect } from 'react'
import { compose } from 'redux'
import { useSelector, useDispatch } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { Grid, Button, Spinner, FilterList, Filter } from 'components'

import { PencilIcon, RemoveBasketIcon } from 'svg'
import ErrorIndicator from 'components/error-indicator'
import {
	selectCandidates,
	selectInterviewCandidates,
	selectPhoneCandidates,
	selectReviewSummaryCandidates,
	selectFinalCandidates,
} from '../selectors'

import actions from '../actions'
import CandidateList from '../components/candidate-list'
import { ToolBar, ToolBarGroupItem } from '../../../components/tool-bar'

const VacancyContainer = ({ history, match }) => {
	const dispatch = useDispatch()

	const candidates = useSelector(selectCandidates)
	const reviewSummaryCandidates = useSelector(selectReviewSummaryCandidates)
	const phoneCandidates = useSelector(selectPhoneCandidates)
	const interviewCandidates = useSelector(selectInterviewCandidates)
	const finalCandidates = useSelector(selectFinalCandidates)
	const loading = useSelector((state) => state.vacancyList.loading)
	const error = useSelector((state) => state.vacancyList.error)

	const candidateLists = [
		{
			title: 'Рассмотрение резюме',
			items: reviewSummaryCandidates,
		},
		{
			title: 'Телефонное интервью',
			items: phoneCandidates,
		},
		{
			title: 'Собеседование',
			items: interviewCandidates,
		},
		{
			title: 'Кандидаты',
			items: finalCandidates,
		},
	]

	useEffect(() => {
		dispatch(actions.fetchVacancyRequest(match.params.id))
	}, [])

	const deleteVacancy = () => {
		dispatch(actions.removeVacancy(match.params.id))
		history.push('/vacancies/')
	}

	if (loading) return <Spinner />

	if (error) return <ErrorIndicator />

	if (candidates.length === 0) {
		return <h4>На данную вакансию пока нет кандидатов!</h4>
	}

	return (
		<>
			<ToolBar>
				<FilterList>
					<Filter
						label='Возраст'
						items={candidates}
						getSelectValue={(value) =>
							dispatch(actions.setFilter({ name: 'age', value }))
						}
						defaultValue='Все'
					/>
					<Filter
						label='Опыт'
						items={candidates}
						getSelectValue={(value) =>
							dispatch(actions.setFilter({ name: 'exp', value }))
						}
						defaultValue='Все'
					/>
					<Filter
						label='Желаемая з/п'
						items={candidates}
						getSelectValue={(value) =>
							dispatch(actions.setFilter({ name: 'desiredSalary', value }))
						}
						defaultValue='Все'
					/>
				</FilterList>
				<ToolBarGroupItem>
					<Button variant='outlined' color='purple'>
						Добавить резюме
					</Button>
					<Button variant='icon'>
						<PencilIcon />
					</Button>
					<Button variant='icon' onClick={deleteVacancy}>
						<RemoveBasketIcon />
					</Button>
				</ToolBarGroupItem>
			</ToolBar>
			<Grid columns={4} gap='2em'>
				{candidateLists.map((props) => {
					return <CandidateList key={props.title} {...props} />
				})}
			</Grid>
		</>
	)
}

export default compose(withRouter)(VacancyContainer)
