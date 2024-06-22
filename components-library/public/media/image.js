import React from "react";

/**
 * Image is a customizable image component for React applications.
 *
 * @component
 * @param {string} src - The src element is the src of the image.
 * @param {integer} width - The initial width of the image.
 * @param {integer} height - The initial height of the image.
 * @param {string} alt - The alt text of the image.
 * @param {string} caption - The caption of the image.
 * @param {integer} quality - The render quality of the image.
 * @param {boolean} priority - The render priority of the image.
 * @param {string} styleCaption - Additional CSS classes for the caption of the image.
 * @param {string} stylePicture - Additional CSS classes for the image.
 * @param {string} styleImage - Additional CSS classes for the whole component.
 * @returns {React.Element} A React Image element with custom properties.
 */

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