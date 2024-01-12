import React, { FormHTMLAttributes } from 'react'

export interface FormProps extends FormHTMLAttributes<HTMLFormElement> { }

const Form: React.FC<FormProps> = ({ children, ...otherProps }) => {
	return <form {...otherProps}>{children}</form>
}

export default Form
