import React, { useState, useEffect, useContext } from 'react'
import { autorun } from 'mobx'
import { observer } from 'mobx-react-lite'
import { Grid, Button, Filter, ToolBar, FilterList, ErrorIndicator, Spinner } from '@components'
import { transformDictionaryValues } from '@helpers/dictionaries'
import { StoreContext } from '@store/StoreContext'
import useDictionary from '@hooks'
import { AddVacancyForm, VacancyListItem } from '../components'

const VacancyListContainer = () => {
	const { tabsStore: { addTab }, vacanciesStore: {
		state, fetchVacancies, filter, setFilter: setFilterAction, vacancies, removeVacancy, addVacancy
	}} = useContext(StoreContext)

	// Local state
	const [isOpenModal, setIsOpenModal] = useState(false)

	const [professions, offices] = useDictionary()

	useEffect(() => {
		autorun(() => {
			fetchVacancies(filter)
		})
	}, [filter])

	const vacancyList = vacancies.map((vacancy: Vacancy) => (
		<VacancyListItem
			key={vacancy.id}
			vacancy={vacancy}
			offices={offices}
			professions={professions}
			addTab={addTab}
			removeVacancy={removeVacancy}
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

	const spinner = state === 'pending' && <Spinner />
	const errorIndicator = state === 'error' && <ErrorIndicator />
	const content = state === 'done' && itemList

	const setFilter = (name: string) => ({ id, value }: { id: React.Key, value: string }) =>
		setFilterAction({ name, value: value !== 'Все' ? id.toString() : value })

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
				addVacancy={addVacancy}
				isOpenModal={isOpenModal}
				setIsOpenModal={setIsOpenModal}
				vacancyTemplates={transformDictionaryValues(professions)}
				offices={transformDictionaryValues(offices)}
			/>
		</>
	)
}

export default observer(VacancyListContainer)
