import React from "react";

const Errors = ({errors, listStyle, errorStyle}) => {
    return(
        <ul className={`${listStyle}`}>
            {errors.map((error) => {
                return(
                    <li className={`${errorStyle}`}>{error.message}</li>
                )
            })}
        </ul>
    );
}

export default Errors;