import React from 'react'
import { handleActions } from 'redux-actions'
import { ArchiveIcon, CalendarIcon, ContactsIcon, DocumentsIcon, WalletIcon, WorkersIcon, VacancyIcon } from '../svg'

const initialState = {
	items: [
		{
			id: 1,
			label: 'Вакансии',
			icon: <VacancyIcon />,
			path: '/vacancies/',
			subLinks: [],
		},
		{
			id: 2,
			label: 'Календарь',
			icon: <CalendarIcon />,
			path: '/calendar/',
			subLinks: [],
		},
		{
			id: 3,
			label: 'Сотрудники',
			icon: <WorkersIcon />,
			path: '/workers/',
			subLinks: [],
		},
		{
			id: 4,
			label: 'Зарплата',
			icon: <WalletIcon />,
			path: '/salary/',
			subLinks: [],
		},
		{
			id: 5,
			label: 'Документы',
			icon: <DocumentsIcon />,
			path: '/documents/',
			subLinks: [],
		},
		{
			id: 6,
			label: 'Aрхив',
			icon: <ArchiveIcon />,
			path: '/archive/',
			sublinks: [],
		},
		{
			id: 7,
			label: 'Кандидаты',
			icon: <ContactsIcon />,
			path: '/candidates/',
			subLinks: [],
		},
	],
}

const menu = handleActions(
	{
		FETCH_HOT_VACANCIES_REQUEST: (state) => ({
			...state,
		}),
		FETCH_HOT_VACANCIES_SUCCESS: (state, { vacancies }) => {
			const vacancy = state.items.find((item) => item.id === 1)
			const vacancyIdx = state.items.findIndex((item) => item.id === 1)

			const newItems = [
				...state.items.slice(0, vacancyIdx),
				{
					...vacancy,
					subLinks: vacancies,
				},
				...state.items.slice(vacancyIdx + 1),
			]

			return {
				items: newItems,
			}
		},
	},
	initialState
)

export default menu
