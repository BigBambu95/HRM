import React from 'react'
import PropTypes from 'prop-types'

const FormItem = ({ children, validation, label }) => {
	const errorMessage = (
		<div className='form-item__error'>Заполните обязательное поле</div>
	)

	return (
		<div className='form-item'>
			<div className='form-item__label'>{label}</div>
			{children}
			{validation && errorMessage}
		</div>
	)
}

FormItem.propTypes = {
	children: PropTypes.node.isRequired,
	validation: PropTypes.object.isRequired,
	label: PropTypes.string.isRequired,
}

export default FormItem
