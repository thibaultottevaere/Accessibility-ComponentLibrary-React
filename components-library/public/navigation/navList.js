import React from "react";

const NavList = ({ element, text, listStyle, style, link = ' '}) => {
    return(
        <>
            {element === "a" ? (
                <li aria-roledescription="listitem" className={listStyle}>
                    <a aria-roledescription="link" className={style} href={link}>{text}</a>    
                </li>) 
                : <></>
            }
            {element === "li" ? 
                (<li aria-roledescription="listitem" className={listStyle}>
                    {text}
                </li>)
                : <></>
            }
        </>
    );
}

export default NavList;