import React from 'react';

const Video = ({
    src,
    width,
    height,
    style
}) => {
    return (
        <div>
            <video width={width} height={height} src={src} className={style} controls autoplay >
                <source src={src} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
        </div>
    );
}

export default Video;