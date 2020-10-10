// import React, {Component} from 'react';
// import Camera from 'react-camera'
//
// export default class SectionOnePic extends Component {
//     constructor (props) {
//         super(props);
//         this.takePicture = this.takePicture.bind(this);
//     }
//
//     takePicture() {
//         this.camera.capture()
//             .then(blob => {
//                 this.img.src = URL.createObjectURL(blob);
//                 this.img.onload = () => { URL.revokeObjectURL(this.src) }
//             })
//     }
//
//     render() {
//         return (
//             <div style={style.container}>
//                 <Camera
//                     style={style.preview}
//                     ref={(cam) => { this.camera = cam }}
//                 >
//                     <div
//                         style={style.captureContainer}
//                         onClick={this.takePicture}
//                     >
//                         <button style={style.captureButton}>Press me</button>
//                     </div>
//                 </Camera>
//                 <div style={style.captureImageContainer}>
//                     <img
//                         style={style.captureImage}
//                         ref={(img) => { this.img = img }}
//                     />
//                 </div>
//             </div>
//         )
//     }
// };
//
// const style = {
//     preview: {
//         position: 'relative', width: '50%'
//     },
//
//     captureContainer: {
//         display: 'flex', position: 'absolute',
//         justifyContent: 'center', zIndex: 1,
//         top: 0, width: '50vw'
//     },
//
//     captureButton: {
//         backgroundColor: '#fff', borderRadius: '50%',
//         height: 56, width: 56,
//         color: '#000', margin: 20, zIndex: 2
//     },
//
//     captureImageContainer: {
//         width: '50%', position: 'absolute', top: 0
//     }
// }
//
// import React from "react";
// import Webcam from "react-webcam";
//
// const videoConstraints = {
//     width: '100vw',
//     height: '100vh',
//     facingMode: 'user'
// }
//
// const SectionOnePic = () => {
//     const webcamRef = React.useRef(null);
//
//     const capture = React.useCallback(() => {
//         const imageSrc = webcamRef.current.getScreenshot();
//     }, [webcamRef] );
//
//     return(
//         <>
//             <Webcam
//                 audio={false}
//                 ref={webcamRef}
//                 height={100} width={100}
//                 screenshotFormat="image/jpeg"
//                 videoConstraints={videoConstraints}
//             />
//             <button onClick={capture} style={{position: 'absolute', top: 0, left: 0}}>
//                 <h3>Capture</h3>
//             </button>
//         </>
//     )
// }
//
// export default SectionOnePic;


import React, {Component, useState} from 'react';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import ImagePreview from "../microservices/imagePreview";

import './sectionPic.css'

import PilotHelmet from '../assets/helmet.png';

function SectionOnePic(props) {
    const [dataUri, setDataUri] = useState(null);

    function handleTakePhotoAnimationDone(dataUri){
        console.log("Take Photo")
        setDataUri(dataUri);
    }

    const isFullscreen = true;
    return(
        <div>
            {
                (dataUri) ?
                    <div>
                        <ImagePreview
                            dataUri={dataUri}
                            isFullscreen={true}
                        />
                    </div> :
                    <div className="camera-container">
                        <div className="image-overlay">
                            <img src={PilotHelmet} alt="" style={{width: '350px'}} />
                        </div>
                        <Camera
                            onTakePhotoAnimationDone={handleTakePhotoAnimationDone}
                            style={{border: '2px solid red', width: '100vw'}}
                        >

                        </Camera>
                    </div>
            }
        </div>
    )
}

export default SectionOnePic;
