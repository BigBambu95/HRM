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

export default routes
