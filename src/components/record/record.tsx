import React from 'react'
import PropTypes from 'prop-types'

const Record = ({ field, label }) => (
	<div className='record'>
		<span>{label}</span>
		<span>{field}</span>
	</div>
)

Record.propTypes = {
	label: PropTypes.string.isRequired,
	field: PropTypes.string.isRequired,
}

export default Record
