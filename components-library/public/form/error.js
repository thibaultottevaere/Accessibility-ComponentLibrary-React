import React from "react";

const Error = ({message, style, styleMessage}) => {
    return(
        <div className={`${style}`}>
            <p className={`${styleMessage}`}>{message}</p>
        </div>
    );
};

export default Error;