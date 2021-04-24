import React from 'react'
import sinon from 'sinon'
import Button from './button'

describe('Button', () => {
	it('Рендер кнопки c дефолтными значениями', () => {
		const button = shallow(<Button></Button>)
		expect(button).toMatchSnapshot()
		const result = Button.defaultProps.onClick()
		expect(result).toBe(undefined)
	})

	it('Кнопка с переданными пропсами', () => {
		const button = shallow(
			<Button variant='solid' size='large' font='large' type='submit' color='red' fullWidth>
				Click
			</Button>
		)
		expect(button).toMatchSnapshot()
	})

	it('Симуляция клика на кнопку', () => {
		const onButtonClick = sinon.spy()
		const button = shallow(<Button onClick={onButtonClick}>Click</Button>)
		button.simulate('click')
		button.simulate('click')
		expect(onButtonClick).toHaveProperty('callCount', 2)
	})
})
