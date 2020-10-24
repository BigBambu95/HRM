import React from 'react'
import { withRouter } from 'react-router-dom'
import { VacancyListContainer } from 'modules/vacancies'

const Vacancies = (props) => (
	<section className='vacancies'>
		<VacancyListContainer {...props} />
	</section>
)

export default withRouter(Vacancies)
