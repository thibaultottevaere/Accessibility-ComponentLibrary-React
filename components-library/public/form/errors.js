import React from "react";

/**
 * Errors is a customizable error list component for React applications.
 *
 * @component
 * @param {Array} errors - The errors is a list of errors to be displayed.
 * @param {string} name - The name attribute of the errors component.
 * @param {string} listStyle - Additional CSS classes for the error list.
 * @param {string} errorStyle - Additional CSS classes for the error text.
 * @param {string} id - The id attribute of the error.
 * @returns {React.Element} A React errors element with custom properties.
 */

const Errors = ({errors, listStyle, errorStyle, id, name}) => {
    return(
        <ul className={`${listStyle}`} id={id} name={name}>
            {errors.map((error, index) => {
                return(
                    <li key={index} aria-roledescription="alert" className={`${errorStyle}`}>{error.message}</li>
                )
            })}
        </ul>
    );
}

export default Errors;