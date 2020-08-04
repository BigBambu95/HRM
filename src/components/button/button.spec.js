import React from 'react'
import sinon from 'sinon'
import Button from './button'

describe('Button', () => {
	let button
	beforeAll(() => {
		button = mount(<Button>Click</Button>)
	})

	it('Рендер кнопки c дефолтными значениями', () => {
		expect(button.text()).toMatch('Click')
	})

	it('Кнопка большого размера', () => {
		button.setProps({ size: 'large' })
		expect(button.props().size).toEqual('large')
		expect(button.find('button').hasClass('large')).toEqual(true)
	})

	it('Кнопка с большим размером шрифта', () => {
		button.setProps({ font: 'large' })
		expect(button.props().font).toEqual('large')
		expect(button.find('button').hasClass('largeFont')).toEqual(true)
	})

	it('Кнопка c кастомным цветом', () => {
		button.setProps({ color: 'red' })
		expect(button.props().color).toEqual('red')
		expect(button.find('button').hasClass('red')).toEqual(true)
	})

	it('Неактивная кнопка', () => {
		button.setProps({ disabled: true })
		expect(button.props().disabled).toEqual(true)
	})

	it('Кнопка с кастомным типом', () => {
		button.setProps({ type: 'submit' })
		expect(button.props().type).toEqual('submit')
	})

	it('Кнопка-иконка', () => {
		button.setProps({ variant: 'icon' })
		expect(button.props().variant).toEqual('icon')
		expect(button.find('button').hasClass('icon')).toEqual(true)
	})

	it('Симуляция клика на кнопку', () => {
		const onButtonClick = sinon.spy()
		const button = mount(<Button onClick={onButtonClick}>Click</Button>)
		button.simulate('click')
		button.simulate('click')
		expect(onButtonClick).toHaveProperty('callCount', 2)
	})
})
