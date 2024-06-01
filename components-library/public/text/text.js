import React from "react";

const Text = ({element, text, style, id, label}) => {
    return(
        <>
        {element === "p" ? 
            (<p aria-roledescription="paragraph" aria-label={label} id={id} className={style}>{text}</p>)
            : <></>
        }
        {element === "span" ?
            (<span aria-roledescription="span" aria-label={label} id={id} className={style}>{text}</span>)
            : <></>
        }
        {element === "code" ?
            (<code aria-roledescription="code" aria-label={label} id={id} className={style}>{text}</code>)
            : <></>
        }
        {element === "pre" ?
            (<pre aria-roledescription="pre" aria-label={label} id={id} className={style}>{text}</pre>)
            : <></>
        }
        </> 
    );
}

export default Text;