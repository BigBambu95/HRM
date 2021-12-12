import React, { useContext, useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { autorun } from 'mobx'
import { Button, FilterList, Filter, ToolBar, ToolBarGroupItem, ContextMenu } from '@components'
import { ArchiveIcon, PencilIcon, RemoveBasketIcon, VacancyIcon } from '@svg'
import { StoreContext } from '@store/StoreContext'
import { ItemList } from '@templates'
import { CandidateList, СandidateForm } from '../components'

const VacancyContainer = observer(({ history, match }: ANY_MIGRATION_TYPE) => {
	const { vacancyStore, vacanciesStore: { removeVacancy } } = useContext(StoreContext)
	const { state, candidates, phoneCandidates, fetchVacancy, setFilter,
		interviewCandidates, finalCandidates, reviewSummaryCandidates, addCandidate
	} = vacancyStore

	// Local state
	const [formVisible, setFormVisible] = useState(false)
	const [formStatus, setFormStatus] = useState('Рассмотрение резюме')

	// Грузим данные с бека
	useEffect(() => {
		autorun(() => fetchVacancy(match.params.id))
	}, [match.params.id])

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

	const candidateListsRender = candidateLists.map((candidateList) => (
		<CandidateList
			key={candidateList.title}
			{...candidateList}
			contextMenu={(
				<ContextMenu iconVariant="horizontal">
					<ContextMenu.Item
						icon={<ArchiveIcon width={16} height={16} />}
						onClick={() => alert('Все кандидаты архивированы')}
					>
						Архивировать всех
					</ContextMenu.Item>
					<ContextMenu.Item
						icon={<VacancyIcon width={16} height={16} />}
						onClick={() => {
							setFormStatus(candidateList.title)
							setFormVisible(true)
						}}
					>
						Добавить резюме
					</ContextMenu.Item>
				</ContextMenu>
			)} 
		/>
	))

	const toolbar = (
		<ToolBar>
			<FilterList>
				<Filter
					label="Возраст"
					items={candidates.map(({ id, age }) => ({ id, value: age }))}
					onChange={({ value }) => setFilter({ name: 'age', value })}
					defaultValue="Все"
				/>
				<Filter
					label="Опыт"
					items={candidates.map(({ id, exp }) => ({ id, value: exp }))}
					onChange={({ value }) => setFilter({ name: 'exp', value })}
					defaultValue="Все"
				/>
				<Filter
					label="Желаемая з/п"
					items={candidates.map(({ id, desiredSalary }) => ({ id, value: desiredSalary }))}
					onChange={({ value }) => setFilter({ name: 'desiredSalary', value })}
					defaultValue="Все"
				/>
			</FilterList>
			<ToolBarGroupItem>
				<Button
					variant="outlined"
					color="purple"
					onClick={() => setFormVisible(true)}
				>
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
	)

	return (
		<>
			<ItemList
				state={state}
				items={candidates}
				renderItems={candidateListsRender}
				columns={4}
				header={toolbar}
			/>
			<СandidateForm
				visible={formVisible}
				onCancel={() => setFormVisible(false)}
				onSubmit={({ firstName, lastName, ...candidateProps }) => {
					setFormVisible(false)
					addCandidate(match.params.id, {
						...candidateProps,
						status: formStatus,
						name: `${lastName} ${firstName}`
					})
				}}
			/>
		</>
	)
})

export default withRouter(VacancyContainer)
