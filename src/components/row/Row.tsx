import React, { CSSProperties, ReactNode } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

interface RowProps {
	children?: ReactNode | ReactNode[];
	justify?: 'start' | 'end' | 'center' | 'space-around' | 'space-between';
	align?: 'top' | 'center' | 'bottom';
	gutter?: number[];
	style?: CSSProperties;
}


const Row = ({ children = null, gutter = [], justify = 'start', align = 'top', style }: RowProps) => {
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
			{React.Children.map(children, (child: any) => {
				return React.cloneElement(child, {
					style: {
						padding: `${gutter[1] / 2}px ${gutter[0] / 2}px`,
					},
				})
			})}
		</div>
	)
}

export default Row
