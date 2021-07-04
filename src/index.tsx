import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import { StoreProvider } from '@store/StoreContext'
import App from './app'
import store from './store/RootStore'

ReactDOM.render(
	<StoreProvider store={store}>
		<Router>
			<App />
		</Router>
	</StoreProvider>,
	document.getElementById('root')
)
