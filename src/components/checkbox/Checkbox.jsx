import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Checkbox = ({ children, className, name, otherProps }) => {
	const classNames = classnames('checkbox', className)

	return (
		<label className={classNames}>
			<input
				name={name}
				className='checkbox__input'
				type='checkbox'
				{...otherProps}
			/>
			<span className='checkbox__el' />
			{children && <span className='checkbox__description'>{children}</span>}
		</label>
	)
}

Checkbox.propTypes = {
	name: PropTypes.string.isRequired,
	children: PropTypes.node,
	className: PropTypes.string,
}

Checkbox.defaultProps = {
	children: null,
	className: null,
}

export default Checkbox
