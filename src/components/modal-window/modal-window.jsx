/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { CloseIcon } from 'svg'
import Button from '../button'

const ModalWindow = ({
	title,
	children,
	width,
	isOpen,
	onSubmit,
	submitBtnText,
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

	const wrapperClassName = classnames('modal-window-wrapper', {
		active: isOpen,
	})

	const modalClassName = classnames('modal-window', className)

	const styles = {
		maxWidth: `${width}px`,
	}

	return (
		<div className={wrapperClassName}>
			<div className='overlay' onClick={onCancel} />
			<div className={modalClassName} style={styles}>
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
				<div className='modal-window__footer'>
					<Button onClick={onSubmit} size='large' variant='solid' font='large'>
						{submitBtnText}
					</Button>
					<Button onClick={onCancel} size='large'>
						Отменить
					</Button>
				</div>
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
	onSubmit: PropTypes.func,
	submitBtnText: PropTypes.string,
}

ModalWindow.defaultProps = {
	title: 'Сформировать приказ',
	isOpen: false,
	children: null,
	submitBtnText: 'Отправить',
}

export default ModalWindow
