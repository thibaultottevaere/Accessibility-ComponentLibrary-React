import React from "react";

const Title = ({element, title, style}) => {
    return(
        <>
        {element === "h1" ? 
            (<h1 aria-roledescription="heading" className={style}>{title}</h1>)
            : <></>
        }
        {element === "h2" ?
            (<h2 aria-roledescription="heading" className={style}>{title}</h2>)
            : <></>
        }
        {element === "h3" ?
            (<h3 aria-roledescription="heading" className={style}>{title}</h3>)
            : <></>
        }
        {element === "h4" ?
            (<h4 aria-roledescription="heading" className={style}>{title}</h4>)
            : <></>
        }
        {element === "h5" ?
            (<h5 aria-roledescription="heading" className={style}>{title}</h5>)
            : <></>
        }
        {element === "h6" ?
            (<h6 aria-roledescription="heading" className={style}>{title}</h6>)
            : <></>
        }
        </> 
    );
};

export default Title;