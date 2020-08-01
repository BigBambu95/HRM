/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

import { ArrowDownIcon } from '../../svg'
import Button from '../button'

const Select = React.forwardRef(
	({ defaultValue, items, icon, name, getSelectValue, style, label }, ref) => {
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
			className="select__list__item"
			onClick={() => chooseItem(item.name)}
		>
				{item.name}
  </li>	
		))

		return (
  <div className="select-wrapper">
    {label && <label htmlFor={name} className="select__label">{label}</label>}
    <div className="select" style={style} ref={container}>
      <div className="select__current-item">{value.toString()}</div>
      <input type="hidden" id={name} name={name} value={value} ref={ref} />
      <Button variant="icon" onClick={() => setIsOpen(!isOpen)}>
        {icon}
      </Button>
			{isOpen && (
				<ul className="select__list">
					{selectList}
					{defaultValue && <li className="select__list__item" onClick={() => chooseItem(defaultValue)}>{defaultValue}</li>}
				</ul>
			)}
    </div>
  </div>
		)
	}
)

Select.displayName = 'Select'

Select.propTypes = {
	items: PropTypes.arrayOf(PropTypes.object).isRequired,
	icon: PropTypes.node,
	getSelectValue: PropTypes.func,
	defaultValue: PropTypes.string,
	style: PropTypes.object,
	label: PropTypes.string,
	name: PropTypes.string,
}

Select.defaultProps = {
	icon: <ArrowDownIcon />,
	getSelectValue: () => {},
	defaultValue: '',
	label: '',
	style: null
}

export default Select
