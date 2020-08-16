/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { ArrowDownIcon } from '../../svg'
import Button from '../button'

const getSelectItemClass = (item, currentItem) => {
	return classnames('select__item', {
		'select__item--active': item === currentItem,
	})
}

const Select = React.forwardRef(
	(
		{ defaultValue, items, icon, name, getSelectValue, style, className },
		ref
	) => {
		const [isOpen, setIsOpen] = useState(false)
		const [value, setValue] = useState(defaultValue)
		const container = useRef(null)

		useEffect(() => {
			getSelectValue(value)
		}, [value])

		const onClickOutsideHandler = (e) => {
			if (isOpen && !container.current.contains(e.target)) {
				setIsOpen(false)
			}
		}

		useEffect(() => {
			window.addEventListener('click', onClickOutsideHandler)

			return () => {
				window.removeEventListener('click', onClickOutsideHandler)
			}
		}, [isOpen])

		const chooseItem = (item) => {
			setValue(item)
			setIsOpen(false)
		}

		const selectList = items.map((item) => (
			<li
				key={item._id}
				className={getSelectItemClass(item.name, value)}
				onClick={() => chooseItem(item.name)}
			>
				{item.name}
			</li>
		))

		const classNames = classnames('select', className)

		return (
			<div className={classNames} style={style} ref={container}>
				<div className='select__current-item'>{value.toString()}</div>
				<input type='hidden' id={name} name={name} value={value} ref={ref} />
				<Button variant='icon' onClick={() => setIsOpen(!isOpen)}>
					{icon}
				</Button>
				{isOpen && (
					<ul className='select__list'>
						{selectList}
						{defaultValue && (
							<li
								className={getSelectItemClass(defaultValue, value)}
								onClick={() => chooseItem(defaultValue)}
							>
								{defaultValue}
							</li>
						)}
					</ul>
				)}
			</div>
		)
	}
)

Select.displayName = 'Select'

Select.propTypes = {
	items: PropTypes.arrayOf(PropTypes.object).isRequired,
	getSelectValue: PropTypes.func,
	icon: PropTypes.node,
	defaultValue: PropTypes.string,
	style: PropTypes.object,
	name: PropTypes.string,
}

Select.defaultProps = {
	icon: <ArrowDownIcon />,
	getSelectValue: () => {},
	defaultValue: 'Все',
	style: null,
	name: null,
}

export default Select
