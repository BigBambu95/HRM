import React from 'react';

const CloseIcon = ({ fill='#000', width=24, height=24 }) => {
    return(
        <svg width={width} height={height} viewBox="0 0 15 15" fill={fill}>
            <path fillRule="evenodd" clipRule="evenodd" d="M1.94294 1.94294C2.03352 1.85235 2.18039 1.85235 2.27098 1.94294L13.0571 12.729C13.1476 12.8196 13.1476 12.9665 13.0571 13.0571C12.9665 13.1476 12.8196 13.1476 12.729 13.0571L1.94294 2.27098C1.85235 2.18039 1.85235 2.03352 1.94294 1.94294Z" fill={fill}/>
            <path fillRule="evenodd" clipRule="evenodd" d="M13.0571 1.94294C13.1476 2.03352 13.1476 2.18039 13.0571 2.27098L2.27098 13.0571C2.18039 13.1476 2.03352 13.1476 1.94294 13.0571C1.85235 12.9665 1.85235 12.8196 1.94294 12.729L12.729 1.94294C12.8196 1.85235 12.9665 1.85235 13.0571 1.94294Z" fill={fill}/>
        </svg>
    )
};

export default CloseIcon;