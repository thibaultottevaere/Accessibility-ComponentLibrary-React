"use client"
import {React, useState } from "react";

/**
 * Button is a customizable button component for React applications.
 *
 * @component
 * @param {Function} handleClick - The function to be executed when the button is clicked.
 * @param {string} text - The text to be displayed inside the button.
 * @param {string} style - Additional CSS classes for the button.
 * @param {string} type - The type of the button (e.g., "button", "submit").
 * @param {boolean} disabled - If true, the button will be disabled.
 * @param {string} name - The name attribute of the button.
 * @returns {React.Element} A React button element with custom properties.
 */

const Button = ({text, style, type, disabled, name, handleClick}) => {

    const [isHovered, setIsHovered] = useState(false);
    return(
        <button 
            className={`${style}`} 
            name={name}
            type={type} 
            disabled={disabled || text === "Loading..."}
            onClick={handleClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {text ? <span>{text}</span> : "No text given"}
        </button>
        
    );
}

export default Button;