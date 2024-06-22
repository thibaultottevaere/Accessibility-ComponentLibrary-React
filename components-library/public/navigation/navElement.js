import React from "react";

/**
 * NavElement is a customizable navigation component for React applications.
 *
 * @component
 * @param {string} element - The element is the preferred type of navigation.
 * @param {Object} options - The options are the elements of the navigation.
 * @param {string} itemStyle - Additional CSS classes for the navigation.
 * @param {string} linkStyle - Additional CSS classes for the navigation.
 * @param {string} listStyle - Additional CSS classes for the navigation.
 * @param {string} navStyle - Additional CSS classes for the navigation.
 * @param {string} label - The label is the label attribute of the navigation.
 * @returns {React.Element} A React navigation with custom properties.
 */

const NavElement = ({element, options, itemStyle, linkStyle, listStyle, navStyle, label}) => {
    return(
        <>
            <nav aria-roledescription="navigation" aria-labelledby={label} className={`${navStyle}`}>
                <ul aria-roledescription="list" aria-label={label} className={`${listStyle}`} tabIndex={0}>
                    {element === "a" ? 
                        options.map((option, index)=> {
                            return (
                                <li key={index} aria-roledescription="listitem" className={`${itemStyle}`} aria-label={option.label}>
                                    <a aria-roledescription="link" className={`${linkStyle}`} href={option.link}>{option.text}</a>    
                                </li> 
                            )
                            
                        }) 
                        : <></>
                    }
                    {element === "li" ? 
                        options.map((option, index) => {
                            return(
                                <li key={index} aria-roledescription="listitem" className={`${itemStyle}`} aria-label={option.label}>
                                    <p className={`${textStyle}`}>{option.text}</p>
                                </li>
                            );
                        })
                        : <></>
                    }
                </ul>
            </nav>
        </> 
    );
}

export default NavElement;