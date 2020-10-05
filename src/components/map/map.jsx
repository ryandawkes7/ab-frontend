// /* global google */
// import React, {useState} from 'react';
// import './map.css';
// import { Link } from 'react-router-dom';
//
// import { usePosition } from 'use-position';
//
// import {
//     GoogleMap,
//     withScriptjs,
//     withGoogleMap,
//     Marker,
//     InfoWindow,
//     GroundOverlay
// } from 'react-google-maps';
//
// import GameIcon from './assets/game-icon.svg';
// import QuizIcon from './assets/quiz-icon.svg';
// import FactIcon from './assets/fact-icon.svg';
// import MapOverlay from './assets/main-building.svg';
//
// // Impromptu JSON data for locations
// const Interaction = {
//     locations: [
//         {
//             "id": 1,
//             "type": "Quiz",
//             "coordinates": [51.523406, -2.578008],
//             "description": "Test Me!"
//         },
//         {
//             "id": 2,
//             "type": "Quiz",
//             "coordinates": [51.523120, -2.578284],
//             "description": "Test Me!"
//         },
//         {
//             "id": 3,
//             "type": "FactFormat",
//             "coordinates": [51.523323, -2.577915],
//             "description": "Learn!"
//         },
//         {
//             "id": 4,
//             "type": "Game",
//             "coordinates": [51.523531, -2.578289],
//             "description": "Let's Play!"
//         }
//     ]
// }
//
// function UnwrappedMap() {
//
//     const [selectedInteraction, setSelectedInteraction] = useState(null);
//
//     const watch = true;
//     const { latitude, longitude } =
//         usePosition(watch, {enableHighAccuracy: true});
//
//
//     return (
//         // Creates map
//         <GoogleMap
//             defaultZoom={20}
//             defaultCenter={{lat: latitude, lng: longitude}}
//             center={{ lat: 51.523160, lng: -2.578440 }}
//             options={{
//                 fullscreenControl: false,
//                 zoomControl: false,
//                 streetViewControl: false,
//                 mapTypeControl: false,
//                 // draggable: false,
//                 clickableIcons: false,
//             }}
//         >
//             <GroundOverlay
//                 bounds={new google.maps.LatLngBounds(
//                     new google.maps.LatLng(51.522800, -2.578910),
//                     new google.maps.LatLng(51.523655, -2.577485)
//                 )}
//                 url={MapOverlay}
//                 opacity={1}
//             />
//             {/* User Location Marker*/}
//
//             <Marker
//                 position={{ lat: latitude, lng: longitude }}
//             />
//             {/* Maps JSON date to Function */}
//             {Interaction.locations.map((interactions) => (
//                 <Marker
//                     key={interactions.id}
//                     position={{
//                         lat: interactions.coordinates[0],
//                         lng: interactions.coordinates[1]
//                     }}
//                     onClick={() => {
//                         setSelectedInteraction(interactions);
//                     }}
//                     icon={
//                         interactions.type === "Quiz" && (
//                             QuizIcon
//                         ) ||
//                         interactions.type === "FactFormat" && (
//                             FactIcon
//                         ) ||
//                             interactions.type === "Game" && (
//                                 GameIcon
//                         )
//                     }
//                 />
//             ))}
//
//             {
//                 // Function for if the button pressed is a QUIZ button
//                 selectedInteraction === Interaction.locations[0] && (
//                     <div className="map-info-window">
//                         <InfoWindow
//                             position={{
//                                 lat: selectedInteraction.coordinates[0] + 0.000065,
//                                 lng: selectedInteraction.coordinates[1]
//                             }}
//                             onCloseClick={() => {
//                                 setSelectedInteraction(null);
//                             }}
//                         >
//                             <div className="map-button">
//                                 <h2>{ selectedInteraction.type }</h2>
//                                 <Link to="/quiz" className="map-basic-btn map-quiz-btn">
//                                     <h3>{selectedInteraction.description}</h3>
//                                 </Link>
//                             </div>
//                         </InfoWindow>
//                     </div>
//                 ) ||
//
//                 // Function for if the button pressed is a FACT button
//                 selectedInteraction === Interaction.locations[1] && (
//                     <div>
//                         <InfoWindow
//                             position={{
//                                 lat: selectedInteraction.coordinates[0] + 0.000065,
//                                 lng: selectedInteraction.coordinates[1]
//                             }}
//                             onCloseClick={() => {
//                                 setSelectedInteraction(null);
//                             }}
//                             className="map-info-window"
//                         >
//                             <div className="map-button">
//                                 <h2>{ selectedInteraction.type }</h2>
//                                 <Link to="/fact" className="basic-btn fact-btn">
//                                     <h3>{ selectedInteraction.description }</h3>
//                                 </Link>
//                             </div>
//                         </InfoWindow>
//                     </div>
//                 ) ||
//
//                 // Function for if the button pressed is a GAME button
//                 selectedInteraction === Interaction.locations[2] && (
//                     <div>
//                         <InfoWindow
//                             position={{
//                                 lat: selectedInteraction.coordinates[0] + 0.000065,
//                                 lng: selectedInteraction.coordinates[1]
//                             }}
//                             onCloseClick={() => {
//                                 setSelectedInteraction(null);
//                             }}
//                             className="map-info-window"
//                         >
//                             <div className="map-button">
//                                 <h2>{ selectedInteraction.type }</h2>
//                                 <Link to="/game" className="basic-btn game-btn">
//                                     <h3>{ selectedInteraction.description }</h3>
//                                 </Link>
//                             </div>
//                         </InfoWindow>
//                     </div>
//                 )
//
//             }
//         </GoogleMap>
//     )
// }
//
// const WrappedMap = withScriptjs(withGoogleMap(UnwrappedMap));
//
// export default function Map() {
//     return (
//         <div style={{width: '100%', height: '100%', zIndex: '-2'}}>
//             <WrappedMap
//                 googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
//                 loadingElement={ <div style={{height: '100%'}} /> }
//                 containerElement={ <div style={{height: '100%'}} />}
//                 mapElement={ <div style={{height: '100%'}} />}
//             />
//         </div>
//     )
// }

/* global google */
import React, {useState} from 'react';
import './map.css';
import { Link } from 'react-router-dom';

import { usePosition } from 'use-position';

import {
    GoogleMap,
    withScriptjs,
    withGoogleMap,
    Marker,
    InfoWindow,
    GroundOverlay
} from 'react-google-maps';

import GameIcon from './assets/game-icon.svg';
import QuizIcon from './assets/quiz-icon.svg';
import FactIcon from './assets/fact-icon.svg';
import MapOverlay from './assets/main-building.svg';

// Impromptu JSON data for locations
const Interaction = {
    locations: {
        Quiz: [
            {
                id: 1,
                coordinates: [51.523406, -2.578008],
                description: "Test Me!",
                complete: false
            },
            {
                id: 2,
                coordinates: [51.523620, -2.578354],
                description: "Test Me!",
                complete: false
            },
        ],

        Fact: [
            {
                "id": 2,
                "coordinates": [51.523323, -2.577915],
                "description": "Learn!",
                "complete": false
            }
        ],

        Game: [
            {
                "id": 1,
                "coordinates": [51.523213, -2.578062],
                "description": "Let's Play!",
                "complete": false
            }
        ]
    },
}

function UnwrappedMap() {

    const [selectedInteraction, setSelectedInteraction] = useState(null);

    const watch = true;
    const { latitude, longitude } =
        usePosition(watch, {enableHighAccuracy: true});


    return (
        // Creates map
        <GoogleMap
            defaultZoom={20}
            defaultCenter={{lat: 51.523160, lng: -2.578440}}
            // center={{ lat: latitude, lng: longitude }}
            options={{
                fullscreenControl: false,
                zoomControl: false,
                streetViewControl: false,
                mapTypeControl: false,
                // draggable: false,
                clickableIcons: false,
            }}
        >
            <GroundOverlay
                bounds={new google.maps.LatLngBounds(
                    new google.maps.LatLng(51.522800, -2.578910),
                    new google.maps.LatLng(51.523655, -2.577485)
                )}
                url={MapOverlay}
                opacity={1}
            />

            {/* User Location Marker*/}
            <Marker
                position={{ lat: latitude, lng: longitude }}
            />

            {/* Interaction Markers */}
            {
                Interaction.locations.Quiz.map ((interaction) => (
                    <div>
                        <Marker
                            key={interaction.id}
                            position={{
                                lat: interaction.coordinates[0],
                                lng: interaction.coordinates[1]
                            }}
                            onClick={() => {
                                setSelectedInteraction(interaction)
                                console.log(selectedInteraction)
                            }}
                            icon={QuizIcon}
                        />
                    </div>
                ))
            }

            {
                Interaction.locations.Fact.map((interaction) => (
                    <div>
                        <Marker
                            key={interaction.id}
                            position={{
                                lat: interaction.coordinates[0],
                                lng: interaction.coordinates[1]
                            }}
                            onClick={() => {
                                setSelectedInteraction(interaction)
                                console.log(selectedInteraction)
                            }}
                            icon={FactIcon}
                        />
                    </div>
                ))
            }

            {
                Interaction.locations.Game.map((interaction) => (
                    <div>
                        <Marker
                            key={interaction.id}
                            position={{
                                lat: interaction.coordinates[0],
                                lng: interaction.coordinates[1]
                            }}
                            onClick={() => {
                                setSelectedInteraction(interaction)
                                console.log(selectedInteraction)
                            }}
                            icon={GameIcon}
                        />
                    </div>
                ))
            }
            {/* End of Interaction Markers */}

            {/* Selecting Interaction Section */}
            {
                // Function for if the button pressed is a QUIZ button
                selectedInteraction === Interaction.locations.Quiz[0] && (
                    <div className="map-info-window">
                        <InfoWindow
                            position={ {
                                lat: selectedInteraction.coordinates[0] + 0.000065,
                                lng: selectedInteraction.coordinates[1]
                            } }
                            onCloseClick={ () => {
                                setSelectedInteraction(null);
                            } }
                        >
                            <div className="map-button">
                                <h2>{ selectedInteraction.type }</h2>
                                <Link to="/section-one" className="basic-btn quiz-btn">
                                    <h3>{ selectedInteraction.description }</h3>
                                </Link>
                            </div>
                        </InfoWindow>
                    </div>
                ) ||
                selectedInteraction == Interaction.locations.Quiz[1] && (
                    <div className="map-info-window">
                        <InfoWindow
                            position={ {
                                lat: selectedInteraction.coordinates[0] + 0.000065,
                                lng: selectedInteraction.coordinates[1]
                            } }
                            onCloseClick={ () => {
                                setSelectedInteraction(null);
                            } }
                        >
                            <div className="map-button">
                                <h2>{ selectedInteraction.type }</h2>
                                <Link to="/section-two" className="basic-btn quiz-btn">
                                    <h3>{ selectedInteraction.description }</h3>
                                </Link>
                            </div>
                        </InfoWindow>
                    </div>
                )
            }

            {
                selectedInteraction === Interaction.locations.Fact[0] && (
                    <div className="map-info-window">
                        <InfoWindow
                            position={ {
                                lat: selectedInteraction.coordinates[0] + 0.000065,
                                lng: selectedInteraction.coordinates[1]
                            } }
                            onCloseClick={ () => {
                                setSelectedInteraction(null);
                            } }
                        >
                            <div className="map-button">
                                <h2>{ selectedInteraction.type }</h2>
                                <Link to="/section-one-fact" className="basic-btn fact-btn">
                                    <h3>{ selectedInteraction.description }</h3>
                                </Link>
                            </div>
                        </InfoWindow>
                    </div>
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
