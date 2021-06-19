import React from 'react'
import { shallow } from 'enzyme'
import Button from '../button'

describe('Button', () => {
	it('Рендер кнопки c дефолтными значениями', () => {
		const button = shallow(<Button>Click</Button>)

		expect(button).toMatchSnapshot()
	})

	it('Кнопка с переданными пропсами', () => {
		const button = shallow(
			<Button variant="solid" size="large" font="large" type="submit" color="red" fullWidth>
				Click
			</Button>
		)

		expect(button).toMatchSnapshot()
	})

	it('Симуляция клика на кнопку', () => {
		const onButtonClick = jest.fn()
		const button = shallow(<Button onClick={onButtonClick}>Click</Button>)

		button.simulate('click')
		button.simulate('click')

		expect(onButtonClick).toBeCalled()
	})
})
