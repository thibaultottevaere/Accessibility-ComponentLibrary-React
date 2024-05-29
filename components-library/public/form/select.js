import React from "react";

const Select = ({options, style, name, id, label, labelStyle, title, required, role}) => {
    return( 
        <div>
            <label
                for={name}
                className={labelStyle}
                aria-labelledby={name}>
                    {label}
            </label>
            <select 
                className={style} 
                aria-label={name} 
                id={id} 
                name={name}
                title={title}
                aria-roledescription={role} 
                aria-required = { required ? (true) : (false)}
            >
                {options ? options.map(option => {
                    return(
                        <option key={option} value={option}>{option}</option>
                    );
                }) : <></>}
            </select>
        </div>
    );
};

export default Select;