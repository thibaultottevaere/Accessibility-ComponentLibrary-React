import React from "react";

const Image = ({
    src,
    width,
    height,
    alt,
    caption,
    quality,
    priority,
    styleCaption,
    stylePicture,
    styleImage
}) => {
    return(
        <div className={styleImage}>
            <Image 
                width={width} 
                height={height} 
                src={src} 
                alt={alt}
                quality={quality}
                className={stylePicture}
                priority={priority}
            />
            <figcaption className={styleCaption}>{caption}</figcaption>
        </div>
    );
}

export default Image;