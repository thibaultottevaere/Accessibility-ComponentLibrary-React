import React from "react";

/**
 * NavList is a customizable navigation list component for React applications.
 *
 * @component
 * @param {string} element - The element is the preferred type of list.
 * @param {Object} list - The list is an object with all items of the list.
 * @param {string} name - The name is an attribute of the list.
 * @param {string} linkStyle - Additional CSS classes for the list link.
 * @param {string} listStyle - Additional CSS classes for the list component.
 * @param {string} textStyle - Additional CSS classes for the list component.
 * @returns {React.Element} A React navlist element with custom properties.
 */

const NavList = ({ element, listStyle, linkStyle, textStyle, list, name}) => {
    return(
        <>
            {element === "a" ? (
                <li aria-roledescription="listitem" className={`${listStyle}`} name={name}>
                    <a aria-roledescription="link" className={`${linkStyle}`} href={list.link} target={list.target}>{list.text}</a>    
                </li>) 
                : <></>
            }
            {element === "li" ? 
                (<li aria-roledescription="listitem" className={`${listStyle}`} name={name}>
                   <p className={`${textStyle}`}>{list.text}</p>
                </li>)
                : <></>
            }
        </>
    );
}

export default NavList;