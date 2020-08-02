import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Row = ({ children, gutter = [], justify, align, style }) => {
	const className = classnames(
		'flex wrap',
		`justify-${justify}`,
		`align-${align}`
	)

	const styles = {
		...style,
		margin: `0 -${gutter[0] / 2}px`,
	}

	return (
		<div className={className} style={styles}>
			{React.Children.map(children, (child) => {
				return React.cloneElement(child, {
					style: {
						padding: `${gutter[1] / 2}px ${gutter[0] / 2}px`,
					},
				})
			})}
		</div>
	)
}

Row.propTypes = {
	children: PropTypes.node,
	justify: PropTypes.oneOf([
		'start',
		'end',
		'center',
		'space-around',
		'space-between',
	]),
	align: PropTypes.oneOf(['top', 'center', 'bottom']),
	gutter: PropTypes.array,
	style: PropTypes.object,
}

Row.defaultProps = {
	justify: 'start',
	align: 'top',
	children: null,
}

export default Row
