import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { ContextMenuIcon } from '../../svg'
import ContextMenuItem from './context-menu-item'

const ContextMenu = ({ iconVariant, children, ...props }) => {
	const [isOpen, setIsOpen] = useState(false)
	const container = useRef(null)

	const onClickOutsideHandler = (e) => {
		if (isOpen && !container.current.contains(e.target)) {
			setIsOpen(false)
		}
	}

	useEffect(() => {
		window.addEventListener('click', onClickOutsideHandler)

		return () => {
			window.removeEventListener('click', onClickOutsideHandler)
		}
	}, [isOpen])

	const btnClass = classnames('context-menu__btn', iconVariant)

	// TODO ЗАменить кнопку на кастомную кнопку
	return (
		<div className='context-menu' ref={container} {...props}>
			<button
				type='button'
				onClick={() => setIsOpen(!isOpen)}
				className={btnClass}
			>
				<ContextMenuIcon />
			</button>
			{isOpen && (
				<div className='context-menu__list'>
					{React.Children.map(children, (child) => {
						return React.cloneElement(child)
					})}
				</div>
			)}
		</div>
	)
}

ContextMenu.propTypes = {
	iconVariant: PropTypes.string,
	children: PropTypes.node,
}

ContextMenu.defaultProps = {
	iconVariant: '',
	children: null,
}

ContextMenu.Item = ContextMenuItem

export default ContextMenu
