import React from "react";

/**
 * ListItem is a customizable list item component for React applications.
 *
 * @component
 * @param {string} element - The element is the preferred type of list.
 * @param {string} itemStyle - Additional CSS classes for the list item.
 * @param {string} linkStyle - Additional CSS classes for the list link.
 * @param {Object} option - The option is the object of the item.
 * @returns {React.Element} A React list item element with custom properties.
 */

const ListItem = ({element, itemStyle, linkStyle, textStyle, option}) => {
    return(
        <>
            {element === "a" ? 
                (<li aria-roledescription="listitem" className={`${itemStyle}`} aria-label={option.label}>
                    <a aria-roledescription="link" className={`${linkStyle}`} href={option.link} target={option.target}>{option.text}</a>    
                </li>)
                : <></>
            }
            {element === "p" ? 
                (<li aria-roledescription="listitem" className={`${itemStyle}`} aria-label={option.label}>
                    <p className={`${textStyle}`}>{option.text}</p>
                </li>)
                : <></>
            }
        </> 
    );
}

export default ListItem;