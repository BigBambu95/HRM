/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Button from '../button'
import { CloseIcon } from '../../svg'

const ModalWindow = ({
	title,
	children,
	width,
	isOpen,
	onCancel,
	className,
}) => {
	const handleKeyPress = (event) => {
		if (event.key === 'Escape') {
			onCancel()
		}
	}

	useEffect(() => {
		document.addEventListener('keydown', handleKeyPress, false)

		return function clean() {
			document.removeEventListener('keydown', handleKeyPress, false)
		}
	}, [])

	const clazz = isOpen ? 'modal-window-wrapper active' : 'modal-window-wrapper'

	const modalWindowClass = classNames('modal-window', className)

	const styles = {
		maxWidth: `${width}px`,
	}

	return (
		<div className={clazz}>
			<div className='overlay' onClick={onCancel} />
			<div className={modalWindowClass} style={styles}>
				<div className='modal-window__header'>
					<h2>{title}</h2>
					<Button
						variant='icon'
						classname='modal-window__close-btn'
						onClick={onCancel}
					>
						<CloseIcon />
					</Button>
				</div>
				<div className='modal-window__body'>{children}</div>
			</div>
		</div>
	)
}

ModalWindow.propTypes = {
	title: PropTypes.string,
	children: PropTypes.node,
	width: PropTypes.number,
	isOpen: PropTypes.bool,
	onCancel: PropTypes.func,
}

ModalWindow.defaultProps = {
	title: 'Всплывающее окно',
	isOpen: false,
	onCancel() {},
}

export default ModalWindow
