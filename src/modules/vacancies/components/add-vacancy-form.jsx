/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { Controller } from 'react-hook-form'
import { Modal, Form, Input, Select, Row, DatePicker } from 'components'
import actions from '../actions'

const AddVacancyForm = ({
	isOpenModal,
	setIsOpenModal,
	offices,
	vacancyTemplates,
	dispatch,
	form,
}) => {
	const [term, onChangeTerm] = useState()
	const { register, errors, handleSubmit, control } = form

	const onSubmit = (data) => {
		setIsOpenModal(false)
		return dispatch(actions.vacancies.addVacancyRequest(data))
	}

	return (
		<Modal
			title='Создать вакансию'
			width={843}
			className='vacancy-list__modal-window'
			isOpen={isOpenModal}
			onCancel={() => setIsOpenModal(false)}
			onSubmit={handleSubmit(onSubmit)}
			submitBtnText='Создать'
		>
			<Form>
				<Form.Item validation={errors.profession} label='Специальность'>
					<Select
						items={vacancyTemplates}
						name='profession'
						ref={register({ required: true })}
					/>
				</Form.Item>
				<Form.Item validation={errors.office} label='Офис'>
					<Select
						items={offices}
						name='office'
						ref={register({ required: true })}
					/>
				</Form.Item>
				<Row justify='space-between'>
					<Form.Item validation={errors.date} label='Крайний срок'>
						<Controller
							name='date'
							control={control}
							rules={{ required: true }}
							render={(props) => (
								<DatePicker
									format='dd.MM.yy'
									value={term}
									onChange={onChangeTerm}
									{...props}
								/>
							)}
						/>
					</Form.Item>
					<Form.Item validation={errors.salary} label='Зарплата'>
						<Input name='salary' ref={register()} />
					</Form.Item>
				</Row>
			</Form>
		</Modal>
	)
}

export default AddVacancyForm
