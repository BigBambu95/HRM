import React, { HTMLAttributes, ReactElement, ReactNode } from 'react'
import classnames from 'classnames'

export interface RowProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
	gutter?: [number, number];
	justify?: 'start' | 'end' | 'center' | 'space-around' | 'space-between';
	align?: 'top' | 'center' | 'bottom';
}

const Row: React.FC<RowProps> = ({
	children,
	gutter = [0, 0],
	justify = 'start',
	align = 'top',
	style,
	className,
	...otherProps
}) => {
	const classNames = classnames(className, 'flex wrap', `justify-${justify}`, `align-${align}`)

	const styles = {
		margin: `0 -${gutter[0] / 2}px`,
		...style,
	}

	return (
		<div
			className={classNames}
			style={styles}
			{...otherProps}>
			{React.Children.map(children, (child) => {
				return React.cloneElement(child as ReactElement, {
					style: {
						padding: `${gutter[1] / 2}px ${gutter[0] / 2}px`,
					},
				})
			})}
		</div>
	)
}

export default Row
