import React, { useState, useRef } from 'react'
import classnames from 'classnames'
import { ContextMenuIcon } from '../../svg'
import { useClickAway } from 'ahooks'
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

	const btnClass = classnames('context-menu__btn', iconVariant)

	// TODO ЗАменить кнопку на кастомную кнопку
	return (
		<div className='context-menu' ref={container} {...props}>
			<Button
				onClick={() => setIsOpen(!isOpen)}
				className={btnClass}
			>
				<ContextMenuIcon />
			</Button>
			{isOpen && (
				<div className='context-menu__list'>
					{children}
				</div>
			)}
		</div>
	)
}

export default ContextMenu