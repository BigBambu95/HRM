import React from 'react'
import ButtonGroup from './button-group'
import Button from '../button/button'
import { render } from 'enzyme'

describe('Группа кнопок', () => {
	const setUp = (props) =>
		render(
			<ButtonGroup {...props}>
				<Button>Click 1</Button>
				<Button>Click 2</Button>
			</ButtonGroup>
		)

	it('Рендер группы кнопок', () => {
		const buttonGroup = setUp()
		expect(buttonGroup).toMatchSnapshot()
	})

	it('Вертикальная группа кнопок', () => {
		const buttonGroup = setUp({ vertical: true })
		expect(buttonGroup).toMatchSnapshot()
	})
})
