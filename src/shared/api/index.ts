import axios from 'axios'

const HEROKU_URL = 'https://hrmapi2020.herokuapp.com'
const LOCALE_URl = 'http://localhost:8080'
export const BASE_URL = LOCALE_URl

const updateDataId = (data: Array<Record<'_id', string>>) => {
	return data.map((item) => {
		return {
			...item,
			id: item._id,
		}
	})
}

export default axios.create({
	baseURL: `${BASE_URL}/api`,
	responseType: 'json',
	transformResponse: (data: Array<Record<'_id', string>> | Record<'_id', string>) => {
		return Array.isArray(data) ? updateDataId(data) : { ...data, id: data._id }
	},
	timeout: 1000,
})
