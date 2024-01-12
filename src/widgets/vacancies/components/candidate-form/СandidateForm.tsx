import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Modal, Form, Input, Select, Row, Col } from '@shared/components'

export interface CandidateFormProps {
	visible: boolean;
	onCancel: () => void;
	onSubmit: (candidate: Omit<Candidate, 'name'> & { firstName: string, lastName: string }) => void;
}

const CandidateForm = ({ visible, onCancel, onSubmit }: CandidateFormProps) => {
	const { handleSubmit, control } = useForm()

	const employment = [
		{
			id: 1,
			name: 'Полная',
		},
		{
			id: 2,
			name: 'Неполная',
		},
		{
			id: 3,
			name: 'Частичная',
		},
		{
			id: 4,
			name: 'Сезонная',
		},
	]


	return (
		<Modal
			title="Создать резюме"
			width={840}
			className="vacancy-list__modal-window"
			isOpen={visible}
			onCancel={onCancel}
			onSubmit={handleSubmit(onSubmit)}
			submitBtnText="Создать"
		>
			<Form>
				<h4>Общая информация</h4>
				<Row justify="space-between" gutter={[20, 20]}>
					<Col size={8}>
						<Form.Item>
							<Controller
								name="lastName"
								control={control}
								render={(props) => (
									<Input
										placeholder="Фамилия"
										{...props}
									/>
								)}
							/>
						</Form.Item>
					</Col>
					<Col size={8}>
						<Form.Item>
							<Controller
								name="firstName"
								control={control}
								render={(props) => (
									<Input
										placeholder="Имя"
										{...props}
									/>
								)}
							/>
						</Form.Item>
					</Col>
					<Col size={8}>
						<Form.Item>
							<Controller
								name="age"
								control={control}
								render={(props) => (
									<Input
										placeholder="Возраст"
										{...props}
									/>
								)}
							/>
						</Form.Item>
					</Col>
				</Row>
				<h4 style={{ marginTop: '32px' }}>Контактная информация</h4>
				<Row justify="space-between" gutter={[20, 20]}>
					<Col size={12}>
						<Form.Item>
							<Controller
								name="mail"
								control={control}
								render={(props) => (
									<Input
										placeholder="E-mail"
										{...props}
									/>
								)}
							/>
						</Form.Item>
					</Col>
					<Col size={12}>
						<Form.Item>
							<Controller
								name="phone"
								control={control}
								render={(props) => (
									<Input
										placeholder="Телефон"
										{...props}
									/>
								)}
							/>
						</Form.Item>
					</Col>
				</Row>
				<h4 style={{ marginTop: '32px' }}>Рабочие моменты</h4>
				<Row justify="space-between" gutter={[20, 20]}>
					<Col size={12}>
						<Form.Item>
							<Controller
								name="exp"
								control={control}
								render={(props) => (
									<Input
										placeholder="Опыт"
										{...props}
									/>
								)}
							/>
						</Form.Item>
					</Col>
					<Col size={12}>
						<Form.Item>
							<Controller
								name="desiredSalary"
								control={control}
								render={(props) => (
									<Input
										placeholder="Желаемая зарплата"
										{...props}
									/>
								)}
							/>
						</Form.Item>
					</Col>
					<Col size={24}>
						<Form.Item>
							<Select
								items={employment.map(({ id, name }) => {
									return {
										id,
										value: name,
									}
								})}
							/>
						</Form.Item>
					</Col>
				</Row>
			</Form>
		</Modal>
	)
}

export default CandidateForm
