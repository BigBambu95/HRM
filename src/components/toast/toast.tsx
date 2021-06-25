import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const ToastView: React.FC<{ label: string }> = ({ label }) => (
	<div className="toast">
		<span>{label}</span>
	</div>
)

// TODO Переписать компонент
export default class Toast extends Component {
	_container: Node | null

	_el: Node | null

	push({ label, timeout }: { label: string, timeout?: number }) {
		this._container = document.getElementById('portal-root')
		this._el = document.createElement('div')
		this._container && this._container.appendChild(this._el)
		ReactDOM.render(<ToastView label={label} />, this._el as Element)

		setTimeout(() => {
			if (this._container && this._el) {
				this._container.removeChild(this._el)
			}
		}, timeout ?? 3000)
	}

	constructor(props?: ANY_MIGRATION_TYPE) {
		super(props)
		this._container = null
		this._el = null
	}

	componentWillUnmount() {
		if (this._container && this._el) {
			this._container.removeChild(this._el)
		}
	}
}
