import React, { ErrorInfo } from 'react'

export interface ErrorBoundaryState {
	hasError: boolean;
}

export default class ErrorBoundary extends React.Component<ANY_MIGRATION_TYPE, ErrorBoundaryState> {
	constructor(props: any) {
		super(props)
		this.state = {
			hasError: false,
		}
	}

	static getDerivedStateFromError() {
		// Обновить состояние с тем, чтобы следующий рендер показал запасной UI.
		return {
			hasError: true,
		}
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		// eslint-disable-next-line no-console
		console.error(error, errorInfo)
	}

	render() {
		const { children } = this.props

		if (this.state.hasError) {
			return <h1>Что-то пошло не так.</h1>
		}

		return children
	}
}
