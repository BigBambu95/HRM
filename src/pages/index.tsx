import React, { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

const routes = [
	{
		path: '/vacancies/',
		exact: true,
		component: 'vacancies',
	},
	{
		path: '/vacancies/:id',
		component: 'vacancy',
	},
	{
		path: '/calendar/',
		component: 'calendar',
	},
	{
		path: '/workers/:id?',
		component: 'workers',
	},
	{
		path: '/salary/',
		component: 'salary',
	},
	{
		path: '/documents/',
		component: 'documents',
	},
	{
		path: '/archive/',
		component: 'archive',
	},
	{
		path: '/candidates/',
		component: 'candidates',
	},
]

const Routing = () => {
	return (
		<Switch>
			{routes.map((route) => (
				<Route
					{...route}
					key={route.component}
					component={lazy(() => import(`./${route.component}`))}
				/>
			))}
		</Switch>
	);
};

export default Routing