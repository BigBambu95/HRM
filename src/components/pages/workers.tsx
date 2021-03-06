import React from 'react'
import { withRouter } from 'react-router-dom'

import { WorkerListContainer, WorkerContainer } from '@modules/workers'

const Workers = ({ match }: ANY_MIGRATION_TYPE) => (
	<section className="workers">
		<WorkerListContainer match={match} />
		{match.params.id && <WorkerContainer />}
	</section>
)

export default withRouter(Workers)
