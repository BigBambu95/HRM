import React from 'react';
import { withRouter } from 'react-router-dom';

import {VacansyListContainer} from "../../containers";

const Vacancies = (props) => {
    return(
        <section className="vacancies">
            <VacansyListContainer {...props} />
        </section>
    )
};

export default withRouter(Vacancies);