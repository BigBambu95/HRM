import React from 'react'

const Checkbox = ({ children, otherProps }) => {
	return (
		<label className='checkbox'>
			<input className='checkbox__input' type='checkbox' {...otherProps} />
			<span className='checkbox__el' />
			<span className='checkbox__description'>{children}</span>
		</label>
	)
}

export default Checkbox
