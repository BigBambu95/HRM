import React from 'react'
import Modal from './modal-window'

describe('Modal', () => {
	let modal
	beforeAll(() => {
		modal = mount(<Modal>Modal window children</Modal>)
	})

	it('Проверка что модальное окно не отрендерено по умолчанию', () => {
		expect(modal.isEmptyRender()).toEqual(true)
		expect(modal.props().isOpen).toEqual(false)
	})

	it('Симуляция рендера окна', () => {
		modal.setProps({ isOpen: true })
		expect(modal.props().isOpen).toEqual(true)
		expect(modal.props().children).toEqual('Modal window children')
	})
})
