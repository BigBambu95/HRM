import React from 'react';
import { compose } from "redux";
import { connect } from 'react-redux';

import { getArchiveCandidatesSelector } from '../../selectors/candidates';
import Grid from '../grid';
import CandidateListItem from "../candidate-list-item";


const Candidates = ({ candidates }) => {

    const candidateList = candidates.map(candidate => {
                            return <CandidateListItem item={candidate} />
                         });


    const itemList = candidates.length === 0
                    ? <h4>На данный момент архив кандидатов пуст!</h4>
                    : <Grid columns={4} gap="2em">{candidateList}</Grid>;


    return(
        <section className="candidates">
            {itemList}
        </section>
    )
};

const mapStateToProps = (state) => {
    return {
        candidates: getArchiveCandidatesSelector(state)
    }
};

export default compose(
  connect(mapStateToProps, null)
)(Candidates);