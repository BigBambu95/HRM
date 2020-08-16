import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const ToastView = ({ label }) => (
	<div className='toast'>
		<span>{label}</span>
	</div>
)

export default class Toast extends Component {
	static push(props) {
		this._container = document.getElementById('portal-root')
		this._el = document.createElement('div')
		this._container.appendChild(this._el)
		ReactDOM.render(<ToastView {...props} />, this._el)

		setTimeout(() => {
			this._container.removeChild(this._el)
		}, props.timeout ?? 3000)
	}

	constructor() {
		super()
		this._container = null
		this._el = null
	}

	componentWillUnmount() {
		this._container.removeChild(this._el)
	}
}
