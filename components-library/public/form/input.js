import React from 'react';


/**
 * Input is a customizable input component for React applications.
 *
 * @component
 * @param {string} acceptableTypes - The acceptableTypes are the types accepted as file input.
 * @param {string} ariaLabel - The label attribute of the input.
 * @param {boolean} autocomplete - The autocomplete attribute of the input.
 * @param {boolean} checked - The checked attribute of the input.
 * @param {string} id - The id attribute of the input.
 * @param {string} inputStyle - Additional CSS classes for the input component.
 * @param {string} label - The label text of the input label.
 * @param {Date} max - The max date of the date input.
 * @param {Date} min - The min date of the date input.
 * @param {BigInteger} maxLength - The max length of the text input.
 * @param {BigInteger} minLength - The min length of the text input.
 * @param {Date} minMonth - The min month of the date input.
 * @param {boolean} multiple - The multiple attribute is to allow multiple inputs.
 * @param {string} name - The name attribute of the input.
 * @param {Function} onChange - The function to be executed when the input is changed.
 * @param {string} pattern - The pattern attribute is the allowed patterns of email input.
 * @param {string} placeholder - The placeholder of the input.
 * @param {BigInteger} size - The size of the input.
 * @param {BigInteger} step - The step attribute is to specify the available input.
 * @param {string} style - Additional CSS classes for the input.
 * @param {string} title - The title of the input.
 * @param {string} type - The type of the input, with default text.
 * @param {boolean} required - The required attribute of the input.
 * @param {string} role - The role attribute of the input.
 * @param {string} value - The value of the input.
 * @returns {React.Element} A React input element with custom properties.
 */

const Input = ({ 
    acceptableTypes,
    ariaLabel,
    autocomplete,
    checked, 
    id, 
    inputStyle,
    label, 
    max, 
    min,
    maxLength,
    minLength,
    minMonth,
    multiple, 
    name, 
    onChange, 
    pattern, 
    placeholder, 
    size, 
    step, 
    style,
    title, 
    type = "text",
    required,
    role,
    value, 
}) => {
  return (
    <div className={`${inputStyle}`}>
        <label
            aria-labelledby={ariaLabel}
            for={name}
        >
            {label}
        </label>
        <input 
            className={`${style}`}
            type={type}
            value={value}
            title={title}
            aria-label={ariaLabel}
            onChange={onChange}
            name={name} 
            placeholder={placeholder}
            id={id}
            { ...autocomplete ? (aria-autocomplete) : ''} 
            { ...type === 'text' ? ({
                minLength:minLength,
                maxLength:maxLength,
                size:size
            }) : ''}
            { ...type === "checkbox" || type === "radio" ? (checked) : ''}
            { ...type === "password" ? (minLength={minLength}) : ''}
            { ...type === "file" ? (accept={acceptableTypes}) : ''}
            { ...type === "email" ? ({
                size:size,
                multiple:multiple,
                pattern:pattern
            }) : ''}
            { ...type === "date" || type === "datetime-local" || type === "number" || type === "range" || type === "time" || type === "week"  ? ({ 
                min:min, 
                max:max,
                step:step
            }) : ''}
            { ...(type === 'month') ? (min={minMonth}) : ''}
            { ...(type === "tel" || type === "url") ? (pattern={pattern}) : ''}
            aria-roledescription={role} 
            aria-required = { required ? (true) : (false)}
        />
    </div>
  );
};

export default Input;
