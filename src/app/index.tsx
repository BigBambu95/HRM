import React, { Suspense } from 'react'
import 'moment-timezone'
import './index.css'
import { Spinner, ErrorBoundary } from '@shared/components'
import Routing from '@pages'
import Header from '@shared/components/header'
import Sidebar from '@shared/components/sidebar'
import { BrowserRouter } from 'react-router-dom'

const App = () => (
	<div className='HRM-app'>
		<Header />
		<Sidebar />
		<main className='content'>
			<BrowserRouter>
				<Suspense fallback={<Spinner />}>
					<ErrorBoundary>
						<Routing />
					</ErrorBoundary>	
				</Suspense>
			</BrowserRouter>
		</main>
	</div>
)

export default App
