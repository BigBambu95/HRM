import React from 'react'

export default class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props)
		this.state = { hasError: false }
	}

	static getDerivedStateFromError() {
		// Обновить состояние с тем, чтобы следующий рендер показал запасной UI.
		return { hasError: true }
	}

	componentDidCatch(error, errorInfo) {
		console.error(error, errorInfo)
	}

	render() {
		const { hasError } = this.state
		const { children } = this.props

		if (hasError) {
			return <h1>Что-то пошло не так.</h1>
		}

		return children
	}
}
