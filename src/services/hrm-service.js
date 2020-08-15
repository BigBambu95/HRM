import workers from './workers'
import documents from './documents.json'

export default class HRMService {
	static getData(data) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				try {
					resolve(data)
				} catch (err) {
					reject(err, 'Не удалось загрузить данные')
				}
			}, 700)
		})
	}

	static getDocuments() {
		return this.getData(documents)
	}

	getWorkersInformationForMonth(month) {
		const data = workers.map(({ name, information }) => {
			return {
				name,
				...information[0][month],
			}
		})
		return this.getData(data)
	}
}
