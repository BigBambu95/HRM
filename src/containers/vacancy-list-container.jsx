import React, { useState, useContext, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { vacanciesActions, addTab } from 'actions'
import {
	getFilteredVacancies,
	getVacancyProfessions,
	getVacancyOffices,
} from '../selectors'
import VacancyListItem from 'components/vacancy-list-item'
import Filter from 'components/filter'
import FilterList from 'components/filter-list'
import { ToolBar } from 'components/tool-bar'
import { 
	Input, Select, Grid, Button, 
	ModalWindow, HRMServiceContext, Spinner 
} from 'components'
import { SearchIcon } from 'svg'
import Row from 'components/row'


const VacancyListContainer = () => {

	// Redux
	const dispatch = useDispatch()
	const filterOffice = useSelector((state) => state.vacancyList.filterOffice)
	const filterProfession = useSelector((state) => state.vacancyList.filterProfession)
	const filteredVacancies = useSelector((state) => getFilteredVacancies(state))
	const vacancyProfessions = useSelector((state) => getVacancyProfessions(state))
	const vacancyOffices = useSelector((state) => getVacancyOffices(state))
	const loading = useSelector((state) => state.vacancyList.loading)

	const hrmService = useContext(HRMServiceContext)
	const [isOpenModal, setIsOpenModal] = useState(false)

	useEffect(() => {
		dispatch(vacanciesActions.fetchVacanciesRequest())
		hrmService
			.getVacancies()
			.then((data) => dispatch(vacanciesActions.fetchVacanciesSuccess(data)))
			.catch((err) => dispatch(vacanciesActions.fetchVacanciesFailure(err)))
	}, [])
	
	const vacancyTemplates = [
		'UI/UX дизайнер',
		'Менеджер проектов',
		'Front-end разработчик',
		'PHP разработчик',
		'Back-end разработчик',
		'Проектировщик',
		'Аналитик',
		'Motion дизайнер',
	]

	const vacancyList = filteredVacancies?.map((vacancy) => (
		<VacancyListItem
			key={vacancy.id}
			item={vacancy}
			addTab={(label, path, office, prevPage) => dispatch(addTab(label, path, office, prevPage))}
			deleteItem={(url) => dispatch(vacanciesActions.removeVacancy(url))}
		/>
	))

	const itemList =
		filteredVacancies?.length === 0 ? (
			<p>По данным параметрам фильтрации не найдено результатов!</p>
		) : (
			<Grid columns={3} gap="2em">
				{vacancyList}
			</Grid>
		)

	if(loading) return <Spinner />

	return (
		<>
			<ToolBar>
				<FilterList>
					<Filter
						label="Должность"
						items={vacancyProfessions.concat('Все')}
						filter={(val) => dispatch(vacanciesActions.setFilterProfessionValue(val))}
						defaultValue={filterProfession}
					/>
					<Filter
						label="Офис"
						items={vacancyOffices.concat('Все')}
						filter={(val) => dispatch(vacanciesActions.setFilterOfficeValue(val))}
						defaultValue={filterOffice}
					/>
				</FilterList>
				<Button
					variant="outlined"
					color="purple"
					onClick={() => setIsOpenModal(true)}
				>
					Добавить вакансию
				</Button>
			</ToolBar>
			{itemList}
			<ModalWindow
				title="Создать вакансию"
				width={843}
				className="vacancy-list__modal-window"
				isOpen={isOpenModal}
				onCancel={() => setIsOpenModal(false)}
				submitBtnLabel="Создать"
			>
				<Row justify="space-between">
					<h3>Выберите шаблон</h3>
					<Row justify="space-between">
						<Input
							label="Поиск"
							name="vacancyTemplateSearch"
							rightIcon={<SearchIcon width={16} height={16} />}
						/>
						<Button variant="outlined" color="purple">Создать</Button>
					</Row>
				</Row>
				<div>
					<p>Популярные шаблоны</p>
					<Grid columns={4} gap="1em">
						{vacancyTemplates.map((template, idx) => (
							<Button key={idx} variant="outlined" size="large">
								{template}
							</Button>
						))}
					</Grid>
				</div>
				<div className="vacancy-list__modal-window__section">
					<h3>Небольшие подробности</h3>
					<Row justify="start">
						<Select />
						<Input label="Зарплата" />
					</Row>
					<input type="checkbox" />
				</div>
				<div className="vacancy-list__modal-window__section">
					<h3>Где разместить</h3>
					<input type="checkbox" />
					<input type="checkbox" />
					<input type="checkbox" />
					<input type="checkbox" />
					<input type="checkbox" />
					<input type="checkbox" />
					<input type="checkbox" />
				</div>
			</ModalWindow>
		</>
	)
}

export default VacancyListContainer
