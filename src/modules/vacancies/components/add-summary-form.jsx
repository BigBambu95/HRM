/* eslint-disable react/prop-types */
import React from 'react'
import { useForm } from 'react-hook-form'
import { ModalWindow, Form, Input, Select, Row, Col } from 'components'
import actions from '../actions'

const AddSummaryForm = ({
	isOpenModal,
	setIsOpenModal,
	dispatch,
}) => {
	const { handleSubmit } = useForm()

	const employment = [
		{
			_id: 1,
			name: 'Полная'
		},
		{
			_id: 2,
			name: 'Неполная'
		},
		{
			_id: 3,
			name: 'Частичная'
		},
		{
			_id: 4,
			name: 'Сезонная'
		},
	]

	const onSubmit = (data) => {
		setIsOpenModal(false)
		return dispatch(
			actions.vacancies.addVacancyRequest({
				...data
			})
		)
	}

	return (
		<ModalWindow
			title='Создать резюме'
			width={840}
			className='vacancy-list__modal-window'
			isOpen={isOpenModal}
			onCancel={() => setIsOpenModal(false)}
			onSubmit={handleSubmit(onSubmit)}
			submitBtnText='Создать'
		>
			<Form>
				<h3>Общая информация</h3>
				<Row justify="space-between" gutter={[20, 0]}>
					<Col size={12}>
						<Form.Item label='Фамилия'>
							<Input placeholder="Введите фамилию" />
						</Form.Item>
					</Col>
					<Col size={12}>
						<Form.Item label='Имя'>
							<Input placeholder="Введите имя" />
						</Form.Item>
					</Col>
					<Col size={12}>
						<Form.Item label='Отчество'>
							<Input placeholder="Введите отчество" />
						</Form.Item>
					</Col>
					<Col size={12}>
						<Form.Item label='Возраст'>
							<Input placeholder="Введите возраст" />
						</Form.Item>
					</Col>
				</Row>
				<h3>Контактная информация</h3>
				<Row justify="space-between" gutter={[20, 0]}>
					<Col size={12}>
						<Form.Item label='E-mail'>
							<Input placeholder="Введите E-mail" />
						</Form.Item>
					</Col>
					<Col size={12}>
						<Form.Item label='Телефон'>
							<Input placeholder="Введите телефон" />
						</Form.Item>
					</Col>
				</Row>
				<h3>Рабочие моменты</h3>
				<Row justify="space-between" gutter={[20, 0]}>
					<Col size={12}>
						<Form.Item label='Опыт работы'>
							<Input placeholder="Введите опыт" />
						</Form.Item>
					</Col>
					<Col size={12}>
						<Form.Item label='Желаемая з/п'>
							<Input placeholder="Введите желаемую зарплату" />
						</Form.Item>
					</Col>
					<Col size={24}>
						<Form.Item label='Занятость'>
							<Select items={employment} />
						</Form.Item>
					</Col>
				</Row>
			</Form>
		</ModalWindow>
	)
}

export default AddSummaryForm
