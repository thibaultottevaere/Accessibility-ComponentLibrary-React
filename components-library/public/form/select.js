import React from "react";

/**
 * Select is a customizable select component for React applications.
 *
 * @component
 * @param {Array} options - The options is a list of options to be selected.
 * @param {string} name - The name attribute of the errors component.
 * @param {string} style - Additional CSS classes for the select item.
 * @param {string} labelStyle - Additional CSS classes for the select label.
 * @param {string} selectStyle - Additional CSS classes for the select component.
 * @param {string} label - The label text of the select component.
 * @param {string} id - The id attribute of the select.
 * @param {string} title - The title attribute of the select component.
 * @param {boolean} required - The required attribute of the select component.
 * @param {string} role - The role attribute of the select component.
 * @returns {React.Element} A React select element with custom properties.
 */


const Select = ({options, style, name, id, label, labelStyle, selectStyle, title, required, role}) => {
    return( 
        <div className={`${selectStyle}`}>
            <label
                for={name}
                className={`${labelStyle}`}
                aria-labelledby={name}>
                    {label}
            </label>
            <select 
                className={`${style}`} 
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