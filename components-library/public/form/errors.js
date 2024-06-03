import React from "react";

const Errors = ({errors, listStyle, errorStyle, id}) => {
    return(
        <ul className={`${listStyle}`} id={id}>
            {errors.map((error, index) => {
                return(
                    <li key={index} aria-roledescription="alert" className={`${errorStyle}`}>{error.message}</li>
                )
            })}
        </ul>
    );
}

export default Errors;