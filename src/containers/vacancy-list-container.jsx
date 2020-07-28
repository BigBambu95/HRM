import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'

import { withData, withHRMService } from '../components/hoc'
import { addTab, offices, vacanciesActions } from '../actions'
import {
	getFilteredVacancies,
	getVacancyProfessions,
	getVacancyOffices,
} from '../selectors'

import VacancyListItem from '../components/vacancy-list-item'
import Filter from '../components/filter'
import FilterList from '../components/filter-list'
import { ToolBar } from '../components/tool-bar'
import Button from '../components/button'
import ModalWindow from '../components/modal-window'
import Grid from '../components/grid'
import Select from '../components/select'
import Input from '../components/input'
import { SearchIcon } from '../svg'

const VacancyListContainer = ({
	filteredVacancies,
	vacancyProfessions,
	vacancyOffices,
	setFilterProfessionValue,
	setFilterOfficeValue,
	deleteVacancy,
	addTab,
	filterOffice,
	filterProfession,
}) => {
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
			addTab={addTab}
			deleteItem={deleteVacancy}
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

	const [isOpenModal, setIsOpenModal] = useState(false)

	return (
		<>
			<ToolBar>
				<FilterList>
					<Filter
						label="Должность"
						items={vacancyProfessions.concat('Все')}
						filter={setFilterProfessionValue}
						defaultValue={filterProfession}
					/>
					<Filter
						label="Офис"
						items={vacancyOffices.concat('Все')}
						filter={setFilterOfficeValue}
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
				<div className="flex justify-content-between">
					<h3>Выберите шаблон</h3>
					<Input
						label="Поиск"
						name="vacancyTemplateSearch"
						rightIcon={<SearchIcon width={16} height={16} />}
					/>
				</div>
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
					1 250 000
					<Select />
					<Input label="Зарплата" />
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

VacancyListContainer.propTypes = {
	filterOffice: PropTypes.string.isRequired,
	filterProfession: PropTypes.string.isRequired,
	filteredVacancies: PropTypes.array.isRequired,
	vacancyProfessions: PropTypes.array.isRequired,
	vacancyOffices: PropTypes.array.isRequired,
	loading: PropTypes.bool.isRequired,
	error: PropTypes.object,
}

const mapStateToProps = (state) => ({
	filterOffice: state.vacancyList.filterOffice,
	filterProfession: state.vacancyList.filterProfession,
	filteredVacancies: getFilteredVacancies(state),
	vacancyProfessions: getVacancyProfessions(state),
	vacancyOffices: getVacancyOffices(state),
	loading: state.vacancyList.loading,
	error: state.vacancyList.error,
})

const mapDispatchToProps = (dispatch, ownProps) => {
	const { hrmService } = ownProps

	const { officesRequest, officesLoaded, officesError } = offices
	const { 
		fetchVacanciesRequest, fetchVacanciesSuccess, fetchVacanciesFailure,
		setFilterProfessionValue, setFilterOfficeValue, removeVacancy
	} = vacanciesActions

	return {
		fetchVacancies: () => {
			dispatch(fetchVacanciesRequest())
			hrmService
				.getVacancies()
				.then((data) => dispatch(fetchVacanciesSuccess(data)))
				.catch((err) => dispatch(fetchVacanciesFailure(err)))
		},
		fetchOffices: () => {
			dispatch(officesRequest())
			hrmService
				.getOffices()
				.then((data) => dispatch(officesLoaded(data)))
				.catch((err) => dispatch(officesError(err)))
		},
		setFilterProfessionValue: (val) => dispatch(setFilterProfessionValue(val)),
		setFilterOfficeValue: (val) => dispatch(setFilterOfficeValue(val)),
		deleteVacancy: (url) => dispatch(removeVacancy(url)),
		addTab: (label, path, office, prevPage) => {
			dispatch(
				addTab({
					label,
					path,
					office,
					prevPage,
				})
			)
		},
	}
}

export default compose(
	withHRMService(),
	connect(mapStateToProps, mapDispatchToProps),
	withData('fetchVacancies')
)(VacancyListContainer)
