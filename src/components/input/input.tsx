import React, { CSSProperties, ReactNode } from 'react'
import PropTypes from 'prop-types'

interface InputProps {
	name: string;
	rightIcon?: ReactNode;
	style?: CSSProperties;
}

const Input = React.forwardRef(({ name, rightIcon = null, style }: InputProps, ref) => {
	return (
		<div className='input' style={style}>
			<input ref={ref as any} type='text' name={name} className='input__field' />
			<span className='input__right-icon'>{rightIcon}</span>
		</div>
	)
})

Input.displayName = 'Input'
export default Input
