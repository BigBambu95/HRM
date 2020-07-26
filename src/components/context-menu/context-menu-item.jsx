import React from 'react'
import Button from '../button'

const ContextMenuItem = ({ handleClick, icon, children }) => (
	<span className="context-menu__list__item">
		<Button onClick={handleClick} variant="icon">
			{icon}
			{children}
		</Button>
	</span>
)

export default ContextMenuItem
