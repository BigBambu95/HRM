import React, {
	useState, useRef, ForwardRefRenderFunction,
	HTMLAttributes, memo, forwardRef, useEffect
} from 'react'
import classnames from 'classnames'
import { ArrowDownIcon } from '../../svg'
import Button from '../button'
import { useClickAway } from 'ahooks'

export type SelectValue = Record<'name' | '_id', string> | string;

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

const getSelectValue = (value: SelectValue): string => {
	return typeof value === 'object' ? value.name : value
}

const getSelectId = (item: SelectValue) => {
	return typeof item === 'object' ? item._id : item
}

const Select: ForwardRefRenderFunction<HTMLInputElement, SelectProps> = ({
	defaultValue,
	items,
	icon = <ArrowDownIcon />,
	name,
	onChange,
	style,
	className,
	...otherProps
}, ref) => {
	const [isOpen, setIsOpen] = useState(false)
	const [value, setValue] = useState("")
	const container = useRef(null)

	useClickAway(() => {
		setIsOpen(false)
	}, container)

	useEffect(() => {
		defaultValue && setValue(defaultValue)
	}, [defaultValue])

	const chooseItem = (item: SelectValue) => {
		setValue(getSelectValue(item))
		onChange && onChange(item)
		setIsOpen(false)
	}

	const selectList = items?.map((item) => (
		<li
			key={getSelectId(item)}
			className={getSelectItemClass(getSelectValue(item), value)}
			onClick={() => chooseItem(item)}
		>
			{getSelectValue(item)}
		</li>
	))

	return (
		<div className={classnames('select', className)} style={style} ref={container}>
			<div className='select__current-item'>{value}</div>
			{ref && (
				<input
					type='hidden'
					id={name}
					name={name}
					value={value}
					ref={ref}
					{...otherProps}
				/>
			)}
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

Select.displayName = 'Select'

export default memo(forwardRef(Select))
