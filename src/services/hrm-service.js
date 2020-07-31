import vacancies from './vacancies';
import workers from './workers';
import documents from './documents.json'
import vacancyTemplates from './vacancy-templates.json'
import offices from './offices.json'


export default class HRMService {

  static getData(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                resolve(data);
            } catch(err) {
                reject(err, 'Не удалось загрузить данные')
            }
        }, 700);
    });
  }

  getWorkers() {
    return this.getData(workers);
  }

  static getVacancies() {
    return HRMService.getData(vacancies)
  }

  static getHotVacancies() {
    const filteredVacancies = vacancies.filter(item => item.quickly)
    return HRMService.getData(filteredVacancies)
  }

  static getVacancy(url) {
    const idx = vacancies.findIndex(item => item.url === url);
    return HRMService.getData(vacancies[idx]);
  }

  getDocuments() {
    return this.getData(documents);
  }

  getWorkersInformationForMonth(month) {
    const data = workers.map(({name, information}) => {
        return {
            name,
            ...information[0][month]
        };
    });
    return this.getData(data);
  }

  getWorker(id) {
    return this.getData(workers[id - 1]);
  }

  getOffices() {
    return this.getData(offices);
  }

}