import React from "react";

const Image = ({
    src,
    width,
    height,
    alt,
    caption,
    styleCaption,
    styleImage
}) => {
    return(
        <div className={styleImage}>
            <Image width={width} height={height} src={src} alt={alt}/>
            <figcaption className={styleCaption}>{caption}</figcaption>
        </div>
    );
}

export default Image;