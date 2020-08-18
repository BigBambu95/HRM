import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const List = ({ items, className, renderItem }) => {
	const listClasses = classnames('list', className)

	return (
		<div className={listClasses}>
			{items.map((item) => (
				<div className='list__item' key={item._id}>
					{renderItem(item)}
				</div>
			))}
		</div>
	)
}

List.defaultProps = {
	className: null,
}

List.propTypes = {
	items: PropTypes.array.isRequired,
	renderItem: PropTypes.func.isRequired,
	className: PropTypes.string,
}

export default List
