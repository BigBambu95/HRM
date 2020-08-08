import React from 'react'
import Modal from './modal-window'

describe('Modal', () => {
	const setUp = (props, children) =>
		shallow(
			<Modal isOpen={false} onSubmit={() => {}} onCancel={() => {}} {...props}>
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
})
