import React, { Suspense, lazy } from 'react'
import 'moment-timezone'
import { Switch, Route } from 'react-router-dom'
import './app.css'
import { Spinner } from 'components/index'
import Header from './components/header'
import Sidebar from './components/sidebar'

const Vacancies = lazy(() => import('components/pages/vacancies'))
const Workers = lazy(() => import('components/pages/workers'))
const Documents = lazy(() => import('components/pages/documents'))
const Calendar = lazy(() => import('components/pages/calendar'))
const Vacancy = lazy(() => import('components/pages/vacancy'))
const Salary = lazy(() => import('components/pages/salary'))
const Archive = lazy(() => import('components/pages/archive'))

const App = () => (
	<div className='HRM-app'>
		<Header />
		<Sidebar />
		<main className='content'>
			<Suspense fallback={<Spinner />}>
				<Switch>
					<Route path='/vacancies/' exact component={Vacancies} />
					<Route path='/vacancies/:id' component={Vacancy} />
					<Route path='/calendar/' component={Calendar} />
					<Route path='/workers/:id?' component={Workers} />
					<Route path='/salary/' component={Salary} />
					<Route path='/documents/' component={Documents} />
					<Route path='/archive/' component={Archive} />
				</Switch>
			</Suspense>
		</main>
	</div>
)

export default App
