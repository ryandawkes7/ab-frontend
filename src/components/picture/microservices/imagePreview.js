import React from "react";
import PropTypes from 'prop-types';
import './imagePreview.css';
import PilotHelmet from "../assets/helmet.png";

export const ImagePreview = ({ dataUri, isFullscreen }) => {
    let classNameFullscreen = isFullscreen ? 'demo-image-preview-fullscreen' : '';

    return (
        <div className={'demo-image-preview' + classNameFullscreen}>
            <div className="image-overlay">
                <img src={PilotHelmet} alt="" style={{width: '300px'}} />
            </div>
            <img src={dataUri} />
        </div>
    )
}

ImagePreview.propTypes = {
    dataUri: PropTypes.string,
    isFullscreen: PropTypes.bool
};

export default ImagePreview;
