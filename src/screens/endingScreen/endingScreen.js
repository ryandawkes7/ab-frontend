import React, {Component} from 'react'; import './endingScreen.css';
import ABLogo from './assets/aerospace-logo.png'; import UWELogo from './assets/uwe-logo.png'; import CharactersImg from './assets/characters.png';

class EndingScreen extends Component {
    render () {
        return (
            <div className="container ending-screen-container">

                {/* AB Logo */}
                <div className="es-aerospace-container">
                    <img src={ABLogo} alt="Aerospace Bristol"/>
                </div>

                {/* UWE Logo */}
                <div className="es-uwe-container">

                    {/* Subtitle */}
                    <div className="esu-title">
                        in partnership with
                    </div>

                    {/* UWE Logo */}
                    <div className="esu-image">
                        <img src={UWELogo} alt="UWE"/>
                    </div>

                </div>

                {/* Characters */}
                <div className="es-character-container">
                    <img src={CharactersImg} alt="Goodbye!" />
                </div>
            </div>
        );
    }
}

export default EndingScreen;
