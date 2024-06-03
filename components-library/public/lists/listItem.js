import React from "react";

const ListItem = ({element, itemStyle, linkStyle, option}) => {
    return(
        <>
            {element === "a" ? 
                (<li key={index} tabIndex={index + 1} aria-roledescription="listitem" className={itemStyle} aria-label={option.label}>
                    <a aria-roledescription="link" className={linkStyle} href={option.link}>{option.text}</a>    
                </li>)
                : <></>
            }
            {element === "p" ? 
                (<li key={index} tabIndex={index + 1} aria-roledescription="listitem" className={itemStyle} aria-label={option.label}>
                    <p>{option.text}</p>
                </li>)
                : <></>
            }
        </> 
    );
}

export default ListItem;