import React from 'react';

/**
 * Video is a customizable video component for React applications.
 *
 * @component
 * @param {string} src - The src element is the src of the video.
 * @param {string} posterSrc - The poster src element is the src of the poster when downloading the video.
 * @param {integer} width - The initial width of the video.
 * @param {integer} height - The initial height of the video.
 * @param {string} label - The aria label text of the video.
 * @param {string} style - Additional CSS classes for the whole component.
 * @returns {React.Element} A React Video element with custom properties.
 */

const Video = ({
    src,
    width,
    height,
    style,
    label,
    posterSrc
}) => {
    return (
        <div>
            <video width={width} height={height} src={src} className={style} controls autoplay aria-label={label} poster={posterSrc}>
                <source src={src} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
        </div>
    );
}

export default Video;