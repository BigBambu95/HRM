import React, { useState, useContext, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { vacancies, addTab } from 'actions'
import { getFilteredVacancies, getVacancyProfessions, getVacancyOffices } from '../selectors'
import VacancyListItem from 'components/vacancy-list-item'
import Filter from 'components/filter'
import FilterList from 'components/filter-list'
import { ToolBar } from 'components/tool-bar'
import {
	Input,
	Select,
	Grid,
	Button,
	ModalWindow,
	HRMServiceContext,
	Spinner,
	Checkbox,
	Row,
	Form,
	FormItem,
} from 'components'

const AddVacancyForm = ({ isOpenModal, setIsOpenModal }) => {
	const { register, handleSubmit, watch, errors } = useForm()
	const onSubmit = (data) => {
		console.log(data)
	}

	watch('example') // watch input value by passing the name of it

	return (
		<ModalWindow
			title="Создать вакансию"
			width={843}
			className="vacancy-list__modal-window"
			isOpen={isOpenModal}
			onCancel={() => setIsOpenModal(false)}
		>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<FormItem validation={errors.profession}>
					<Input name="profession" label="Специальность" ref={register({ required: true })} />
				</FormItem>
				<FormItem validation={errors.office}>
					<Select
						items={['1', '2', '3']}
						name="office"
						label="Офис"
						ref={register({ required: true })}
					/>
				</FormItem>
				<FormItem validation={errors.salary}>
					<Input name="salary" label="Зарплата" ref={register({ required: true })} />
				</FormItem>
				<Row justify="center">
					<Button variant="solid" size="large" color="purple" type="submit">
						Создать
					</Button>
				</Row>
			</Form>
		</ModalWindow>
	)
}

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
		dispatch(vacancies.vacanciesRequest())
		hrmService
			.getVacancies()
			.then((data) => dispatch(vacancies.vacanciesLoaded(data)))
			.catch((err) => dispatch(vacancies.vacanciesError(err)))
	}, [])

	const vacancyList = filteredVacancies?.map((vacancy) => (
		<VacancyListItem
			key={vacancy.id}
			item={vacancy}
			addTab={(label, path, office, prevPage) => dispatch(addTab(label, path, office, prevPage))}
			deleteItem={(url) => dispatch(vacancies.removeVacancy(url))}
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

	if (loading) return <Spinner />

	return (
		<>
			<ToolBar>
				<FilterList>
					<Filter
						label="Должность"
						items={vacancyProfessions.concat('Все')}
						filter={(val) => dispatch(vacancies.setFilterProfessionValue(val))}
						defaultValue={filterProfession}
					/>
					<Filter
						label="Офис"
						items={vacancyOffices.concat('Все')}
						filter={(val) => dispatch(vacancies.setFilterOfficeValue(val))}
						defaultValue={filterOffice}
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
