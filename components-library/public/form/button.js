import React from "react";

const Button = ({label, style, type}) => {
    return(
        <button className={`${style}`} type={type}>{label}</button>
    );
}

export default Button;