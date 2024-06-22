import React from "react";

/**
 * Submit is a customizable select component for React applications.
 *
 * @component
 * @param {Function} onSubmit - The function to be executed when the button is submitted.
 * @param {string} value - The value of the submit component.
 * @param {string} style - Additional CSS classes for the submit component.
 * @returns {React.Element} A React submit element with custom properties.
 */

const Submit = ({
    onSubmit, 
    value, 
    style
}) => {
    return(
        <input
            className={`${style}`}
            aria-roledescription="submit"
            type="submit"
            value={value}
            onSubmit={onSubmit}
        />
    );
};

export default Submit;