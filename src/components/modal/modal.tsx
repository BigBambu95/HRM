import React, { HTMLAttributes } from 'react'
import classnames from 'classnames'
import { useKeyPress } from 'ahooks'
import { CloseIcon } from '../../svg'
import Button from '../button'

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
	isOpen: boolean;
	onCancel: () => void;
	title?: string;
	width?: number | string;
	submitBtnText?: string;
	onSubmit?: () => void;
}

const Modal: React.FC<ModalProps> = ({
	title = 'Сформировать приказ',
	children,
	width = 600,
	isOpen,
	onSubmit,
	submitBtnText = 'Отправить',
	onCancel,
	className,
}) => {

	useKeyPress('Escape', () => {
		onCancel()
	})

	const styles = {
		maxWidth: width,
	}

	if (!isOpen) return null

	return (
		<div className='modal-window-wrapper'>
			<div className='overlay' onClick={onCancel} />
			<div className={classnames('modal-window', className)} style={styles}>
				<div className='modal-window__header'>
					<h2>{title}</h2>
					<Button
						variant='icon'
						className='modal-window__close-btn'
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

export default Modal
