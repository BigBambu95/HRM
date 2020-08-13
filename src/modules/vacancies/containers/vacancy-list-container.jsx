import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { addTab } from 'actions'
import Filter from 'components/filter'
import FilterList from 'components/filter-list'
import { ToolBar } from 'components/tool-bar'
import { Grid, Button, Spinner } from 'components'
import ErrorIndicator from 'components/error-indicator'
import { dictionaryActions } from 'dictionaries'
import { getFilteredVacancies } from '../selectors'
import { AddVacancyForm, VacancyListItem } from '../components'
import actions from '../actions'

const VacancyListContainer = () => {
	// Redux
	const dispatch = useDispatch()
	const filteredVacancies = useSelector((state) => getFilteredVacancies(state))
	const professions = useSelector((state) => state.dictionaries.professions)
	const offices = useSelector((state) => state.dictionaries.offices)
	const loading = useSelector((state) => state.vacancyList.loading)
	const error = useSelector((state) => state.vacancyList.error)

	// Local state
	const [isOpenModal, setIsOpenModal] = useState(false)
	const form = useForm()

	useEffect(() => {
		dispatch(actions.vacancies.fetchVacanciesRequest())
		dispatch(dictionaryActions.fetchOfficesRequest())
		dispatch(dictionaryActions.fetchProfessionsRequest())
	}, [])

	const vacancyList = filteredVacancies.map((vacancy) => (
		<VacancyListItem
			key={vacancy._id}
			item={vacancy}
			addTab={(label, path, office, prevPage) =>
				dispatch(addTab(label, path, office, prevPage))
			}
			deleteItem={(id) => dispatch(actions.vacancies.removeVacancyRequest(id))}
		/>
	))

	const itemList =
		filteredVacancies.length === 0 ? (
			<p>По данным параметрам фильтрации не найдено результатов!</p>
		) : (
			<Grid columns={3} gap='2em'>
				{vacancyList}
			</Grid>
		)

	if (loading) return <Spinner />

	if (error) return <ErrorIndicator />

	return (
		<>
			<ToolBar>
				<FilterList>
					<Filter
						label='Должность'
						items={professions}
						getSelectValue={(value) =>
							dispatch(
								actions.vacancies.setFilter({
									name: 'profession',
									value,
								})
							)
						}
						defaultValue='Все'
					/>
					<Filter
						label='Офис'
						items={offices}
						getSelectValue={(value) =>
							dispatch(actions.vacancies.setFilter({ name: 'office', value }))
						}
						defaultValue='Все'
					/>
				</FilterList>
				<Button onClick={() => setIsOpenModal(true)}>Добавить вакансию</Button>
			</ToolBar>
			{itemList}
			<AddVacancyForm
				dispatch={dispatch}
				isOpenModal={isOpenModal}
				setIsOpenModal={setIsOpenModal}
				vacancyTemplates={professions}
				offices={offices}
				form={form}
			/>
		</>
	)
}

export default VacancyListContainer
