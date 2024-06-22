import React from "react";

/**
 * Text is a customizable text component for React applications.
 *
 * @component
 * @param {string} element - The element is the preferred type of text.
 * @param {string} text - The text is the text of the component.
 * @param {string} id - The id is an id of the text.
 * @param {string} label - The label is an label attribute of the text.
 * @param {string} style - Additional CSS classes for the text.
 * @returns {React.Element} A React text element with custom properties.
 */

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