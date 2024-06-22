import React from "react";


/**
 * Error is a customizable error component for React applications.
 *
 * @component
 * @param {string} message - The message to be displayed from the error.
 * @param {string} name - The name attribute of the error.
 * @param {string} style - Additional CSS classes for the error.
 * @param {string} styleMessage - Additional CSS classes for the error text.
 * @param {string} id - The id attribute of the error.
 * @returns {React.Element} A React error element with custom properties.
 */

const Error = ({message, style, styleMessage, id, name}) => {
    return(
        <div name={name} aria-roledescription="alert" className={`${style}`} id={id}>
            <p className={`${styleMessage}`}>{message}</p>
        </div>
    );
};

export default Error;