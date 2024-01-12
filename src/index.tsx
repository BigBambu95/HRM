import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { StoreProvider } from '@app/store/StoreContext'
import App from './app'
import store from './app/store/RootStore'

ReactDOM.render(
	<StoreProvider store={store}>
		<Router>
			<App />
		</Router>
	</StoreProvider>,
	document.getElementById('root')
)
