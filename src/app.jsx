import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './app.css'
import Header from './components/header'
import Sidebar from './components/sidebar'
import {
	Workers,
	Vacancies,
	Calendar,
	Documents,
	Salary,
	Vacancy,
	Archive,
	// Candidates,
} from './components/pages'

const App = () => (
	<div className="HRM-app">
		<Header />
		<Sidebar />
		<main className="content">
			<Switch>
				<Route path="/vacancies/" exact component={Vacancies} />
				<Route path="/vacancies/:id" component={Vacancy} />
				<Route path="/calendar/" component={Calendar} />
				<Route path="/workers/:id?" component={Workers} />
				<Route path="/salary/" component={Salary} />
				<Route path="/documents/" component={Documents} />
				<Route path="/archive/" component={Archive} />
				{/* <Route path="/candidates/" component={Candidates} /> */}
			</Switch>
		</main>
	</div>
)

export default App
