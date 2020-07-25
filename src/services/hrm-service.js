import {vacancies} from './vacancies';
import { workers } from './workers';

export default class HRMService {


    documents = [
        {
            id: 1,
            name: 'План работ на февраль 2019',
            date: '01.02.19',
            link: 'https://ufanotarius.ru/tseny.pdf'
        },
        {
            id: 2,
            name: 'Бизнес-план',
            date: '21.05.19',
            link: 'https://docs.google.com/document/d/1yV3ifpzPDBgCLiUuWQ8B26arTLgUWKK6KQI2sjkvAvc/edit'
        },
        {
            id: 3,
            name: 'Договор UI/UX дизайнер',
            date: '01.10.19',
            link: 'https://docs.google.com/document/d/1yV3ifpzPDBgCLiUuWQ8B26arTLgUWKK6KQI2sjkvAvc/edit'
        },
        {
            id: 4,
            name: 'Премии и штрафы декабрь 2018',
            date: '11.01.18',
            link: 'https://docs.google.com/document/d/1yV3ifpzPDBgCLiUuWQ8B26arTLgUWKK6KQI2sjkvAvc/edit'
        },
        {
            id: 5,
            name: 'План работ на ноябрь 2018',
            date: '25.05.18',
            link: 'https://docs.google.com/document/d/1yV3ifpzPDBgCLiUuWQ8B26arTLgUWKK6KQI2sjkvAvc/edit'
        }
    ];


    offices = [
        {
            id: 1,
            name: 'Ростов-на-Дону'
        },
        {
            id: 2,
            name: 'Екатеринбург'
        },
        {
            id: 3,
            name: 'Москва'
        },
        {
            id: 4,
            name: 'Уфа'
        }
    ];


    createPromise = (data) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(data);
            }, 700);
        });
    };



    getWorkers() {
        return this.createPromise(workers);
    };

    getVacancies() {
        return this.createPromise(vacancies);
    }

    getVacancy(url) {
        const idx = vacancies.findIndex(item => item.url === url);
        return this.createPromise(vacancies[idx]);
    }

    getDocuments() {
        return this.createPromise(this.documents);
    }

    getWorkersInformationForMonth(month) {
        const data = workers.map(({name, information}) => {
           return {
               name,
               ...information[0][month]
           };
        });
        return this.createPromise(data);
    }

    getWorker(id) {
        return this.createPromise(workers[id - 1]);
    }

    getOffices() {
        return this.createPromise(this.offices);
    }

};