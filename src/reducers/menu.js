import {ArchiveIcon, CalendarIcon, ContactsIcon, DocumentsIcon, WalletIcon, WorkersIcon, VacancyIcon} from "../svg";
import React from "react";

const menu = (state, action) => {

    if(state === undefined) {
        return {
            items: [
                {
                    id: 1,
                    label: 'Вакансии',
                    icon: <VacancyIcon />,
                    path: '/vacancies/',
                    subLinks: []
                },
                {
                    id: 2,
                    label: 'Календарь',
                    icon: <CalendarIcon />,
                    path: '/calendar/',
                    subLinks: []
                },
                {
                    id: 3,
                    label: 'Сотрудники',
                    icon: <WorkersIcon />,
                    path: '/workers/',
                    subLinks: []
                },
                {
                    id: 4,
                    label: 'Зарплата',
                    icon: <WalletIcon />,
                    path: '/salary/',
                    subLinks: []
                },
                {
                    id: 5,
                    label: 'Документы',
                    icon: <DocumentsIcon />,
                    path: '/documents/',
                    subLinks: []
                },
                {
                    id: 6,
                    label: 'Aрхив',
                    icon: <ArchiveIcon />,
                    path: '/archive/',
                    sublinks: []
                },
                {
                    id: 7,
                    label: 'Кандидаты',
                    icon: <ContactsIcon />,
                    path: '/candidates/',
                    subLinks: []
                }
            ],
        }
    }

    switch (action.type) {

        case 'FETCH_HOT_VACANCIES_REQUEST':
            return state;

        case 'FETCH_HOT_VACANCIES_SUCCESS':

            const vacansy = state.items.find(item => item.id === 1);
            const vacansyIdx = state.items.findIndex(item => item.id === 1);
            const hotVacancies = action.payload.filter(vacansy => vacansy.quickly);


            const newVacansy = {
                ...vacansy,
                subLinks: hotVacancies
            };

            const newItems = [
                ...state.items.slice(0, vacansyIdx),
                newVacansy,
                ...state.items.slice(vacansyIdx + 1)
            ];

            return {
                items: newItems
            };

        case 'FETCH_HOT_VACANCIES_FAILURE':
            return state;

        default:
            return state;
    }


};

export default menu