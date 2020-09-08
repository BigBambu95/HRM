import axios from 'axios'

export default axios.create({
	baseURL: 'https://hrmapi2020.herokuapp.com/api/',
	responseType: 'json',
})
