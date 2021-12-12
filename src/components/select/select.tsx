import React, { useState, useRef, ForwardRefRenderFunction, HTMLAttributes, forwardRef, useEffect } from 'react'
import classnames from 'classnames'
import { useClickAway } from 'ahooks'
import { v4 as uuidv4 } from 'uuid'
import { ArrowDownIcon } from '../../svg'
import Button from '../button'

export type SelectValue = {
	id: React.Key,
	label?: string,
	value: string,
}

export interface SelectProps extends Omit<HTMLAttributes<HTMLInputElement>, 'onChange'> {
	items: Array<SelectValue>;
	onChange?: (value: SelectValue) => void;
	icon?: React.ReactNode;
	defaultValue?: string;
	name?: string;
}

const getSelectItemClass = (item: string, currentItem: string) => {
	return classnames('select__item', {
		select__item_active: item === currentItem,
	})
}

const Select: ForwardRefRenderFunction<HTMLInputElement, SelectProps> = (
	{ defaultValue, items, icon = <ArrowDownIcon />, name, onChange, style, className, ...otherProps },
	ref
) => {
	const [isOpen, setIsOpen] = useState(false)
	const [value, setValue] = useState('')
	const container = useRef(null)

	useClickAway(() => {
		setIsOpen(false)
	}, container)

	useEffect(() => {
		defaultValue && setValue(defaultValue)
	}, [defaultValue])

	const chooseItem = (item: SelectValue) => {
		setValue(item.value)
		onChange?.(item)
		setIsOpen(false)
	}

	const selectList = items?.map((item) => (
		<li key={item.id} className={getSelectItemClass(item.value, value)} onClick={() => chooseItem(item)}>
			{item.label || item.value}
		</li>
	))

	return (
		<div className={classnames('select', className)} style={style} ref={container}>
			<div className="select__current-item">{value}</div>
			{ref && <input type="hidden" id={name} name={name} value={value} ref={ref} {...otherProps} />}
			<Button variant="icon" onClick={() => setIsOpen(!isOpen)}>
				{icon}
			</Button>
			{isOpen && (
				<ul className="select__list">
					{selectList}
					{defaultValue && (
						<li
							className={getSelectItemClass(defaultValue, value)}
							onClick={() => chooseItem({ id: uuidv4(), value: defaultValue })}
						>
							{defaultValue}
						</li>
					)}
				</ul>
			)}
		</div>
	)
}

Select.displayName = 'Select'

export default forwardRef(Select)
