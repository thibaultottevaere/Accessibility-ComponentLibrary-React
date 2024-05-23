import React from 'react';

const Input = ({ 
    acceptableTypes,
    ariaLabel,
    autocomplete,
    checked, 
    id, 
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
    <div className='w-full flex justify-between'>
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
