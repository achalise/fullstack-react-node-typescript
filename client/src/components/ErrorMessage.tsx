import React from 'react';

export const ErrorMessage: React.FC<ErrorProps> = (props) => {
    return props.message ? <div className="error-message">{props.message}</div> : null;
}

export interface ErrorProps {
    status?: boolean;
    name?: string;
    message?: string;
}