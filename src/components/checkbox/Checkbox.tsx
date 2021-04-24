import React, { HTMLAttributes } from 'react'
import classnames from 'classnames'

export interface CheckboxProps extends HTMLAttributes<HTMLInputElement> {
	name?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ children, className, name, ...otherProps }) => {
	return (
		<label className={classnames('checkbox', className)}>
			<input name={name} className='checkbox__input' type='checkbox' {...otherProps} />
			<span className='checkbox__el' />
			{children && <span className='checkbox__description'>{children}</span>}
		</label>
	)
}

export default Checkbox
