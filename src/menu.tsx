import React from 'react'
import {
	ArchiveIcon, CalendarIcon, ContactsIcon,
	DocumentsIcon, VacancyIcon, WalletIcon, WorkersIcon
} from '@svg'

const menu = [
	{
		id: 1,
		label: 'Вакансии',
		icon: <VacancyIcon />,
		path: '/vacancies/',
	},
	{
		id: 2,
		label: 'Календарь',
		icon: <CalendarIcon />,
		path: '/calendar/',
	},
	{
		id: 3,
		label: 'Сотрудники',
		icon: <WorkersIcon />,
		path: '/workers/',
	},
	{
		id: 4,
		label: 'Зарплата',
		icon: <WalletIcon />,
		path: '/salary/',
	},
	{
		id: 5,
		label: 'Документы',
		icon: <DocumentsIcon />,
		path: '/documents/',
	},
	{
		id: 6,
		label: 'Aрхив',
		icon: <ArchiveIcon />,
		path: '/archive/',
	},
	{
		id: 7,
		label: 'Кандидаты',
		icon: <ContactsIcon />,
		path: '/candidates/',
	},
]

export default menu