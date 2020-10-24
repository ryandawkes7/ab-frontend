import BackImg from "./assets/back-button.svg";
import React from "react";
import './back.css';
import { useHistory } from 'react-router-dom';

// Back button works by accessing history via React Router
const Back = () => {

    let history = useHistory(); // useHistory component from react-router-dom

    return(
        <div className="back-btn"> {/* Back Button Container */}
            <button
                onClick={() => history.goBack()}
            >
                <img src={BackImg} alt="" />
            </button>
        </div> // End of Back Button Container
    )
}

export default Back;

