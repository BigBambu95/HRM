import React, { ForwardRefRenderFunction, InputHTMLAttributes, ReactNode } from 'react'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	rightIcon?: ReactNode;
}

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({
	name, rightIcon, style
}, ref) => {
	return (
		<div className='input' style={style}>
			<input ref={ref} type='text' name={name} className='input__field' />
			<span className='input__right-icon'>{rightIcon}</span>
		</div>
	)
}

Input.displayName = 'Input'

export default React.forwardRef(Input)
