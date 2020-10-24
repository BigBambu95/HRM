import React, { ReactNode } from 'react'
import FormItem from './FormItem'

interface FormProps {
	onSubmit?: () => void;
	children?: ReactNode | ReactNode[];
}

const Form = ({ children, onSubmit }: FormProps) => {
	return <form onSubmit={onSubmit}>{children}</form>
}

Form.Item = FormItem

export default Form
