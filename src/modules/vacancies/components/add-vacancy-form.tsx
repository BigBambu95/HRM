import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Modal, Form, Input, Select, Row, DatePicker } from 'components'
import actions from '../actions'

export interface AddVacancyFormProps {
	isOpenModal: boolean;
	setIsOpenModal: (isOpen: boolean) => void;
	offices: ANY_MIGRATION_TYPE;
	vacancyTemplates: ANY_MIGRATION_TYPE;
	dispatch: ANY_MIGRATION_TYPE;
}

const AddVacancyForm: React.FC<AddVacancyFormProps> = ({
	isOpenModal,
	setIsOpenModal,
	offices,
	vacancyTemplates,
	dispatch,
}) => {
	const [term, onChangeTerm] = useState()
	const { register, errors, handleSubmit, control } = useForm()
	const [profession, setProfession] = useState()
	const [office, setOffice] = useState()

	const onSubmit = (data) => {
		setIsOpenModal(false)
		return dispatch(
			actions.addVacancyRequest({
				...data,
				profession,
				office,
			})
		)
	}

	return (
		<Modal
			title='Создать вакансию'
			width={840}
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
						onChange={({ _id }) => setProfession(_id)}
					/>
				</Form.Item>
				<Form.Item validation={errors.office} label='Офис'>
					<Select
						items={offices}
						name='office'
						ref={register({ required: true })}
						onChange={({ _id }) => setOffice(_id)}
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
									{...props}
									value={term}
									onChange={onChangeTerm}
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
