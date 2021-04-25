import React from 'react'
import PropTypes from 'prop-types'

const TableColumn = ({ data }) => {
	return <div className='table-cell'>{data.title}</div>
}

TableColumn.propTypes = {
	data: PropTypes.object.isRequired,
}

export default TableColumn
