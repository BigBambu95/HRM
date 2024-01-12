import React, { HTMLAttributes } from 'react'

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
	columns?: number;
	columnWidth?: string;
	gap?: string;
}

const Grid: React.FC<GridProps> = ({
	columns = 1,
	columnWidth = '1fr',
	gap = '1em',
	children,
	...otherProps
}) => {
	const styles = {
		display: 'grid',
		gridTemplateColumns: `repeat(${columns}, ${columnWidth})`,
		gridGap: gap,
	}

	return (
		<div style={styles} {...otherProps}>
			{children}
		</div>
	)
}

export default Grid
