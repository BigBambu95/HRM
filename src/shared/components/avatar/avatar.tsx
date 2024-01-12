import React from 'react'
import classnames from 'classnames'

export interface AvatarProps {
	src: string;
	alt?: string;
	width?: string | number;
	height?: string | number;
	square?: boolean;
	className?: string;
}

const Avatar = ({ src, alt, width, height, square, className }: AvatarProps) => {
	const classNames = classnames('avatar', className, {
		'avatar-square': square,
	})
	return (
		<div className={classNames} style={{ width, height }}>
			<img className="avatar__img" src={src} alt={alt} />
		</div>
	)
}

export default Avatar
