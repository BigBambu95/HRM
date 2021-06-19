import React, { ReactNode } from 'react'
import Button from '../button'

export interface ContextMenuItemProps {
	icon?: ReactNode;
	onClick?: () => void;
}

const ContextMenuItem: React.FC<ContextMenuItemProps> = ({ icon, children, ...otherProps }) => (
	<span className="context-menu__list__item">
		<Button variant="icon" {...otherProps}>
			{icon}
			{children}
		</Button>
	</span>
)

export default ContextMenuItem
