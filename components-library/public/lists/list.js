import React from "react";

/**
 * List is a customizable list component for React applications.
 *
 * @component
 * @param {string} element - The element is the preferred type of list.
 * @param {string} itemStyle - Additional CSS classes for the list item.
 * @param {string} linkStyle - Additional CSS classes for the list link.
 * @param {string} listStyle - Additional CSS classes for the list component.
 * @param {string} label - The label is the label attribute of the list.
 * @param {Array} options - The options is the list of options.
 * @returns {React.Element} A React list element with custom properties.
 */

const List = ({element, itemStyle, linkStyle, listStyle, label, options}) => {
    return(
        <>
            <ul aria-roledescription="list" aria-label={label} className={`${listStyle}`}>
                {element === "a" ? 
                    options.map((option, index)=> {
                        return (
                            <li key={index} tabIndex={index + 1} aria-roledescription="listitem" className={itemStyle} aria-label={option.label}>
                                <a aria-roledescription="link" className={linkStyle} href={option.link}>{option.text}</a>    
                            </li> 
                        )
                        
                    }) 
                    : <></>
                }
                {element === "li" ? 
                    options.map((option, index) => {
                        return(
                            <li key={index} tabIndex={index + 1} aria-roledescription="listitem" className={itemStyle} aria-label={option.label}>
                                <p>{option.text}</p>
                            </li>
                        );
                    })
                    : <></>
                }
            </ul>
        </> 
    );
}

export default List;