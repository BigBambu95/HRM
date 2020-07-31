import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { addTab } from 'actions'
import Filter from 'components/filter'
import FilterList from 'components/filter-list'
import { ToolBar } from 'components/tool-bar'
import { Grid, Button, Spinner } from 'components'
import ErrorIndicator from 'components/error-indicator'
import { getFilteredVacancies, getVacancyProfessions, getVacancyOffices } from '../selectors'
import { AddVacancyForm, VacancyListItem } from '../components'
import actions from '../actions'

const VacancyListContainer = () => {
	// Redux
	const dispatch = useDispatch()
	const filteredVacancies = useSelector((state) => getFilteredVacancies(state))
	const vacancyProfessions = useSelector((state) => getVacancyProfessions(state))
	const vacancyOffices = useSelector((state) => getVacancyOffices(state))
	const loading = useSelector((state) => state.vacancyList.loading)
	const error = useSelector((state) => state.vacancyList.error)
	const [isOpenModal, setIsOpenModal] = useState(false)

	useEffect(() => {
		dispatch(actions.fetchVacanciesRequest())
	}, [])

	const vacancyList = filteredVacancies.map((vacancy) => (
		<VacancyListItem
			key={vacancy._id}
			item={vacancy}
			addTab={(label, path, office, prevPage) => dispatch(addTab(label, path, office, prevPage))}
			deleteItem={(url) => dispatch(actions.removeVacancy(url))}
		/>
	))

	const itemList =
		filteredVacancies.length === 0 ? (
			<p>По данным параметрам фильтрации не найдено результатов!</p>
		) : (
			<Grid columns={3} gap="2em">
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
						label="Должность"
						items={vacancyProfessions}
						getSelectValue={(value) => dispatch(actions.setFilter({ name: 'profession', value }))}
						defaultValue="Все"
					/>
					<Filter
						label="Офис"
						items={vacancyOffices}
						getSelectValue={(value) => dispatch(actions.setFilter({ name: 'office', value }))}
						defaultValue="Все"
					/>
				</FilterList>
				<Button variant="outlined" color="purple" onClick={() => setIsOpenModal(true)}>
					Добавить вакансию
				</Button>
			</ToolBar>
			{itemList}
			<AddVacancyForm isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />
		</>
	)
}

export default VacancyListContainer
