import React, { useState, useRef } from 'react'
import classnames from 'classnames'
import { useClickAway } from 'ahooks'
import { ContextMenuIcon } from '../../svg'
import Button from '../button'

export interface ContextMenuProps {
	iconVariant?: string;
}

const ContextMenu: React.FC<ContextMenuProps> = ({ iconVariant, children, ...props }) => {
	const [isOpen, setIsOpen] = useState(false)
	const container = useRef(null)

	useClickAway(() => {
		setIsOpen(false)
	}, container)

	return (
		<div className="context-menu" ref={container} {...props}>
			<Button
				variant="icon"
				onClick={() => setIsOpen(!isOpen)}
				className={classnames('context-menu__btn', iconVariant)}
			>
				<ContextMenuIcon />
			</Button>
			{isOpen && <div className="context-menu__list">{children}</div>}
		</div>
	)
}

export default ContextMenu
