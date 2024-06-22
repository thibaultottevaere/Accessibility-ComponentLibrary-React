import React from "react";

/**
 * Link is a customizable link component for React applications.
 *
 * @component
 * @param {string} target - The target is the preferred target of the link.
 * @param {string} navLink - The link is the link of the navigation.
 * @param {string} label - The label is the text of the navigation.
 * @param {string} text - The text is the text of the link navigation.
 * @param {string} style - Additional CSS classes for the navigation.
 * @returns {React.Element} A React link with custom properties.
 */

const Link = ({target, style, label, navLink, text}) => {
    return(
        <>
        {target ? 
            (<a aria-roledescription="link" aria-label={label} className={`${style}`} href={navLink} target={target}>{text}</a>)
            : <></>
        }
        </>
    );
}   

export default Link;