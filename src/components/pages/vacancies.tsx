import React from 'react'
import { withRouter } from 'react-router-dom'
import { VacancyListContainer } from '@modules/vacancies'

const Vacancies = (props: ANY_MIGRATION_TYPE) => (
	<section className="vacancies">
		<VacancyListContainer {...props} />
	</section>
)

export default withRouter(Vacancies)
