import React from "react";

/**
 * Title is a customizable title component for React applications.
 *
 * @component
 * @param {string} element - The element is the preferred tag of the title.
 * @param {string} title - The title is the text of the title.
 * @param {string} label - The label is an label attribute of the title.
 * @param {string} style - Additional CSS classes for the title.
 * @returns {React.Element} A React title element with custom properties.
 */


const Title = ({element, title, style, label}) => {
    return(
        <>
        {element === "h1" ? 
            (<h1 aria-roledescription="heading" aria-label={label} className={style}>{title}</h1>)
            : <></>
        }
        {element === "h2" ?
            (<h2 aria-roledescription="heading" aria-label={label} className={style}>{title}</h2>)
            : <></>
        }
        {element === "h3" ?
            (<h3 aria-roledescription="heading" aria-label={label} className={style}>{title}</h3>)
            : <></>
        }
        {element === "h4" ?
            (<h4 aria-roledescription="heading" aria-label={label} className={style}>{title}</h4>)
            : <></>
        }
        {element === "h5" ?
            (<h5 aria-roledescription="heading" aria-label={label} className={style}>{title}</h5>)
            : <></>
        }
        {element === "h6" ?
            (<h6 aria-roledescription="heading" aria-label={label} className={style}>{title}</h6>)
            : <></>
        }
        </> 
    );
};

export default Title;