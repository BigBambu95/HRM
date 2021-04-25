/* eslint-disable react/prop-types */
import React from 'react'
import { useForm } from 'react-hook-form'
import { ModalWindow, Form, Input, Select, Row, Col } from 'components'
import actions from '../actions'

const AddSummaryForm = ({ isOpenModal, setIsOpenModal, dispatch }) => {
	const { handleSubmit } = useForm()

	const employment = [
		{
			_id: 1,
			name: 'Полная',
		},
		{
			_id: 2,
			name: 'Неполная',
		},
		{
			_id: 3,
			name: 'Частичная',
		},
		{
			_id: 4,
			name: 'Сезонная',
		},
	]

	const onSubmit = (data) => {
		setIsOpenModal(false)
		return dispatch(
			actions.vacancies.addVacancyRequest({
				...data,
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
				<h4>Общая информация</h4>
				<Row justify='space-between' gutter={[20, 20]}>
					<Col size={8}>
						<Form.Item>
							<Input placeholder='Фамилия' />
						</Form.Item>
					</Col>
					<Col size={8}>
						<Form.Item>
							<Input placeholder='Имя' />
						</Form.Item>
					</Col>
					<Col size={8}>
						<Form.Item>
							<Input placeholder='Отчество' />
						</Form.Item>
					</Col>
				</Row>
				<Row justify='space-between' gutter={[20, 20]}>
					<Col size={8}>
						<Form.Item>
							<Input placeholder='Возраст' />
						</Form.Item>
					</Col>
				</Row>
				<h4 style={{ marginTop: '32px' }}>Контактная информация</h4>
				<Row justify='space-between' gutter={[20, 20]}>
					<Col size={12}>
						<Form.Item>
							<Input placeholder='E-mail' />
						</Form.Item>
					</Col>
					<Col size={12}>
						<Form.Item>
							<Input placeholder='Телефон' />
						</Form.Item>
					</Col>
				</Row>
				<h4 style={{ marginTop: '32px' }}>Рабочие моменты</h4>
				<Row justify='space-between' gutter={[20, 20]}>
					<Col size={12}>
						<Form.Item>
							<Input placeholder='Опыт' />
						</Form.Item>
					</Col>
					<Col size={12}>
						<Form.Item>
							<Input placeholder='Желаемая зарплата' />
						</Form.Item>
					</Col>
					<Col size={24}>
						<Form.Item>
							<Select items={employment} />
						</Form.Item>
					</Col>
				</Row>
			</Form>
		</ModalWindow>
	)
}

export default AddSummaryForm
