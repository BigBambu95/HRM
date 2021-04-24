import React from 'react'
import PropTypes from 'prop-types'

const TableCell = ({ render, record }) => <td className='table-cell'>{render(record) || record}</td>

TableCell.propTypes = {
	record: PropTypes.string,
	render: PropTypes.func,
}

TableCell.defaultProps = {
	record: null,
	render: () => {},
}

export default TableCell
