import React, { HTMLAttributes } from 'react'
import classnames from 'classnames'
import { useKeyPress } from 'ahooks'
import { CloseIcon } from '../icons'
import Button from '../button'

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
	isOpen?: boolean;
	onCancel?: () => void;
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
		onCancel && onCancel()
	})

	const styles = {
		maxWidth: width,
	}

	const baseClassName = 'modal-window'

	if (!isOpen) return null

	return (
		<div className={`${baseClassName}-wrapper`}>
			<div className="overlay" onClick={onCancel} />
			<div className={classnames(baseClassName, className)} style={styles}>
				<div className={`${baseClassName}__header`}>
					<h2>{title}</h2>
					<Button variant="icon" className={`${baseClassName}__close-btn`} onClick={onCancel}>
						<CloseIcon />
					</Button>
				</div>
				<div className={`${baseClassName}__body`}>{children}</div>
				<div className={`${baseClassName}__footer`}>
					<Button onClick={onSubmit} size="large" variant="solid" font="large">
						{submitBtnText}
					</Button>
					<Button className={`${baseClassName}__cancel-btn`} onClick={onCancel} size="large">
						Отменить
					</Button>
				</div>
			</div>
		</div>
	)
}

export default Modal
