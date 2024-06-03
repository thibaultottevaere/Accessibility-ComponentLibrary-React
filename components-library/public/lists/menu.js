import React from "react";

const Menu = ({element, itemStyle, linkStyle, listStyle, label, options}) => {
    return(
        <>
            <menu aria-roledescription="list" aria-label={label} className={listStyle}>
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
            </menu>
        </> 
    );
}

export default Menu;