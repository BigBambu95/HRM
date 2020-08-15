import React from 'react'
import PropTypes from 'prop-types'

const TableColumn = ({ data }) => {
	return <th className='table-cell'>{data.title}</th>
}

TableColumn.propTypes = {
	data: PropTypes.object.isRequired,
}

export default TableColumn
