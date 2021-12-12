import React, { ReactNode } from 'react'
import Button from '../button'

export interface ContextMenuItemProps {
	icon?: ReactNode;
	onClick?: () => void;
	onInnerClick?: () => void;
}

const ContextMenuItem: React.FC<ContextMenuItemProps> = ({ icon, children, onInnerClick, ...otherProps }) => (
	<span
		role="menuitem"
		className="context-menu__list__item"
		onClick={onInnerClick}
	>
		<Button
			variant="icon"
			{...otherProps}>
			{icon}
			{children}
		</Button>
	</span>
)

export default ContextMenuItem
