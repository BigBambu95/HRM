import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { addTab } from 'actions'
import { ToolBar } from 'components/tool-bar'
import {
	Grid,
	Button,
	Spinner,
	Filter,
	FilterList,
	ErrorIndicator,
} from 'components'
import { dictionaryActions } from 'dictionaries'
import { getFilteredVacancies } from '../selectors'
import { AddVacancyForm, VacancyListItem } from '../components'
import actions from '../actions'

const VacancyListContainer = () => {
	// Redux
	const dispatch = useDispatch()
	const filteredVacancies = useSelector((state: any) => getFilteredVacancies(state))
	const professions = useSelector((state: any) => state.dictionaries.professions)
	const offices = useSelector((state: any) => state.dictionaries.offices)
	const loading = useSelector((state: any) => state.vacancyList.loading)
	const error = useSelector((state: any) => state.vacancyList.error)

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
			offices={offices}
			professions={professions}
			addTab={(label, path, office, prevPage) =>
				// dispatch(addTab(label, path, office, prevPage))
				dispatch(addTab(label))
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
						// getSelectValue={(value) =>
						// 	dispatch(
						// 		actions.vacancies.setFilter({
						// 			name: 'profession',
						// 			value,
						// 		})
						// 	)
						// }
						// defaultValue='Все'
					/>
					<Filter
						label='Офис'
						items={offices}
						// getSelectValue={(value) =>
						// 	dispatch(actions.vacancies.setFilter({ name: 'office', value }))
						// }
						// defaultValue='Все'
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
