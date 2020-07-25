import React from "react";
import PropTypes from "prop-types";

import { documents } from "../actions";
import {compose} from "redux";
import {withData, withHRMService} from "../components/hoc";
import {connect} from "react-redux";
import {Table} from '../components/table';
import {ArrowDownIcon, DownloadIcon, PrinterIcon} from "../svg";
import {ContextMenu} from "../components/context-menu";



const DocumentTableContainer = (props) => {


        const { documentsSort, sort, documents, deleteDocument } = props;

        const classNames = 'document-table__sort-row ' + documentsSort;


        const documentSortButtons = ['Название', 'Дата'];

        const documentSortButtonList = documentSortButtons.map((item, idx) => {
            return(
                <div key={idx}>
                    <button className="sort-btn" onClick={() => sort(item)} >
                        {item} <ArrowDownIcon />
                    </button>
                </div>
            )
        });

        return (
            <Table data={documents} sortButtons={documentSortButtonList}>

                <div>
                    <PrinterIcon />
                </div>
                <div className="download-link">
                    <a href={document.link} target="_blank" rel="noopener noreferrer" download>
                        <DownloadIcon />
                    </a>
                </div>
                <div className="open-link">

                    <a href={document.link} target="_blank" rel="noopener noreferrer">Открыть</a>
                </div>
                <div>
                    <ContextMenu deleteItem={deleteDocument} itemId={document.id} />
                </div>
            </Table>
        )

};

const mapStateToProps = ({ documentList: { documents, error, loading, documentsSort } }) => {
    return { documents, documentsSort, error, loading }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const { hrmService } = ownProps;
    const { documentsRequest, documentsLoaded, documentsError, removeDocument, sortDocuments } = documents;

    return {
        fetchDocuments: () => {
            dispatch(documentsRequest());
            hrmService
                .getDocuments()
                .then(data => dispatch(documentsLoaded(data)))
                .catch(err => dispatch(documentsError(err)));
        },
        deleteDocument: id => dispatch(removeDocument(id)),
        sort: label => dispatch(sortDocuments(label)),
    }
};


DocumentTableContainer.defaultProps = {
    documents: [],
    documentsSort: ''
};

DocumentTableContainer.propTypes = {
    documents: PropTypes.array.isRequired
};

export default compose(
    withHRMService(),
    connect(mapStateToProps, mapDispatchToProps),
    withData('fetchDocuments')
)(DocumentTableContainer);