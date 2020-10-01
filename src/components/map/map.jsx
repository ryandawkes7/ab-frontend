import React, { useState } from 'react';
import './map.css';
import { Link } from 'react-router-dom';

import GoogleMapReact from 'google-map-react';
import {
    GoogleMap,
    withScriptjs,
    withGoogleMap,
    Marker,
    InfoWindow
} from 'react-google-maps';

import GameIcon from './assets/game-icon.svg';
import QuizIcon from './assets/quiz-icon.svg';
import FactIcon from './assets/fact-icon.svg';

// const LocationPin = ({ text }) => (
//     <div className="pin">
//         <Icon icon={locationIcon} className="pin-icon"/>
//         <p className="pin-text">{text}</p>
//     </div>
// )
//
// const Map = ({ location, zoomLevel }) => (
//     <div className="map">
//     </div>
// )

// Impromptu JSON data for locations
const Interaction = {
    locations: [
        {
            "id": 1,
            "type": "Quiz",
            "coordinates": [51.523147, -2.577680],
            "description": "Test Me!"
        },
        {
            "id": 2,
            "type": "Fact",
            "coordinates": [51.523160, -2.578440],
            "description": "Learn!"
        },
        {
            "id": 3,
            "type": "Game",
            "coordinates": [51.523531, -2.578289],
            "description": "Let's Play!"
        }
    ]
}

function UnwrappedMap() {

    const [selectedInteraction, setSelectedInteraction] = useState(null);

    return (
        // Creates map
        <GoogleMap
            defaultZoom={20}
            defaultCenter={{lat: 51.523214, lng: -2.578499}}
        >
            {/* Maps JSON date to Function */}
            {Interaction.locations.map((interactions) => (
                <Marker
                    key={interactions.id}
                    position={{
                        lat: interactions.coordinates[0],
                        lng: interactions.coordinates[1]
                    }}
                    onClick={() => {
                        setSelectedInteraction(interactions);
                    }}
                    icon={
                        interactions.type === "Quiz" && (
                            QuizIcon
                        ) ||
                        interactions.type === "Fact" && (
                            FactIcon
                        ) ||
                            interactions.type === "Game" && (
                                GameIcon
                        )
                    }
                />
            ))}

            {
                // Function for if the button pressed is a QUIZ button
                selectedInteraction === Interaction.locations[0] && (
                    <div className="map-info-window">
                        <InfoWindow
                            position={{
                                lat: selectedInteraction.coordinates[0] + 0.000065,
                                lng: selectedInteraction.coordinates[1]
                            }}
                            onCloseClick={() => {
                                setSelectedInteraction(null);
                            }}
                        >
                            <div className="map-button">
                                <h2>{ selectedInteraction.type }</h2>
                                <Link to="/quiz" className="map-basic-btn map-quiz-btn">
                                    <h3>{selectedInteraction.description}</h3>
                                </Link>
                            </div>
                        </InfoWindow>
                    </div>
                ) ||

                // Function for if the button pressed is a FACT button
                selectedInteraction === Interaction.locations[1] && (
                    <InfoWindow
                        position={{
                            lat: selectedInteraction.coordinates[0] + 0.000065,
                            lng: selectedInteraction.coordinates[1]
                        }}
                        onCloseClick={() => {
                            setSelectedInteraction(null);
                        }}
                        className="map-info-window"
                    >
                        <div className="map-button">
                            <h2>{ selectedInteraction.type }</h2>
                            <Link to="/fact" className="basic-btn fact-btn">
                                <h3>{ selectedInteraction.description }</h3>
                            </Link>
                        </div>
                    </InfoWindow>
                ) ||

                // Function for if the button pressed is a GAME button
                selectedInteraction === Interaction.locations[2] && (
                    <InfoWindow
                        position={{
                            lat: selectedInteraction.coordinates[0] + 0.000065,
                            lng: selectedInteraction.coordinates[1]
                        }}
                        onCloseClick={() => {
                            setSelectedInteraction(null);
                        }}
                        className="map-info-window"
                    >
                        <div className="map-button">
                            <h2>{ selectedInteraction.type }</h2>
                            <Link to="/game" className="basic-btn game-btn">
                                <h3>{ selectedInteraction.description }</h3>
                            </Link>
                        </div>
                    </InfoWindow>
                )

            }
        </GoogleMap>
    )
}

const WrappedMap = withScriptjs(withGoogleMap(UnwrappedMap));

export default function Map() {
    return (
        <div style={{width: '100%', height: '100%', zIndex: '-2'}}>
            <WrappedMap
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
                loadingElement={ <div style={{height: '100%'}} /> }
                containerElement={ <div style={{height: '100%'}} />}
                mapElement={ <div style={{height: '100%'}} />}
            />
        </div>
    )
}
