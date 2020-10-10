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

import React from "react";
import Webcam from "react-webcam";

const videoConstraints = {
    width: '100vw',
    height: '100vh',
    facingMode: 'user'
}

const SectionOnePic = () => {
    const webcamRef = React.useRef(null);

    const capture = React.useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
    }, [webcamRef] );

    return(
        <>
            <Webcam
                audio={false}
                ref={webcamRef}
                height={'100%'} width={'100%'}
                screenshotFormat="image/jpeg"
                videoConstraints={videoConstraints}
            />
            <button onClick={capture} style={{position: 'absolute', top: 0, left: 0}}>
                <h3>Capture</h3>
            </button>
        </>
    )
}

export default SectionOnePic;
