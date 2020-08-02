import React from 'react'
import Button from '../button'

const ContextMenuItem = ({ onClick, icon, children }) => (
	<span className='context-menu__list__item'>
		<Button onClick={onClick} variant='icon'>
			{icon}
			{children}
		</Button>
	</span>
)

export default ContextMenuItem
