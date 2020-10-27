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
import QuizIncomplete from './assets/quiz-icon.svg'; import QuizComplete from './assets/quiz-complete.svg';
import FactIncomplete from './assets/fact-icon.svg'; import FactComplete from './assets/fact-complete.svg';
import PicIncomplete from './assets/picture-incomplete.svg'; import PicComplete from './assets/picture-complete.svg';

import MapOverlay from './assets/main-building.svg';

// Impromptu JSON data for locations
export const Interaction = {
    locations: {
        Quiz: [
            {
                id: 1,
                coordinates: [51.523176, -2.578209],
                description: "Test Me!",
                complete: false,
            },
            {
                id: 2,
                coordinates: [51.523315, -2.578260],
                description: "Test Me!",
                complete: false,
            },
            {
                id: 3,
                coordinates: [51.523365, -2.578005],
                description: "Test Me!",
                complete: false,
            },
            {
                id: 4,
                coordinates: [51.523565, -2.578309],
                description: "Test Me!",
                complete: false,
            },
            {
                id: 5,
                coordinates: [51.523395, -2.578309],
                description: "Test Me!",
                complete: false,
            },
            {
                id: 6,
                coordinates: [51.523265, -2.578649],
                description: "Test Me!",
                complete: false,
            },
            {
                id: 7,
                coordinates: [51.523176, -2.578409],
                description: "Test Me!",
                complete: false,
            },
            {
                id: 8,
                coordinates: [51.523076, -2.578259],
                description: "Test Me!",
                complete: false,
            },
            {
                id: 9,
                coordinates: [51.522776, -2.579259],
                description: "Test Me!",
                complete: false,
            },
        ],

        Fact: [
            {
                id: 1,
                coordinates: [51.523226, -2.578289],
                description: "Learn!",
                complete: false
            },
            {
                id: 2,
                coordinates: [51.523265, -2.577975],
                description: "Learn!",
                complete: false
            },
            {
                id: 3,
                coordinates: [51.523405, -2.578095],
                description: "Learn!",
                complete: false
            },
            {
                id: 4,
                coordinates: [51.523485, -2.578159],
                description: "Learn!",
                complete: false
            },
            {
                id: 5,
                coordinates: [51.523425, -2.578509],
                description: "Learn!",
                complete: false
            },
            {
                id: 6,
                coordinates: [51.523315, -2.578549],
                description: "Learn!",
                complete: false
            },
            {
                id: 7,
                coordinates: [51.523116, -2.578329],
                description: "Learn!",
                complete: false
            },
            {
                id: 8,
                coordinates: [51.523066, -2.578419],
                description: "Learn!",
                complete: false
            },
            {
                id: 9,
                coordinates: [51.522756, -2.579059],
                description: "Learn!",
                complete: false
            },
        ],

        Game: [
            {
                id: 1,
                coordinates: [51.523213, -2.578062],
                description: "Let's Play!",
                complete: false
            }
        ],

        Picture: [
            {
                id: 1,
                coordinates: [51.523273, -2.578122],
                description: "Snap a Photo!",
                complete: false
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
            defaultZoom={21}
            defaultCenter={{lat: 51.523176, lng: -2.578209}}
            center={{ lat: latitude, lng: longitude }}
            options={{
                fullscreenControl: false,
                zoomControl: false,
                streetViewControl: false,
                mapTypeControl: false,
                draggable: false,
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
                                interaction.complete === false ?
                                    setSelectedInteraction(interaction) :
                                    console.log("N/A")
                            }}
                            icon={
                                !interaction.complete && (
                                    QuizIncomplete
                                ) ||
                                interaction.complete && (
                                    QuizComplete
                                )
                            }
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
                            icon={
                                !interaction.complete && (
                                    FactIncomplete
                                ) ||
                                interaction.complete && (
                                    FactComplete
                                )
                            }
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
            {
                Interaction.locations.Picture.map((interaction) => (
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
                            icon={
                                !interaction.complete && (PicIncomplete) ||
                                interaction.complete && (PicComplete)
                            }
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
                                lat: selectedInteraction.coordinates[0] + 0.000033,
                                lng: selectedInteraction.coordinates[1]
                            } }
                            onCloseClick={ () => {
                                setSelectedInteraction(null);
                            } }
                        >
                            <div className="map-button">
                                <h2>{ selectedInteraction.type }</h2>
                                <Link
                                    to="/section-one-quiz"
                                    className="basic-btn quiz-btn"
                                    onClick={() => {selectedInteraction.complete = true }}
                                >
                                    <h3>{ selectedInteraction.description }</h3>
                                </Link>
                            </div>
                        </InfoWindow>
                    </div>
                ) ||
                selectedInteraction === Interaction.locations.Quiz[1] && (
                    <div className="map-info-window">
                        <InfoWindow
                            position={ {
                                lat: selectedInteraction.coordinates[0] + 0.000033,
                                lng: selectedInteraction.coordinates[1]
                            } }
                            onCloseClick={ () => {
                                setSelectedInteraction(null);
                            } }
                        >
                            <div className="map-button">
                                <h2>{ selectedInteraction.type }</h2>
                                <Link
                                    to="/section-two-quiz"
                                    className="basic-btn quiz-btn"
                                    onClick={() => {selectedInteraction.complete = true }}
                                >
                                    <h3>{ selectedInteraction.description }</h3>
                                </Link>
                            </div>
                        </InfoWindow>
                    </div>
                ) ||
                selectedInteraction == Interaction.locations.Quiz[2] && (
                    <div className="map-info-window">
                        <InfoWindow
                            position={ {
                                lat: selectedInteraction.coordinates[0] + 0.000033,
                                lng: selectedInteraction.coordinates[1]
                            } }
                            onCloseClick={ () => {
                                setSelectedInteraction(null);
                            } }
                        >
                            <div className="map-button">
                                <h2>{ selectedInteraction.type }</h2>
                                <Link
                                    to="/section-three-quiz"
                                    className="basic-btn quiz-btn"
                                    onClick={() => {selectedInteraction.complete = true }}
                                >
                                    <h3>{ selectedInteraction.description }</h3>
                                </Link>
                            </div>
                        </InfoWindow>
                    </div>
                ) ||
                selectedInteraction == Interaction.locations.Quiz[3] && (
                    <div className="map-info-window">
                        <InfoWindow
                            position={ {
                                lat: selectedInteraction.coordinates[0] + 0.000033,
                                lng: selectedInteraction.coordinates[1]
                            } }
                            onCloseClick={ () => {
                                setSelectedInteraction(null);
                            } }
                        >
                            <div className="map-button">
                                <h2>{ selectedInteraction.type }</h2>
                                <Link
                                    to="/section-four-quiz"
                                    className="basic-btn quiz-btn"
                                    onClick={() => {selectedInteraction.complete = true }}
                                >
                                    <h3>{ selectedInteraction.description }</h3>
                                </Link>
                            </div>
                        </InfoWindow>
                    </div>
                ) ||
                selectedInteraction == Interaction.locations.Quiz[4] && (
                    <div className="map-info-window">
                        <InfoWindow
                            position={ {
                                lat: selectedInteraction.coordinates[0] + 0.000033,
                                lng: selectedInteraction.coordinates[1]
                            } }
                            onCloseClick={ () => {
                                setSelectedInteraction(null);
                            } }
                        >
                            <div className="map-button">
                                <h2>{ selectedInteraction.type }</h2>
                                <Link
                                    to="/section-five-quiz"
                                    className="basic-btn quiz-btn"
                                    onClick={() => {selectedInteraction.complete = true }}
                                >
                                    <h3>{ selectedInteraction.description }</h3>
                                </Link>
                            </div>
                        </InfoWindow>
                    </div>
                ) ||
                selectedInteraction == Interaction.locations.Quiz[5] && (
                    <div className="map-info-window">
                        <InfoWindow
                            position={ {
                                lat: selectedInteraction.coordinates[0] + 0.000033,
                                lng: selectedInteraction.coordinates[1]
                            } }
                            onCloseClick={ () => {
                                setSelectedInteraction(null);
                            } }
                        >
                            <div className="map-button">
                                <h2>{ selectedInteraction.type }</h2>
                                <Link
                                    to="/section-six-quiz"
                                    className="basic-btn quiz-btn"
                                    onClick={() => {selectedInteraction.complete = true }}
                                >
                                    <h3>{ selectedInteraction.description }</h3>
                                </Link>
                            </div>
                        </InfoWindow>
                    </div>
                ) ||
                selectedInteraction == Interaction.locations.Quiz[6] && (
                    <div className="map-info-window">
                        <InfoWindow
                            position={ {
                                lat: selectedInteraction.coordinates[0] + 0.000033,
                                lng: selectedInteraction.coordinates[1]
                            } }
                            onCloseClick={ () => {
                                setSelectedInteraction(null);
                            } }
                        >
                            <div className="map-button">
                                <h2>{ selectedInteraction.type }</h2>
                                <Link
                                    to="/section-seven-quiz"
                                    className="basic-btn quiz-btn"
                                    onClick={() => {selectedInteraction.complete = true }}
                                >
                                    <h3>{ selectedInteraction.description }</h3>
                                </Link>
                            </div>
                        </InfoWindow>
                    </div>
                ) ||
                selectedInteraction == Interaction.locations.Quiz[7] && (
                    <div className="map-info-window">
                        <InfoWindow
                            position={ {
                                lat: selectedInteraction.coordinates[0] + 0.000033,
                                lng: selectedInteraction.coordinates[1]
                            } }
                            onCloseClick={ () => {
                                setSelectedInteraction(null);
                            } }
                        >
                            <div className="map-button">
                                <h2>{ selectedInteraction.type }</h2>
                                <Link
                                    to="/section-eight-quiz"
                                    className="basic-btn quiz-btn"
                                    onClick={() => {selectedInteraction.complete = true }}
                                >
                                    <h3>{ selectedInteraction.description }</h3>
                                </Link>
                            </div>
                        </InfoWindow>
                    </div>
                ) ||
                selectedInteraction == Interaction.locations.Quiz[8] && (
                    <div className="map-info-window">
                        <InfoWindow
                            position={ {
                                lat: selectedInteraction.coordinates[0] + 0.000033,
                                lng: selectedInteraction.coordinates[1]
                            } }
                            onCloseClick={ () => {
                                setSelectedInteraction(null);
                            } }
                        >
                            <div className="map-button">
                                <h2>{ selectedInteraction.type }</h2>
                                <Link
                                    to="/section-nine-quiz"
                                    className="basic-btn quiz-btn"
                                    onClick={() => {selectedInteraction.complete = true }}
                                >
                                    <h3>{ selectedInteraction.description }</h3>
                                </Link>
                            </div>
                        </InfoWindow>
                    </div>
                )
            }

            {
                selectedInteraction == Interaction.locations.Fact[0] && (
                    <div className="map-info-window">
                        <InfoWindow
                            position={{
                                lat: selectedInteraction.coordinates[0] + 0.000033,
                                lng: selectedInteraction.coordinates[1]
                            }}
                            onCloseClick={() => {
                                setSelectedInteraction(null);
                            }}
                        >
                            <div className="map-button">
                                <h2>{ selectedInteraction.type }</h2>
                                <Link
                                    to="/section-one-fact"
                                    className="basic-btn fact-btn"
                                    onClick={() => {selectedInteraction.complete = true }}
                                >
                                    <h3>{ selectedInteraction.description }</h3>
                                </Link>
                            </div>
                        </InfoWindow>
                    </div>
                ) ||
                selectedInteraction == Interaction.locations.Fact[1] && (
                    <div className="map-info-window">
                        <InfoWindow
                            position={{
                                lat: selectedInteraction.coordinates[0] + 0.000033,
                                lng: selectedInteraction.coordinates[1]
                            }}
                            onCloseClick={ () => {
                                setSelectedInteraction(null);
                            } }
                        >
                            <div className="map-button">
                                <h2>{ selectedInteraction.type }</h2>
                                <Link
                                    to="/section-two-fact"
                                    className="basic-btn fact-btn"
                                    onClick={() => {selectedInteraction.complete = true }}
                                >
                                    <h3>{ selectedInteraction.description }</h3>
                                </Link>
                            </div>
                        </InfoWindow>
                    </div>
                ) ||
                selectedInteraction == Interaction.locations.Fact[2] && (
                    <div className="map-info-window">
                        <InfoWindow
                            position={{
                                lat: selectedInteraction.coordinates[0] + 0.000033,
                                lng: selectedInteraction.coordinates[1]
                            }}
                            onCloseClick={() => {
                                setSelectedInteraction(null);
                            }}
                        >
                            <div className="map-button">
                                <h2>{ selectedInteraction.type }</h2>
                                <Link
                                    to="/section-three-fact"
                                    className="basic-btn fact-btn"
                                    onClick={() => {selectedInteraction.complete = true }}
                                >
                                    <h3>{ selectedInteraction.description }</h3>
                                </Link>
                            </div>
                        </InfoWindow>
                    </div>
                ) ||
                selectedInteraction == Interaction.locations.Fact[3] && (
                    <div className="map-info-window">
                        <InfoWindow
                            position={{
                                lat: selectedInteraction.coordinates[0] + 0.000033,
                                lng: selectedInteraction.coordinates[1]
                            }}
                            onCloseClick={() => {
                                setSelectedInteraction(null);
                            }}
                        >
                            <div className="map-button">
                                <h2>{ selectedInteraction.type }</h2>
                                <Link
                                    to="/section-four-fact"
                                    className="basic-btn fact-btn"
                                    onClick={() => {selectedInteraction.complete = true }}
                                >
                                    <h3>{ selectedInteraction.description }</h3>
                                </Link>
                            </div>
                        </InfoWindow>
                    </div>
                ) ||
                selectedInteraction == Interaction.locations.Fact[4] && (
                    <div className="map-info-window">
                        <InfoWindow
                            position={{
                                lat: selectedInteraction.coordinates[0] + 0.000033,
                                lng: selectedInteraction.coordinates[1]
                            }}
                            onCloseClick={() => {
                                setSelectedInteraction(null);
                            }}
                        >
                            <div className="map-button">
                                <h2>{ selectedInteraction.type }</h2>
                                <Link
                                    to="/section-five-fact"
                                    className="basic-btn fact-btn"
                                    onClick={() => {selectedInteraction.complete = true }}
                                >
                                    <h3>{ selectedInteraction.description }</h3>
                                </Link>
                            </div>
                        </InfoWindow>
                    </div>
                ) ||
                selectedInteraction == Interaction.locations.Fact[5] && (
                    <div className="map-info-window">
                        <InfoWindow
                            position={{
                                lat: selectedInteraction.coordinates[0] + 0.000033,
                                lng: selectedInteraction.coordinates[1]
                            }}
                            onCloseClick={() => {
                                setSelectedInteraction(null);
                            }}
                        >
                            <div className="map-button">
                                <h2>{ selectedInteraction.type }</h2>
                                <Link
                                    to="/section-six-fact"
                                    className="basic-btn fact-btn"
                                    onClick={() => {selectedInteraction.complete = true }}
                                >
                                    <h3>{ selectedInteraction.description }</h3>
                                </Link>
                            </div>
                        </InfoWindow>
                    </div>
                ) ||
                selectedInteraction == Interaction.locations.Fact[6] && (
                    <div className="map-info-window">
                        <InfoWindow
                            position={{
                                lat: selectedInteraction.coordinates[0] + 0.000033,
                                lng: selectedInteraction.coordinates[1]
                            }}
                            onCloseClick={() => {
                                setSelectedInteraction(null);
                            }}
                        >
                            <div className="map-button">
                                <h2>{ selectedInteraction.type }</h2>
                                <Link
                                    to="/section-seven-fact"
                                    className="basic-btn fact-btn"
                                    onClick={() => {selectedInteraction.complete = true }}
                                >
                                    <h3>{ selectedInteraction.description }</h3>
                                </Link>
                            </div>
                        </InfoWindow>
                    </div>
                ) ||
                selectedInteraction == Interaction.locations.Fact[7] && (
                    <div className="map-info-window">
                        <InfoWindow
                            position={{
                                lat: selectedInteraction.coordinates[0] + 0.000033,
                                lng: selectedInteraction.coordinates[1]
                            }}
                            onCloseClick={() => {
                                setSelectedInteraction(null);
                            }}
                        >
                            <div className="map-button">
                                <h2>{ selectedInteraction.type }</h2>
                                <Link
                                    to="/section-eight-fact"
                                    className="basic-btn fact-btn"
                                    onClick={() => {selectedInteraction.complete = true }}
                                >
                                    <h3>{ selectedInteraction.description }</h3>
                                </Link>
                            </div>
                        </InfoWindow>
                    </div>
                ) ||
                selectedInteraction == Interaction.locations.Fact[8] && (
                    <div className="map-info-window">
                        <InfoWindow
                            position={{
                                lat: selectedInteraction.coordinates[0] + 0.000033,
                                lng: selectedInteraction.coordinates[1]
                            }}
                            onCloseClick={() => {
                                setSelectedInteraction(null);
                            }}
                        >
                            <div className="map-button">
                                <h2>{ selectedInteraction.type }</h2>
                                <Link
                                    to="/section-nine-fact"
                                    className="basic-btn fact-btn"
                                    onClick={() => {selectedInteraction.complete = true }}
                                >
                                    <h3>{ selectedInteraction.description }</h3>
                                </Link>
                            </div>
                        </InfoWindow>
                    </div>
                )
            }

            {
                selectedInteraction === Interaction.locations.Picture[0] && (
                    <div className="map-info-window">
                        <InfoWindow
                            position={{
                                lat: selectedInteraction.coordinates[0] + 0.000033,
                                lng: selectedInteraction.coordinates[1]
                            }}
                            onCloseClick={() => {
                                setSelectedInteraction(null);
                            }}
                        >
                            <div className="map-button">
                                <h2>{ selectedInteraction.type }</h2>
                                <Link
                                    to="/section-one-pic"
                                    className="basic-btn fact-btn"
                                    onClick={() => {selectedInteraction.complete = true }}
                                >
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
