import React, { useState, Key } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Form, Input, Select, Row, DatePicker, Modal } from '@shared/components'
import { getDictionaryValueById, transformDictionaryValues } from '@shared/helpers/dictionaries'

export interface VacancyFormProps {
	offices: Offices;
	professions: Professions;
	mode: 'new' | 'edit';
	onCancel: () => void;
	visible: boolean;
	onSubmit: ({ profession, office, date }: { profession?: Key, office?: Key, date?: Date | Date[] }) => void;
	vacancy: Vacancy | undefined;
}

const VacancyForm: React.FC<VacancyFormProps> = ({
	offices,
	professions,
	vacancy,
	mode,
	visible,
	onCancel,
	onSubmit,
}) => {
	const [term, setTerm] = useState<Date | Date[]>()
	const { register, errors, handleSubmit, control } = useForm()
	const [profession, setProfession] = useState<React.Key>()
	const [office, setOffice] = useState<React.Key>()

	const onSubmitHandler = () => {
		onCancel()
		return onSubmit({
			profession,
			office,
			date: term,
		})
	}
	
	return (
		<Modal
			title={mode === 'new' ? 'Создать вакансию' : 'Изменить вакансию'}
			width={840}
			className="vacancy-list__modal-window"
			isOpen={visible}
			onCancel={onCancel}
			onSubmit={handleSubmit(onSubmitHandler)}
			submitBtnText={mode === 'new' ? 'Создать' : 'Изменить'}
		>
			<Form>
				<Form.Item validation={errors.profession} label="Специальность">
					<Select
						defaultValue={vacancy?.profession ? getDictionaryValueById(professions, vacancy.profession) : undefined}
						items={transformDictionaryValues(professions)}
						name="profession"
						ref={register({ required: true })}
						onChange={({ id }) => setProfession(id)}
					/>
				</Form.Item>
				<Form.Item validation={errors.office} label="Офис">
					<Select
						defaultValue={vacancy?.office ? getDictionaryValueById(offices, vacancy.office) : undefined}
						items={transformDictionaryValues(offices)}
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
							render={(props) => 
								<DatePicker
									{...props}
									format="dd.MM.yy"
									value={term}
									onChange={setTerm} />
							}
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

export default VacancyForm