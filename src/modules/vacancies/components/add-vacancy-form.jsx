/* eslint-disable react/prop-types */
import React from 'react'
import { useForm } from 'react-hook-form'
import { 
  ModalWindow, Form,  
  Input, Select, Row, Button 
} from 'components'
import actions from '../actions'

const AddVacancyForm = ({ 
  isOpenModal, setIsOpenModal 
}) => {
	const { register, handleSubmit, watch, errors } = useForm()
	const onSubmit = (data) => {
		return actions.addVacancy(data)
	}

  // TODO Засунуть в UseEffect
	watch('example')

	return (
  <ModalWindow
    title="Создать вакансию"
    width={843}
    className="vacancy-list__modal-window"
    isOpen={isOpenModal}
    onCancel={() => setIsOpenModal(false)}
		>
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Item validation={errors.profession}>
        <Input name="profession" label="Специальность" ref={register({ required: true })} />
      </Form.Item>
      <Form.Item validation={errors.office}>
        <Select
          items={['1', '2', '3']}
          name="office"
          label="Офис"
          ref={register({ required: true })}
        />
      </Form.Item>
      <Form.Item validation={errors.salary}>
        <Input name="salary" label="Зарплата" ref={register({ required: true })} />
      </Form.Item>
      <Row justify="center">
        <Button variant="solid" size="large" color="purple" type="submit">
          Создать
        </Button>
      </Row>
    </Form>
  </ModalWindow>
	)
}

export default AddVacancyForm