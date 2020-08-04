import React from 'react'
import ButtonGroup from './button-group'
import Button from '../button/button'

describe('Группа кнопок', () => {
	let buttonGroup

	beforeAll(() => {
		buttonGroup = mount(
			<ButtonGroup>
				<Button>Click 1</Button>
				<Button>Click 2</Button>
			</ButtonGroup>
		)
	})

	it('Рендер группы кнопок', () => {
		expect(buttonGroup.find(Button)).toHaveLength(2)
	})

	it('Вертикальная группа кнопок', () => {
		buttonGroup.setProps({ vertical: true })
		expect(buttonGroup.props().vertical).toEqual(true)
		expect(buttonGroup.childAt(0).hasClass('vertical')).toEqual(true)
	})
})
