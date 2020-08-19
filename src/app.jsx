import React, { Suspense, lazy } from 'react'
import 'moment-timezone'
import { Switch, Route } from 'react-router-dom'
import './app.css'
import { Spinner, ErrorBoundary } from 'components'
import Header from './components/header'
import Sidebar from './components/sidebar'
import routes from './routes'

const App = () => (
	<div className='HRM-app'>
		<Header />
		<Sidebar />
		<main className='content'>
			<Suspense fallback={<Spinner />}>
				<ErrorBoundary>
					<Switch>
						{routes?.map((route) => (
							<Route
								{...route}
								key={route.component}
								component={lazy(() =>
									import(`components/pages/${route.component}`)
								)}
							/>
						))}
					</Switch>
				</ErrorBoundary>
			</Suspense>
		</main>
	</div>
)

export default App
