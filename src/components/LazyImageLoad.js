import React, { useState } from 'react';
import './LazyImageLoad.css'

const LazyImageLoad = (props) => {
    const { thumbnail, src } = props
    const [isLoaded, setIsLoaded] = useState(false)
    return (
        <div className='lazy-load-image-wrapper'>
            <img className='image' src={thumbnail} alt='nike'
                style={{ visibility: isLoaded ? "hidden" : "visible" }}
            />
            <img
                onLoad={() => {
                    setIsLoaded(true);
                }}
                className='image'
                style={{ opacity: isLoaded ? 1 : 0 }}
                alt='nike'
                src={src}
            />
        </div>
    )
}

export default LazyImageLoad;