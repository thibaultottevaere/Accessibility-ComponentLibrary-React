import React from "react";

const Submit = ({
    onSubmit, 
    value, 
    style
}) => {
    return(
        <input
            className={`${style}`}
            type="submit"
            value={value}
        />
    );
};

export default Submit;