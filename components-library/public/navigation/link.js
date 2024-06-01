import React from "react";

const Link = ({target, text, style, label, link}) => {
    return(
        <>
        {target === "_self" ? 
            (<a aria-roledescription="link" aria-label={label} className={style} href={link}>{text}</a>)
            : <></>
        }
        {target === "_blank" ? 
            (<a aria-roledescription="link" aria-label={label} className={style} href={link}>{text}</a>)
            : <></>
        }
        {target === "_parent" ? 
            (<a aria-roledescription="link" aria-label={label} className={style} href={link}>{text}</a>)
            : <></>
        }
        {target === "_top" ? 
            (<a aria-roledescription="link" aria-label={label} className={style} href={link}>{text}</a>)
            : <></>
        }
        {target === "_unfencedTop" ? 
            (<a aria-roledescription="link" aria-label={label} className={style} href={link}>{text}</a>)
            : <></>
        }
        </>
    );
}   

export default Link;