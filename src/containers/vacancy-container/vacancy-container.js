import React, {Fragment} from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom';

import {withData, withHRMService} from "../../components/hoc";

import {
    getCandidatesSelector, getFinalCandidatesSelector,
    getInterviewCandidatesSelector,
    getPhoneCandidatesSelector,
    getReviewSummaryCandidatesSelector
} from "../../selectors/candidates";

import {candidates, vacancies} from "../../actions";
import {ContextMenu, ContextMenuItem} from "../../components/context-menu";
import CandidateListItem from "../../components/candidate-list-item";
import {ToolBar, ToolBarGroupItem} from "../../components/tool-bar";
import Button from "../../components/button";
import Grid from '../../components/grid';
import {ArchiveIcon, PencilIcon, RemoveBasketIcon, VacancyIcon } from "../../svg";
import {pushToast} from "../../components/toast";


const CandidateList = (props) => {

    const { items, archiveAllItems, title } = props;

    if(items.length === 0) {
        return null;
    }

    return(
        <div>
            <div className="flex justify-content-between">
                <h4>{title}</h4>
                <ContextMenu iconVariant="horizontal">
                    <ContextMenuItem icon={ <ArchiveIcon width={16} height={16} /> } handleClick={() => archiveAllItems(items)} >Архивировать всех</ContextMenuItem>
                    <ContextMenuItem icon={ <VacancyIcon width={16} height={16} /> } handleClick={() => archiveAllItems(items)} >Добавить резюме</ContextMenuItem>
                </ContextMenu>
            </div>
            <Grid columns={1} gap="2em" style={{ marginTop: '2em' }}>
                {
                    items.map(item => {
                        return <CandidateListItem key={item.id} item={item} {...props} />
                    })
                }
            </Grid>
        </div>
    )
};

const VacancyContainer = (props) => {
    const { candidates, reviewSummaryCandidates, phoneCandidates, interviewCandidates,
        finalCandidates, editCandidate, archiveCandidate, archiveAllCandidates, deleteVacancy
    } = props;

    const candidateLists = (
        <Grid columns={4} gap="2em">
            <CandidateList 
                title="Рассмотрение резюме" 
                items={reviewSummaryCandidates} 
                editItem={editCandidate}        
                archiveItem={archiveCandidate} 
                archiveAllItems={archiveAllCandidates}
            />
            <CandidateList 
                title="Телефонное интервью" 
                items={phoneCandidates} 
                editItem={editCandidate}
                archiveItem={archiveCandidate} 
                archiveAllItems={archiveAllCandidates}
            />
            <CandidateList 
                title="Собеседование" 
                items={interviewCandidates} 
                editItem={editCandidate}
                archiveItem={archiveCandidate} 
                archiveAllItems={archiveAllCandidates}
            />
            <CandidateList 
                title="Кандидаты" 
                items={finalCandidates} 
                editItem={editCandidate}
                archiveItem={archiveCandidate} 
                archiveAllItems={archiveAllCandidates}
            />
        </Grid>
    );

    if(candidates.length === 0) {
        return <h4>На данную вакансию пока нет кандидатов!</h4>;
    }

    return(
        <Fragment>
            <ToolBar>
                <ToolBarGroupItem>
                    <Button variant="outlined" color="purple">Добавить резюме</Button>
                    <Button variant="icon">
                        <PencilIcon />
                    </Button>
                    <Button variant="icon" clickHandler={deleteVacancy}>
                        <RemoveBasketIcon />
                    </Button>
                </ToolBarGroupItem>
            </ToolBar>
            {candidateLists}
        </Fragment>
    )
};



const mapStateToProps = ({  vacancyList: { vacancy, loading, error }}) => {
    return {
        candidates: getCandidatesSelector(vacancy),
        reviewSummaryCandidates: getReviewSummaryCandidatesSelector(vacancy),
        phoneCandidates: getPhoneCandidatesSelector(vacancy),
        interviewCandidates: getInterviewCandidatesSelector(vacancy),
        finalCandidates: getFinalCandidatesSelector(vacancy),
        loading,
        error
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const { vacancyRequest, vacancyLoaded, vacancyError, removeVacancy, archiveCandidate, archiveAllCandidates } = vacancies;
    const { hrmService, match, history } = ownProps;

    return {
        fetchVacancy: () => {
            dispatch(vacancyRequest());
            hrmService
                .getVacancy(match.params.id)
                .then(data => dispatch(vacancyLoaded(data)))
                .catch(err => dispatch(vacancyError(err)));
        },
        deleteVacancy: () => {
            dispatch(removeVacancy(match.params.id));
            history.push('/vacancies/');
        },
        editCandidate: () => dispatch(),
        archiveCandidate: (candidate) => {
            dispatch(archiveCandidate(candidate));
            pushToast('Кандидат перемещен в архив');
        },
        archiveAllCandidates: (items) => dispatch(archiveAllCandidates(items))
    }
};



export default compose(
    withRouter,
    withHRMService(),
    connect(mapStateToProps, mapDispatchToProps),
    withData('fetchVacancy')
)(VacancyContainer);