import React from 'react'
import PropTypes from 'prop-types'

import Select from '../select'

const Filter = ({ label, items }) => (
	<div className='filter'>
		<span className='filter__label'>{label}</span>
		<Select items={items} />
	</div>
)

Filter.propTypes = {
	label: PropTypes.string.isRequired,
	items: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Filter
