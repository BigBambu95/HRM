import React from 'react'
import Button from '../button'
import { CloseIcon } from '../../svg'

export const Toast = ({ children }) => {
	return (
		<div className='toast'>
			<span>{children}</span>
			<Button variant='icon'>
				<CloseIcon width={16} height={16} fill='#a3a3a3' />
			</Button>
		</div>
	)
}
