import React, { useState } from 'react';
import './LazyImageLoad.css'
import { string } from 'prop-types'

const LazyImageLoad = (props) => {
    const { thumbnail, src } = props
    const [isLoaded, setIsLoaded] = useState(false)
    return (
        <div className='lazy-load-image-wrapper'>
            <img className='image thumb' src={thumbnail} alt='nike'
                style={{ visibility: isLoaded ? 'hidden' : 'visible' }}
            />
            <img
                onLoad={() => {
                    setIsLoaded(true);
                }}
                className='image full'
                style={{ opacity: isLoaded ? 1 : 0 }}
                alt='nike'
                src={src}
            />
        </div>
    )
}

LazyImageLoad.propTypes = {
    thumbnail: string,
    src: string,
  };
  
  LazyImageLoad.defaultProps = {
    thumbnail: null,
    src: null,
  };

export default LazyImageLoad;