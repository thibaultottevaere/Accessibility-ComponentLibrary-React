import React from "react";

const Error = ({message, style, styleMessage, id}) => {
    return(
        <div aria-roledescription="alert" className={`${style}`} id={id}>
            <p className={`${styleMessage}`}>{message}</p>
        </div>
    );
};

export default Error;