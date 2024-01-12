import classnames from 'classnames'
import React, { ForwardRefRenderFunction, InputHTMLAttributes, ReactNode } from 'react'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	rightIcon?: ReactNode;
}

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
	{ name, rightIcon, style, className, placeholder, ...props },
	ref
) => {
	return (
		<div className={classnames('input', className)} style={style}>
			<input {...props} ref={ref} type='text' name={name} className='input__field' required />
			{placeholder && <span className='input__placeholder'>{placeholder}</span>}
			{rightIcon && <span className='input__right-icon'>{rightIcon}</span>}
		</div>
	)
}

Input.displayName = 'Input'

export default React.forwardRef(Input)
