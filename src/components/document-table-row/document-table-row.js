import React from 'react';
import { PrinterIcon } from "../../svg";

const DocumentTableRow = ({ item, deleteDocument }) => {

    const { title, date, link, id } = item;

    const transformDate = (date) => {
        let month = date.split('').splice(0, 3);
        let newDate = [
            month,
            ...date
        ];

        return newDate.join('');
    };




    return(
        <div className="row">
            <div className="title">{title}</div>
            <div className="date">{transformDate(date)}</div>
            <div>
                <PrinterIcon />
            </div>

        </div>
    )
};

export default DocumentTableRow;