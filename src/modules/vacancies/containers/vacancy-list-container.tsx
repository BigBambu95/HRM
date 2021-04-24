import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTab } from 'actions'
import { ToolBar } from 'components/tool-bar'
import { Grid, Button, Spinner, Filter, FilterList, ErrorIndicator } from 'components'
import { dictionaryActions } from 'dictionaries'
import { AddVacancyForm, VacancyListItem } from '../components'
import actions from '../actions'

const VacancyListContainer = () => {
	// Redux
	const dispatch = useDispatch()
	const professions = useSelector((state) => state.dictionaries.professions)
	const offices = useSelector((state) => state.dictionaries.offices)
	const vacancies = useSelector((state) => state.vacancyList.vacancies)
	const filter = useSelector((state) => state.vacancyList.filter)
	const loading = useSelector((state) => state.vacancyList.loading)
	const error = useSelector((state) => state.vacancyList.error)

	// Local state
	const [isOpenModal, setIsOpenModal] = useState(false)

	useEffect(() => {
		dispatch(actions.vacancies.fetchVacanciesRequest())
		dispatch(dictionaryActions.fetchOfficesRequest())
		dispatch(dictionaryActions.fetchProfessionsRequest())
	}, [])

	useEffect(() => {
		dispatch(actions.vacancies.fetchVacanciesRequest(filter))
	}, [filter])

	const vacancyList = vacancies.map((vacancy: Vacancy) => (
		<VacancyListItem
			key={vacancy._id}
			item={vacancy}
			offices={offices}
			professions={professions}
			addTab={(label, path, office, prevPage) => dispatch(addTab(label, path, office, prevPage))}
			deleteItem={(id) => dispatch(actions.vacancies.removeVacancyRequest(id))}
		/>
	))

	const itemList =
		vacancies.length === 0 ? (
			<p>По данным параметрам фильтрации не найдено результатов!</p>
		) : (
			<Grid columns={3} gap='2em'>
				{vacancyList}
			</Grid>
		)

	const spinner = loading && <Spinner />
	const errorIndicator = error && <ErrorIndicator />
	const content = !(loading || error) && itemList

	return (
		<>
			<ToolBar>
				<FilterList>
					<Filter
						label='Должность'
						items={professions}
						onChange={({ _id }) =>
							dispatch(
								actions.vacancies.setFilter({
									name: 'profession',
									value: _id ?? 'Все',
								})
							)
						}
						defaultValue='Все'
					/>
					<Filter
						label='Офис'
						items={offices}
						onChange={({ _id }) =>
							dispatch(
								actions.vacancies.setFilter({
									name: 'office',
									value: _id ?? 'Все',
								})
							)
						}
						defaultValue='Все'
					/>
				</FilterList>
				<Button onClick={() => setIsOpenModal(true)}>Добавить вакансию</Button>
			</ToolBar>
			{spinner}
			{errorIndicator}
			{content}
			<AddVacancyForm
				dispatch={dispatch}
				isOpenModal={isOpenModal}
				setIsOpenModal={setIsOpenModal}
				vacancyTemplates={professions}
				offices={offices}
			/>
		</>
	)
}

export default VacancyListContainer
