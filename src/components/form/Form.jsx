import React from 'react'
import FormItem from './FormItem'

const Form = ({ children, onSubmit }) => {
	return <form onSubmit={onSubmit}>{children}</form>
}

Form.Item = FormItem

export default Form
