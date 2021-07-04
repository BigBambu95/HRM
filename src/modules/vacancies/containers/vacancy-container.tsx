import React, { useContext, useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { Grid, Button, Spinner, FilterList, Filter, ToolBar, ToolBarGroupItem, ErrorIndicator } from '@components'
import { PencilIcon, RemoveBasketIcon } from '@svg'
import { StoreContext } from '@store/StoreContext'
import { autorun } from 'mobx'
import { CandidateList, AddSummaryForm } from '../components'

const VacancyContainer = observer(({ history, match }: ANY_MIGRATION_TYPE) => {
	const { vacancyStore, vacanciesStore: { removeVacancy } } = useContext(StoreContext)
	const { state, candidates, phoneCandidates, fetchVacancy, setFilter,
		interviewCandidates, finalCandidates, reviewSummaryCandidates, addCandidate
	} = vacancyStore

	// Local state
	const [isOpenModal, setIsOpenModal] = useState(false)

	const candidateLists = [
		{
			title: 'Рассмотрение резюме',
			candidates: reviewSummaryCandidates,
		},
		{
			title: 'Телефонное интервью',
			candidates: phoneCandidates,
		},
		{
			title: 'Собеседование',
			candidates: interviewCandidates,
		},
		{
			title: 'Кандидаты',
			candidates: finalCandidates,
		},
	]

	useEffect(() => {
		autorun(() => fetchVacancy(match.params.id))
	}, [match.params.id])

	const itemList =
		candidates.length === 0 ? (
			<h4>На данную вакансию пока нет кандидатов!</h4>
		) : (
			<Grid columns={4} gap="2em">
				{candidateLists.map((candidateList) => {
					return <CandidateList key={candidateList.title} {...candidateList} />
				})}
			</Grid>
		)

	const spinner = state === 'pending' && <Spinner />
	const errorIndicator = state === 'error' && <ErrorIndicator />
	const content = state === 'done' && itemList

	return (
		<>
			<ToolBar>
				<FilterList>
					<Filter
						label="Возраст"
						items={candidates.map(({ id, age }) => {
							return {
								id,
								value: age,
							}
						})}
						onChange={({ value }) => setFilter({ name: 'age', value })}
						defaultValue="Все"
					/>
					<Filter
						label="Опыт"
						items={candidates.map(({ id, exp }) => {
							return {
								id,
								value: exp,
							}
						})}
						onChange={({ value }) => setFilter({ name: 'exp', value })}
						defaultValue="Все"
					/>
					<Filter
						label="Желаемая з/п"
						items={candidates.map(({ id, desiredSalary }) => {
							return {
								id,
								value: desiredSalary,
							}
						})}
						onChange={({ value }) => setFilter({ name: 'desiredSalary', value })}
						defaultValue="Все"
					/>
				</FilterList>
				<ToolBarGroupItem>
					<Button variant="outlined" color="purple" onClick={() => setIsOpenModal(true)}>
						Добавить резюме
					</Button>
					<Button variant="icon">
						<PencilIcon />
					</Button>
					 <Button
						variant="icon"
						onClick={() => {
						 removeVacancy(match.params.id)
						 history.push('/vacancies/')
					 }}
					 >
						<RemoveBasketIcon />
					 </Button>
				</ToolBarGroupItem>
			</ToolBar>
			{spinner}
			{errorIndicator}
			{content}
			<AddSummaryForm
				isOpenModal={isOpenModal}
				setIsOpenModal={setIsOpenModal}
				addCandidate={(candidate: Candidate) => addCandidate(match.params.id, candidate)}
			/>
		</>
	)
})

export default withRouter(VacancyContainer)
