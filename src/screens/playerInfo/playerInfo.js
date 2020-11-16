// import React, {Component, useContext} from 'react';
// import { useHistory } from "react-router-dom";
// import UserContext from "../../context/UserContext";
// import { Link } from 'react-router-dom';
// import { withRouter } from "react-router-dom";
// import Axios from "axios";
// import ErrorHandling from "../../components/errorHandling/errorHandling";
// import './playerInfo.css';
//
// import Settings from '../../images/settings-icon.svg';
// import Back from "../../components/backButton/back"; import NextButton from '../../images/next-button.svg';
//
// {/*class PlayerInfo extends Component {*/}
//
// //     state = {
// //         displayName: '',
// //         email: '',
// //         error: '',
// //     }
// //
// {/*    history = () => {*/}
// {/*        const { history } = this.props;*/}
// {/*        if(history) history.push('/')*/}
// {/*    }*/}
//
// {/*    render () {*/}
//
// {/*     const { userData } = useContext(UserContext);*/}
// {/*     const { history } = this.props;*/}
//
// {/*        return (*/}
// //             <div className="container p-info-container"> {/* Page Container */}
// //                 {/* Back Button */}
// //                 <div className="back-button">
// {/*                    <Back className="back-button"/>*/}
// {/*                </div>*/}
//
// {/*                /!* Body Container *!/*/}
// //                 <div className="player-inner-container">
// //
// //                     {/* Title Section  */}
// //                     <div className="p-i-title-container">
// //                         Player Settings
// //                     </div>
// //
// //                     <form
// {/*                        className="p-i-form"*/}
// {/*                    >*/}
//
// {/*                        /!* Username Section *!/*/}
// {/*                        <div className="p-i-name-container">*/}
//
// {/*                            /!* Name Label *!/*/}
// {/*                            <label htmlFor="name-input">*/}
// {/*                                Name <span>*</span>*/}
// {/*                            </label>*/}
//
// //                             {/* Name Input */}
// //                             <input
// //                                 type="text"
// //                                 name="userName"
// {/*                                placeholder="Type your name here"*/}
// {/*                                required*/}
// {/*                            />*/}
//
// {/*                        </div>*/}
//
// {/*                        /!* Email Section *!/*/}
// {/*                        <div className="p-i-email-container">*/}
//
// //                             {/* Email Description */}
// //                             <div className="p-i-description-container">
// //                                 Enter your email address to stay in the loop with Aerospace Bristol, receive your final score certificate, and be in with a chance to win prizes
// {/*                            </div>*/}
//
// {/*                            /!* Welcome Label *!/*/}
// {/*                            <div className="p-i-label-container">*/}
// //                                 <label htmlFor="email-input">
// //                                     E-mail
// //                                 </label>
// //                             </div>
// //
// {/*                            /!* Email Input Container *!/*/}
// {/*                            <div className="p-i-input-container">*/}
// {/*                                <input*/}
// //                                     type="email"
// //                                     name="userEmail"
// //                                     placeholder="Type your email here"
// //                                 />
// //
// //                                 {/* Info Button */}
// {/*                                <div className="p-i-button-container">*/}
// {/*                                    <button>*/}
// {/*                                        <h3>i</h3>*/}
// {/*                                    </button>*/}
// {/*                                </div>*/}
// {/*                            </div>*/}
// //
// //                             {/* Skip Info Section */}
// //                             <div className="p-i-skip-container">
// {/*                                or just dive right in!*/}
// //                             </div>
// //                         </div>
// //
// //                     </form>
// //
// //                     {/* Accessibility Settings */}
// //                     <div className="p-i-accessibility-container">
// //
// //                         {/* Description Section */}
// //                         <div className="p-i-a-description">
// //                             Adjust font size, sound and turn on voiceover support in accessibility settings.
// //                         </div>
// //
// //                         {/* Accessibility Button */}
// //                         <div className="p-i-a-button-container">
// //                             <Link to="/accessibility" className="p-i-a-button">
// //                                 <div className="p-i-a-b-image">
// //                                     <img src={Settings} alt="Accessibility Settings"/>
// //                                 </div>
// //                                 <div className="p-i-a-b-title">
// //                                     Accessibility Settings
// //                                 </div>
// //                             </Link>
// //                         </div>
// //
// //                     </div>
// //
// //                 </div>
// //
// //                 {/* Next Button */}
// //                 <div className="next-button-container">
// //                     <Link to="/character" className="next-button">
// //                         <img src={NextButton} alt=""/>
// //                     </Link>
// //                 </div>
// //             </div>
// //         );
// //     }
// // }
//
// // export default withRouter(PlayerInfo);

import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";
import Axios from "axios";
import ErrorHandling from "../../components/errorHandling/errorHandling";
import { Link } from "react-router-dom";
import './playerInfo.css';
import Settings from '../../images/settings-icon.svg';
import Back from "../../components/backButton/back"; import NextButton from '../../images/next-button.svg';

export default function PlayerInfo() {

    const [displayName, setDisplayName] = useState();
    const [email, setEmail] = useState();
    const [error, setError] = useState();
    const { setUserData } = useContext(UserContext);
    const history = useHistory();

    const submit = async (e) => {
        e.preventDefault();

        try{

            const newUser = {displayName, email};
            await Axios.post("http://localhost:8080/users/register", newUser);

            const loginRes = await Axios.post("http://localhost:8080/users/register", {
                displayName,
                email
            });
            setUserData({
                token: loginRes.data.token,
                user: loginRes.data.user
            })

            localStorage.setItem("auth-token", loginRes.data.token)

            history.push("/character")

        } catch(err) {
            err.response.data.msg && setError(err.response.data.msg)
        }
    }

    console.log("Display Name: " + displayName + ", Email: " + email)

    return (
        <div className="container p-info-container"> {/* Page Container */}
            {/* Back Button */}
            <div className="back-button">
                <Back className="back-button"/>
            </div>

            {/* Body Container */}
            <div className="player-inner-container">

                { error &&
                    <ErrorHandling
                        message={ error }
                        clearError={() => setError(undefined)}
                    />
                }

                {/* Title Section  */}
                <div className="p-i-title-container">
                    Player Settings
                </div>

                <form
                    className="p-i-form"
                    onSubmit={submit}
                >

                    {/* Username Section */}
                    <div className="p-i-name-container">

                        {/* Name Label */}
                        <label htmlFor="name-input">
                            Name <span>*</span>
                        </label>

                        {/* Name Input */}
                        <input
                            type="text"
                            name="userName"
                            placeholder="Type your name here"
                            onChange={(e) => setDisplayName(e.target.value)}
                            required
                        />

                    </div>

                    {/* Email Section */}
                    <div className="p-i-email-container">

                        {/* Email Description */}
                        <div className="p-i-description-container">
                            Enter your email address to stay in the loop with Aerospace Bristol, receive your final score certificate, and be in with a chance to win prizes
                        </div>

                        {/* Welcome Label */}
                        <div className="p-i-label-container">
                            <label htmlFor="email-input">
                                E-mail
                            </label>
                        </div>

                        {/* Email Input Container */}
                        <div className="p-i-input-container">
                            <input
                                type="email"
                                name="userEmail"
                                placeholder="Type your email here"
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            {/* Info Button */}
                            <div className="p-i-button-container">
                                <button>
                                    <h3>i</h3>
                                </button>
                            </div>
                        </div>
                    <input type="Submit" value="Register" onClick={() => console.log("Pressed")}/>

                        {/* Skip Info Section */}
                        <div className="p-i-skip-container">
                            or just dive right in!
                        </div>
                    </div>
                </form>

                {/* Accessibility Settings */}
                <div className="p-i-accessibility-container">

                    {/* Description Section */}
                    <div className="p-i-a-description">
                        Adjust font size, sound and turn on voiceover support in accessibility settings.
                    </div>

                    {/* Accessibility Button */}
                    <div className="p-i-a-button-container">
                        <Link to="/accessibility" className="p-i-a-button">
                            <div className="p-i-a-b-image">
                                <img src={Settings} alt="Accessibility Settings"/>
                            </div>
                            <div className="p-i-a-b-title">
                                Accessibility Settings
                            </div>
                        </Link>
                    </div>

                </div>

            </div>

            {/* Next Button */}
            <div className="next-button-container">
                <Link to="/character" className="next-button" type="Submit">
                    <img src={NextButton} alt=""/>
                </Link>
            </div>
        </div>

    )
}
