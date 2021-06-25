import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'reducers'
import { addTab } from 'actions'
import { ToolBar } from 'components/tool-bar'
import { Grid, Button, Filter, FilterList, ErrorIndicator, Spinner } from 'components'
import { dictionaryActions } from 'dictionaries'
import { transformDictionaryValues } from 'helpers/dictionaries'
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
		dispatch(dictionaryActions.fetchOfficesRequest())
		dispatch(dictionaryActions.fetchProfessionsRequest())
	}, [])

	useEffect(() => {
		dispatch(actions.fetchVacanciesRequest(filter))
	}, [filter])

	const vacancyList = vacancies.map((vacancy: Vacancy) => (
		<VacancyListItem
			key={vacancy.id}
			vacancy={vacancy}
			offices={offices}
			professions={professions}
			addTab={(params) => dispatch(addTab(params))}
			deleteItem={(id) => dispatch(actions.removeVacancyRequest(id))}
		/>
	))

	const itemList =
		vacancies.length === 0 ? (
			<p>По данным параметрам фильтрации не найдено результатов!</p>
		) : (
			<Grid columns={3} gap="2em">
				{vacancyList}
			</Grid>
		)

	const spinner = loading && <Spinner />
	const errorIndicator = error && <ErrorIndicator />
	const content = !(loading || error) && itemList

	const setFilter = (name: string) => ({ id, value }: { id: React.Key, value: string }) =>
		dispatch(actions.setFilter({ name, value: value !== 'Все' ? id.toString() : value }))

	return (
		<>
			<ToolBar>
				<FilterList>
					<Filter label="Должность" items={transformDictionaryValues(professions)} onChange={setFilter('profession')} />
					<Filter label="Офис" items={transformDictionaryValues(offices)} onChange={setFilter('office')} />
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
				vacancyTemplates={transformDictionaryValues(professions)}
				offices={transformDictionaryValues(offices)}
			/>
		</>
	)
}

export default VacancyListContainer
