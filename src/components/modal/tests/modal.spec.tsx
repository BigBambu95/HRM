import React from 'react'
import Modal, { ModalProps } from '../modal'
import { shallow } from 'enzyme'

describe('Modal', () => {
	const setUp = (props?: ModalProps, children?: React.ReactNode) =>
		shallow(
			<Modal isOpen={false} {...props}>
				{children}
			</Modal>
		)

	it('Проверка что модальное окно не отрендерено по умолчанию', () => {
		const modal = setUp()
		expect(modal).toMatchSnapshot()
	})

	it('Рендер окна с пропсами по умолчанию', () => {
		const modal = setUp({ isOpen: true })
		expect(modal).toMatchSnapshot()
	})

	it('Рендер окна с переданными пропсами', () => {
		const modal = setUp(
			{
				isOpen: true,
				title: 'Создать вакансию',
				submitBtnText: 'Создать',
				width: 800,
			},
			<div>Custom children</div>
		)

		expect(modal).toMatchSnapshot()
	})

	it('Проверка функционала закрытия окна разными способами', () => {
		const onCancel = jest.fn()
		const modal = setUp({ isOpen: true, onCancel })

		modal.find('.overlay').simulate('click')
		modal.find('.modal-window__close-btn').simulate('click')
		modal.find('.modal-window__cancel-btn').simulate('click')

		//TODO: Протестить нажатии клавиши Escape
		expect(onCancel).toHaveBeenCalledTimes(3)
	})
})
