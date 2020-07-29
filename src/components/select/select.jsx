import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

import { ArrowDownIcon } from '../../svg'
import Button from '../button'

const Select = React.forwardRef((
{	
	defaultValue,
	items,
	icon,
	name,
	getSelectValue,
	style,
	label
}, ref) => {

	const [isOpen, setIsOpen] = useState(false)
	const [value, setValue] = useState(defaultValue)
	const container = useRef(null)

	useEffect(() => {
		getSelectValue(value)
	}, [value])


	useEffect(() => {
		window.addEventListener('click', onClickOutsideHandler)

		return (() => {
			window.removeEventListener('click', onClickOutsideHandler)
		})
	}, [isOpen])

	function onClickOutsideHandler(e) {
		if(isOpen && !container.current.contains(e.target)) {
				setIsOpen(false);
		}
	}

	const selectList = items.map((item) => (
		<li
			key={item}
			className="select__list__item"
			onClick={() => {
				setValue(item)
				setIsOpen(false)
			}}
		>
			{item}
		</li>
	))

	return (
		<div className="select-wrapper">
			{label && <label className="select__label">{label}</label>}
			<div className="select" style={style} ref={container}>
				<div className="select__current-item">
					{value?.toString()}
				</div>
				<input type="hidden" name={name} value={value} ref={ref} />
				<Button variant="icon" onClick={() => setIsOpen(!isOpen)}>
					{icon}
				</Button>
				{isOpen && <ul className="select__list">{selectList}</ul>}
			</div>
		</div>
	)
})

Select.displayName = "Select"

Select.propTypes = {
	items: PropTypes.array.isRequired,
	icon: PropTypes.node,
	getSelectValue: PropTypes.func,
	defaultValue: PropTypes.string,
	style: PropTypes.object,
	label: PropTypes.string,
	name: PropTypes.string
}

Select.defaultProps = {
	items: [],
	icon: <ArrowDownIcon />,
	getSelectValue: () => {},
	defaultValue: '',
	label: ''
}

export default Select
