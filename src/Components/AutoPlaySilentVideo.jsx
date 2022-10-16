import React, { useEffect, useRef } from 'react'

const AutoPlaySilentVideo = (props) => {
    const videoRef = useRef(undefined);
    useEffect(() => {
        videoRef.current.defaultMuted = true;
    })
    return (
        <video
            className={props.className}
            ref={videoRef}
            loop
            autoPlay
            muted
            playsInline>
            <source src={props.video} type="video/mp4"/>
        </video>
    );
}

export default AutoPlaySilentVideo