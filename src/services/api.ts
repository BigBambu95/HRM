import axios from 'axios'

export default axios.create({
	// baseURL: 'https://hrmapi2020.herokuapp.com/api/',
	baseURL: 'http://localhost:8080/api',
	responseType: 'json',
})
