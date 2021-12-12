import React from 'react'
import { VacancyListContainer } from '@modules/vacancies'
import { withRouter } from 'react-router-dom'

const Vacancies = (props: ANY_MIGRATION_TYPE) => (
	<section className="vacancies">
		<VacancyListContainer {...props} />
	</section>
)

export default withRouter(Vacancies)
