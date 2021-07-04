import React, { useState, Key } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Modal, Form, Input, Select, Row, DatePicker } from '@components'
import type { SelectValue } from 'components/select/select'

export interface AddVacancyFormProps {
	isOpenModal: boolean;
	setIsOpenModal: (isOpen: boolean) => void;
	offices: Array<SelectValue>;
	vacancyTemplates: Array<SelectValue>;
	addVacancy: ({ profession, office, date }: { profession?: Key, office?: Key, date?: Date | Date[] }) => void;
}

const AddVacancyForm: React.FC<AddVacancyFormProps> = ({
	isOpenModal,
	setIsOpenModal,
	offices,
	vacancyTemplates,
	addVacancy
}) => {
	const [term, setTerm] = useState<Date | Date[]>()
	const { register, errors, handleSubmit, control } = useForm()
	const [profession, setProfession] = useState<React.Key>()
	const [office, setOffice] = useState<React.Key>()

	const onSubmit = () => {
		setIsOpenModal(false)
		return addVacancy({
			profession,
			office,
			date: term,
		})
	}

	return (
		<Modal
			title="Создать вакансию"
			width={840}
			className="vacancy-list__modal-window"
			isOpen={isOpenModal}
			onCancel={() => setIsOpenModal(false)}
			onSubmit={handleSubmit(onSubmit)}
			submitBtnText="Создать"
		>
			<Form>
				<Form.Item validation={errors.profession} label="Специальность">
					<Select
						items={vacancyTemplates}
						name="profession"
						ref={register({ required: true })}
						onChange={({ id }) => setProfession(id)}
					/>
				</Form.Item>
				<Form.Item validation={errors.office} label="Офис">
					<Select
						items={offices}
						name="office"
						ref={register({ required: true })}
						onChange={({ id }) => setOffice(id)}
					/>
				</Form.Item>
				<Row justify="space-between">
					<Form.Item validation={errors.date} label="Крайний срок">
						<Controller
							name="date"
							control={control}
							// rules={{ required: true }}
							render={(props) => <DatePicker format="dd.MM.yy" {...props} value={term} onChange={setTerm} />}
						/>
					</Form.Item>
					<Form.Item validation={errors.salary} label="Зарплата">
						<Input name="salary" ref={register()} />
					</Form.Item>
				</Row>
			</Form>
		</Modal>
	)
}

export default AddVacancyForm
