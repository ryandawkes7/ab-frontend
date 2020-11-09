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
// import GameIcon from './assets/game-icon.svg'; import CharIcon from './assets/header-char-icon.svg'; import SettingsIcon from './assets/settings-icon.svg';
// import QuizIncomplete from './assets/quiz-icon.svg'; import QuizComplete from './assets/quiz-complete.svg'; import QuizLocked from './assets/quiz-locked.svg';
// import FactIncomplete from './assets/fact-icon.svg'; import FactComplete from './assets/fact-complete.svg';
// import PicIncomplete from './assets/picture-incomplete.svg'; import PicComplete from './assets/picture-complete.svg';
//
// import HeaderBackdrop from './assets/header-background.svg'; import BubbleImage from './assets/bubble.svg';
// import AlfieImg from './assets/alfie-image.png';
// import MapOverlay from './assets/main-building.svg'; import CloseButton from './assets/16/icon.svg';
//
// // Impromptu JSON data for locations
// export const Interaction = {
//     locations: {
//         Quiz: [
//             {
//                 id: 1,
//                 coordinates: [51.523176, -2.578209],
//                 title: 'QUIZ TIME!',
//                 description: "Do you want to play with me and earn some points?",
//                 complete: false,
//             },
//             {
//                 id: 2,
//                 coordinates: [51.523315, -2.578260],
//                 title: 'QUIZ TIME!',
//                 description: "Do you want to play with me and earn some points?",
//                 complete: false,
//             },
//             {
//                 id: 3,
//                 coordinates: [51.523365, -2.578005],
//                 title: 'QUIZ TIME!',
//                 description: "Do you want to play with me and earn some points?",
//                 complete: false,
//             },
//             {
//                 id: 4,
//                 coordinates: [51.523565, -2.578309],
//                 title: 'QUIZ TIME!',
//                 description: "Do you want to play with me and earn some points?",
//                 complete: false,
//             },
//             {
//                 id: 5,
//                 coordinates: [51.523395, -2.578309],
//                 title: 'QUIZ TIME!',
//                 description: "Do you want to play with me and earn some points?",
//                 complete: false,
//             },
//             {
//                 id: 6,
//                 coordinates: [51.523265, -2.578649],
//                 title: 'QUIZ TIME!',
//                 description: "Do you want to play with me and earn some points?",
//                 complete: false,
//             },
//             {
//                 id: 7,
//                 coordinates: [51.523176, -2.578409],
//                 title: 'QUIZ TIME!',
//                 description: "Do you want to play with me and earn some points?",
//                 complete: false,
//             },
//             {
//                 id: 8,
//                 coordinates: [51.523076, -2.578259],
//                 title: 'QUIZ TIME!',
//                 description: "Do you want to play with me and earn some points?",
//                 complete: false,
//             },
//             {
//                 id: 9,
//                 coordinates: [51.522776, -2.579259],
//                 title: 'QUIZ TIME!',
//                 description: "Do you want to play with me and earn some points?",
//                 complete: false,
//             },
//         ],
//
//         Fact: [
//             {
//                 id: 1,
//                 coordinates: [51.523226, -2.578289],
//                 title: "FACT TIME!",
//                 description: "Do you want to learn with me and earn some points?",
//                 complete: false
//             },
//             {
//                 id: 2,
//                 coordinates: [51.523265, -2.577975],
//                 title: "FACT TIME!",
//                 description: "Do you want to learn with me and earn some points?",
//                 complete: false
//             },
//             {
//                 id: 3,
//                 coordinates: [51.523405, -2.578095],
//                 title: "FACT TIME!",
//                 description: "Do you want to learn with me and earn some points?",
//                 complete: false
//             },
//             {
//                 id: 4,
//                 coordinates: [51.523485, -2.578159],
//                 title: "FACT TIME!",
//                 description: "Do you want to learn with me and earn some points?",
//                 complete: false
//             },
//             {
//                 id: 5,
//                 coordinates: [51.523425, -2.578509],
//                 title: "FACT TIME!",
//                 description: "Do you want to learn with me and earn some points?",
//                 complete: false
//             },
//             {
//                 id: 6,
//                 coordinates: [51.523315, -2.578549],
//                 title: "FACT TIME!",
//                 description: "Do you want to learn with me and earn some points?",
//                 complete: false
//             },
//             {
//                 id: 7,
//                 coordinates: [51.523116, -2.578329],
//                 title: "FACT TIME!",
//                 description: "Do you want to learn with me and earn some points?",
//                 complete: false
//             },
//             {
//                 id: 8,
//                 coordinates: [51.523066, -2.578419],
//                 title: "FACT TIME!",
//                 description: "Do you want to learn with me and earn some points?",
//                 complete: false
//             },
//             {
//                 id: 9,
//                 coordinates: [51.522756, -2.579059],
//                 title: "FACT TIME!",
//                 description: "Do you want to learn with me and earn some points?",
//                 complete: false
//             },
//         ],
//
//         Game: [
//             {
//                 id: 1,
//                 coordinates: [51.523213, -2.578062],
//                 description: "Let's Play!",
//                 complete: false
//             }
//         ],
//
//         Picture: [
//             {
//                 id: 1,
//                 coordinates: [51.523273, -2.578122],
//                 description: "Snap a Photo!",
//                 complete: false
//             }
//         ],
//
//         Sections: [
//             {
//                 era: 1,
//                 complete: false,
//                 quiz: {
//                     coordinates: [51.523176, -2.578209],
//                     title: 'QUIZ TIME!',
//                     description: "Do you want to play with me and earn some points?",
//                     complete: false,
//                 },
//                 fact: {
//                     coordinates: [51.523226, -2.578289],
//                     title: "FACT TIME!",
//                     description: "Do you want to learn with me and earn some points?",
//                     complete: false
//                 }
//             },
//             {
//                 era: 2,
//                 complete: false,
//                 quiz: {
//                     coordinates: [51.523315, -2.578260],
//                     title: 'QUIZ TIME!',
//                     description: "Do you want to play with me and earn some points?",
//                     complete: false,
//                 },
//                 fact: {
//                     coordinates: [51.523265, -2.577975],
//                     title: "FACT TIME!",
//                     description: "Do you want to learn with me and earn some points?",
//                     complete: false
//                 }
//             },
//             {
//                 era: 3,
//                 complete: false,
//                 quiz: {
//                     coordinates: [51.523365, -2.578005],
//                     title: 'QUIZ TIME!',
//                     description: "Do you want to play with me and earn some points?",
//                     complete: false,
//                 },
//                 fact: {
//                     coordinates: [51.523405, -2.578095],
//                     title: "FACT TIME!",
//                     description: "Do you want to learn with me and earn some points?",
//                     complete: false
//                 }
//             },
//             {
//                 era: 4,
//                 complete: false,
//                 quiz: {
//                     coordinates: [51.523565, -2.578309],
//                     title: 'QUIZ TIME!',
//                     description: "Do you want to play with me and earn some points?",
//                     complete: false,
//                 },
//                 fact: {
//                     coordinates: [51.523485, -2.578159],
//                     title: "FACT TIME!",
//                     description: "Do you want to learn with me and earn some points?",
//                     complete: false
//                 }
//             },
//             {
//                 era: 5,
//                 complete: false,
//                 quiz: {
//                     coordinates: [51.523395, -2.578309],
//                     title: 'QUIZ TIME!',
//                     description: "Do you want to play with me and earn some points?",
//                     complete: false,
//                 },
//                 fact: {
//                     coordinates: [51.523425, -2.578509],
//                     title: "FACT TIME!",
//                     description: "Do you want to learn with me and earn some points?",
//                     complete: false
//                 }
//             },
//             {
//                 era: 6,
//                 complete: false,
//                 quiz: {
//                     coordinates: [51.523265, -2.578649],
//                     title: 'QUIZ TIME!',
//                     description: "Do you want to play with me and earn some points?",
//                     complete: false,
//                 },
//                 fact: {
//                     coordinates: [51.523315, -2.578549],
//                     title: "FACT TIME!",
//                     description: "Do you want to learn with me and earn some points?",
//                     complete: false
//                 }
//             },
//             {
//                 era: 7,
//                 complete: false,
//                 quiz: {
//                     coordinates: [51.523176, -2.578409],
//                     title: 'QUIZ TIME!',
//                     description: "Do you want to play with me and earn some points?",
//                     complete: false,
//                 },
//                 fact: {
//                     coordinates: [51.523116, -2.578329],
//                     title: "FACT TIME!",
//                     description: "Do you want to learn with me and earn some points?",
//                     complete: false
//                 }
//             },
//             {
//                 era: 8,
//                 complete: false,
//                 quiz: {
//                     coordinates: [51.523076, -2.578259],
//                     title: 'QUIZ TIME!',
//                     description: "Do you want to play with me and earn some points?",
//                     complete: false,
//                 },
//                 fact: {
//                     coordinates: [51.523066, -2.578419],
//                     title: "FACT TIME!",
//                     description: "Do you want to learn with me and earn some points?",
//                     complete: false
//                 }
//             },
//             {
//                 era: 9,
//                 complete: false,
//                 quiz: {
//                     coordinates: [51.522776, -2.579259],
//                     title: 'QUIZ TIME!',
//                     description: "Do you want to play with me and earn some points?",
//                     complete: false,
//                 },
//                 fact: {
//                     coordinates: [51.522756, -2.579059],
//                     title: "FACT TIME!",
//                     description: "Do you want to learn with me and earn some points?",
//                     complete: false
//                 }
//             },
//         ]
//     },
// }
//
// function UnwrappedMap() {
//
//     const [selectedInteraction, setSelectedInteraction] = useState(null);
//
//     const isEraOneComplete = () => {
//         const era = Interaction.locations.Sections[0];
//         const quiz = Interaction.locations.Quiz[0];
//         const fact = Interaction.locations.Fact[0];
//
//         if (fact.complete && quiz.complete) {
//             era.complete = true;
//             console.log("Era one is complete");
//         } else {
//             era.complete = false;
//             console.log("Era one not complete yet!!")
//         }
//     }
//     isEraOneComplete();
//
//     const isEraTwoComplete = () => {
//         const eraOne = Interaction.locations.Sections[0];
//         const eraTwo = Interaction.locations.Sections[1];
//         const quiz = Interaction.locations.Quiz[1];
//         const fact = Interaction.locations.Fact[1];
//
//         if(fact.complete && quiz.complete) {
//             eraTwo.complete = true;
//             console.log("Era two is complete")
//         }
//         else {
//             eraTwo.complete = false;
//             console.log("Era two not complete yet!!")
//         }
//     }
//
//     const watch = true;
//     const { latitude, longitude } =
//         usePosition(watch, {enableHighAccuracy: true});
//
//     const eraOne = Interaction.locations.Sections[0]
//     const quizEraOne = eraOne.quiz;
//     const factEraOne = eraOne.fact;
//
//     return (
//         // Creates map
//         <GoogleMap
//             defaultZoom={20}
//             defaultCenter={{lat: 51.523176, lng: -2.578209}}
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
//
//             {/* Interaction Markers */}
//             {/*{*/}
//             {/*    Interaction.locations.Quiz.map ((interaction) => (*/}
//             {/*        <div>*/}
//             {/*            <Marker*/}
//             {/*                key={interaction.id.number}*/}
//             {/*                position={{*/}
//             {/*                    lat: interaction.coordinates[0],*/}
//             {/*                    lng: interaction.coordinates[1]*/}
//             {/*                }}*/}
//             {/*                onClick={() => {*/}
//             {/*                    interaction.complete === false ?*/}
//             {/*                        setSelectedInteraction(interaction) :*/}
//             {/*                        console.log("N/A")*/}
//             {/*                }}*/}
//             {/*                icon={*/}
//             {/*                    !interaction.complete &&*/}
//             {/*                    interaction.id !== 1 &&*/}
//             {/*                    !eraOne.complete &&*/}
//             {/*                    (*/}
//             {/*                        QuizLocked*/}
//             {/*                    ) ||*/}
//             {/*                    !interaction.complete && (*/}
//             {/*                        QuizIncomplete*/}
//             {/*                    ) ||*/}
//             {/*                    interaction.complete && (*/}
//             {/*                        QuizComplete*/}
//             {/*                    )*/}
//             {/*                }*/}
//             {/*            />*/}
//             {/*        </div>*/}
//             {/*    ))*/}
//             {/*}*/}
//             {
//                 Interaction.locations.Sections.map((interaction) => (
//                     <div>
//                         <Marker
//                             key={interaction.quiz.id}
//                             position={{
//                                 lat: interaction.quiz.coordinates[0],
//                                 lng: interaction.quiz.coordinates[1]
//                             }}
//                             onClick={() => {
//                                 interaction.quiz.complete === false ?
//                                     setSelectedInteraction(interaction.quiz) :
//                                     console.log("N/A")
//                             }}
//                             icon={
//                                 QuizIncomplete
//                             }
//                         />
//                         <Marker
//                             key={interaction.fact.id}
//                             position={{
//                                 lat: interaction.fact.coordinates[0],
//                                 lng: interaction.fact.coordinates[1]
//                             }}
//                             onClick={() => {
//                                 setSelectedInteraction(interaction.fact)
//                                 console.log(selectedInteraction)
//                             }}
//                             icon={FactIncomplete}
//                         />
//                     </div>
//                 ))
//             }
//
//             {
//                 Interaction.locations.Sections.map((interaction) => (
//                     <div>
//
//                     </div>
//                 ))
//             }
//
//             {/*{*/}
//             {/*    Interaction.locations.Fact.map((interaction) => (*/}
//             {/*        <div>*/}
//             {/*            <Marker*/}
//             {/*                key={interaction.id}*/}
//             {/*                position={{*/}
//             {/*                    lat: interaction.coordinates[0],*/}
//             {/*                    lng: interaction.coordinates[1]*/}
//             {/*                }}*/}
//             {/*                onClick={() => {*/}
//             {/*                    setSelectedInteraction(interaction)*/}
//             {/*                    console.log(selectedInteraction)*/}
//             {/*                }}*/}
//             {/*                icon={*/}
//             {/*                    !interaction.complete && (*/}
//             {/*                        FactIncomplete*/}
//             {/*                    ) ||*/}
//             {/*                    interaction.complete && (*/}
//             {/*                        FactComplete*/}
//             {/*                    )*/}
//             {/*                }*/}
//             {/*            />*/}
//             {/*        </div>*/}
//             {/*    ))*/}
//             {/*}*/}
//
//             {
//                 Interaction.locations.Game.map((interaction) => (
//                     <div>
//                         <Marker
//                             key={interaction.id}
//                             position={{
//                                 lat: interaction.coordinates[0],
//                                 lng: interaction.coordinates[1]
//                             }}
//                             onClick={() => {
//                                 setSelectedInteraction(interaction)
//                                 console.log(selectedInteraction)
//                             }}
//                             icon={GameIcon}
//                         />
//                     </div>
//                 ))
//             }
//             {
//                 Interaction.locations.Picture.map((interaction) => (
//                     <div>
//                         <Marker
//                             key={interaction.id}
//                             position={{
//                                 lat: interaction.coordinates[0],
//                                 lng: interaction.coordinates[1]
//                             }}
//                             onClick={() => {
//                                 setSelectedInteraction(interaction)
//                                 console.log(selectedInteraction)
//                             }}
//                             icon={
//                                 !interaction.complete && (PicIncomplete) ||
//                                 interaction.complete && (PicComplete)
//                             }
//                         />
//                     </div>
//                 ))
//             }
//             {/* End of Interaction Markers */}
//
//             {/* Selecting Interaction Section */}
//             {
//                 // Function for if the button pressed is a QUIZ button
//                 selectedInteraction === quizEraOne && (
//                     <div className="map-button-popup">
//
//                         {/* Container */}
//                         <div className="m-b-p-main-container">
//
//                             {/* Close Button */}
//                             <button
//                                 className="mbp-close-container"
//                                 onClick={() => { setSelectedInteraction(null) }}
//                             >
//                                 <img src={CloseButton} alt="Close Menu"/>
//                             </button>
//
//                             {/* Quote Bubble */}
//                             <div className="mbp-bubble-container">
//
//                                 {/* Image */}
//                                 <img src={BubbleImage} alt="Quote Bubble"/>
//
//                                 {/* Text */}
//                                 <div className="mbpb-title-container">
//
//                                     {/* Title */}
//                                     <div className="mbpb-title">
//                                         { selectedInteraction.title }
//                                     </div>
//
//                                     {/* Description */}
//                                     <div className="mbpb-description">
//                                         { selectedInteraction.description }
//                                     </div>
//
//                                 </div>
//
//                             </div>
//
//                             {/* Button Container */}
//                             <div className="mbp-button-container">
//
//                                 {/* Play Button */}
//                                 <Link
//                                     className="mbp-button mbp-play-button"
//                                     to="/section-one-quiz"
//                                     onClick={() => { selectedInteraction.complete = true }}
//                                 >
//                                     Play
//                                 </Link>
//
//                                 {/* Not Now Button */}
//                                 <button className="mbp-button mbp-cancel-button">
//                                     Not Now
//                                 </button>
//
//                             </div>
//
//                             {/* Character Container */}
//                             <div className="mbp-character-container">
//                                 <img src={AlfieImg} alt="Alfie"/>
//                             </div>
//
//                         </div>
//
//                     </div>
//                     // <InfoWindow
//                     //     position={ {
//                     //         lat: selectedInteraction.coordinates[0] + 0.000033,
//                     //         lng: selectedInteraction.coordinates[1]
//                     //     } }
//                     //     onCloseClick={ () => {
//                     //         setSelectedInteraction(null);
//                     //     } }
//                     // >
//                     //     <div className="map-button">
//                     //         <h2>{ selectedInteraction.type }</h2>
//                     //         <Link
//                     //             to="/section-one-quiz"
//                     //             className="map-quiz-button"
//                     //             onClick={() => {selectedInteraction.complete = true }}
//                     //         >
//                     //             <h3>{ selectedInteraction.description }</h3>
//                     //         </Link>
//                     //     </div>
//                     // </InfoWindow>
//                 ) ||
//                 selectedInteraction === Interaction.locations.Quiz[1] && (
//                     <div className="map-button-popup">
//
//                         {/* Container */}
//                         <div className="m-b-p-main-container">
//
//                             {/* Close Button */}
//                             <button
//                                 className="mbp-close-container"
//                                 onClick={() => { setSelectedInteraction(null) }}
//                             >
//                                 <img src={CloseButton} alt="Close Menu"/>
//                             </button>
//
//                             {/* Quote Bubble */}
//                             <div className="mbp-bubble-container">
//
//                                 {/* Image */}
//                                 <img src={BubbleImage} alt="Quote Bubble"/>
//
//                                 {/* Text */}
//                                 <div className="mbpb-title-container">
//
//                                     {/* Title */}
//                                     <div className="mbpb-title">
//                                         { selectedInteraction.title }
//                                     </div>
//
//                                     {/* Description */}
//                                     <div className="mbpb-description">
//                                         { selectedInteraction.description }
//                                     </div>
//
//                                 </div>
//
//                             </div>
//
//                             {/* Button Container */}
//                             <div className="mbp-button-container">
//
//                                 {/* Play Button */}
//                                 <Link
//                                     className="mbp-button mbp-play-button"
//                                     to="/section-two-quiz"
//                                 >
//                                     Play
//                                 </Link>
//
//                                 {/* Not Now Button */}
//                                 <button className="mbp-button mbp-cancel-button">
//                                     Not Now
//                                 </button>
//
//                             </div>
//
//                             {/* Character Container */}
//                             <div className="mbp-character-container">
//                                 <img src={AlfieImg} alt="Alfie"/>
//                             </div>
//
//                         </div>
//
//                     </div>
//                 ) ||
//                 selectedInteraction == Interaction.locations.Quiz[2] && (
//                     <div className="map-button-popup">
//
//                         {/* Container */}
//                         <div className="m-b-p-main-container">
//
//                             {/* Close Button */}
//                             <button
//                                 className="mbp-close-container"
//                                 onClick={() => { setSelectedInteraction(null) }}
//                             >
//                                 <img src={CloseButton} alt="Close Menu"/>
//                             </button>
//
//                             {/* Quote Bubble */}
//                             <div className="mbp-bubble-container">
//
//                                 {/* Image */}
//                                 <img src={BubbleImage} alt="Quote Bubble"/>
//
//                                 {/* Text */}
//                                 <div className="mbpb-title-container">
//
//                                     {/* Title */}
//                                     <div className="mbpb-title">
//                                         { selectedInteraction.title }
//                                     </div>
//
//                                     {/* Description */}
//                                     <div className="mbpb-description">
//                                         { selectedInteraction.description }
//                                     </div>
//
//                                 </div>
//
//                             </div>
//
//                             {/* Button Container */}
//                             <div className="mbp-button-container">
//
//                                 {/* Play Button */}
//                                 <Link
//                                     className="mbp-button mbp-play-button"
//                                     to="/section-three-quiz"
//                                 >
//                                     Play
//                                 </Link>
//
//                                 {/* Not Now Button */}
//                                 <button className="mbp-button mbp-cancel-button">
//                                     Not Now
//                                 </button>
//
//                             </div>
//
//                             {/* Character Container */}
//                             <div className="mbp-character-container">
//                                 <img src={AlfieImg} alt="Alfie"/>
//                             </div>
//
//                         </div>
//
//                     </div>
//                 ) ||
//                 selectedInteraction == Interaction.locations.Quiz[3] && (
//                     <div className="map-button-popup">
//
//                         {/* Container */}
//                         <div className="m-b-p-main-container">
//
//                             {/* Close Button */}
//                             <button
//                                 className="mbp-close-container"
//                                 onClick={() => { setSelectedInteraction(null) }}
//                             >
//                                 <img src={CloseButton} alt="Close Menu"/>
//                             </button>
//
//                             {/* Quote Bubble */}
//                             <div className="mbp-bubble-container">
//
//                                 {/* Image */}
//                                 <img src={BubbleImage} alt="Quote Bubble"/>
//
//                                 {/* Text */}
//                                 <div className="mbpb-title-container">
//
//                                     {/* Title */}
//                                     <div className="mbpb-title">
//                                         { selectedInteraction.title }
//                                     </div>
//
//                                     {/* Description */}
//                                     <div className="mbpb-description">
//                                         { selectedInteraction.description }
//                                     </div>
//
//                                 </div>
//
//                             </div>
//
//                             {/* Button Container */}
//                             <div className="mbp-button-container">
//
//                                 {/* Play Button */}
//                                 <Link
//                                     className="mbp-button mbp-play-button"
//                                     to="/section-four-quiz"
//                                 >
//                                     Play
//                                 </Link>
//
//                                 {/* Not Now Button */}
//                                 <button className="mbp-button mbp-cancel-button">
//                                     Not Now
//                                 </button>
//
//                             </div>
//
//                             {/* Character Container */}
//                             <div className="mbp-character-container">
//                                 <img src={AlfieImg} alt="Alfie"/>
//                             </div>
//
//                         </div>
//
//                     </div>
//                 ) ||
//                 selectedInteraction == Interaction.locations.Quiz[4] && (
//                     <div className="map-button-popup">
//
//                         {/* Container */}
//                         <div className="m-b-p-main-container">
//
//                             {/* Close Button */}
//                             <button
//                                 className="mbp-close-container"
//                                 onClick={() => { setSelectedInteraction(null) }}
//                             >
//                                 <img src={CloseButton} alt="Close Menu"/>
//                             </button>
//
//                             {/* Quote Bubble */}
//                             <div className="mbp-bubble-container">
//
//                                 {/* Image */}
//                                 <img src={BubbleImage} alt="Quote Bubble"/>
//
//                                 {/* Text */}
//                                 <div className="mbpb-title-container">
//
//                                     {/* Title */}
//                                     <div className="mbpb-title">
//                                         { selectedInteraction.title }
//                                     </div>
//
//                                     {/* Description */}
//                                     <div className="mbpb-description">
//                                         { selectedInteraction.description }
//                                     </div>
//
//                                 </div>
//
//                             </div>
//
//                             {/* Button Container */}
//                             <div className="mbp-button-container">
//
//                                 {/* Play Button */}
//                                 <Link
//                                     className="mbp-button mbp-play-button"
//                                     to="/section-five-quiz"
//                                 >
//                                     Play
//                                 </Link>
//
//                                 {/* Not Now Button */}
//                                 <button className="mbp-button mbp-cancel-button">
//                                     Not Now
//                                 </button>
//
//                             </div>
//
//                             {/* Character Container */}
//                             <div className="mbp-character-container">
//                                 <img src={AlfieImg} alt="Alfie"/>
//                             </div>
//
//                         </div>
//
//                     </div>
//                 ) ||
//                 selectedInteraction == Interaction.locations.Quiz[5] && (
//                     <div className="map-button-popup">
//
//                         {/* Container */}
//                         <div className="m-b-p-main-container">
//
//                             {/* Close Button */}
//                             <button
//                                 className="mbp-close-container"
//                                 onClick={() => { setSelectedInteraction(null) }}
//                             >
//                                 <img src={CloseButton} alt="Close Menu"/>
//                             </button>
//
//                             {/* Quote Bubble */}
//                             <div className="mbp-bubble-container">
//
//                                 {/* Image */}
//                                 <img src={BubbleImage} alt="Quote Bubble"/>
//
//                                 {/* Text */}
//                                 <div className="mbpb-title-container">
//
//                                     {/* Title */}
//                                     <div className="mbpb-title">
//                                         { selectedInteraction.title }
//                                     </div>
//
//                                     {/* Description */}
//                                     <div className="mbpb-description">
//                                         { selectedInteraction.description }
//                                     </div>
//
//                                 </div>
//
//                             </div>
//
//                             {/* Button Container */}
//                             <div className="mbp-button-container">
//
//                                 {/* Play Button */}
//                                 <Link
//                                     className="mbp-button mbp-play-button"
//                                     to="/section-six-quiz"
//                                 >
//                                     Play
//                                 </Link>
//
//                                 {/* Not Now Button */}
//                                 <button className="mbp-button mbp-cancel-button">
//                                     Not Now
//                                 </button>
//
//                             </div>
//
//                             {/* Character Container */}
//                             <div className="mbp-character-container">
//                                 <img src={AlfieImg} alt="Alfie"/>
//                             </div>
//
//                         </div>
//
//                     </div>
//                 ) ||
//                 selectedInteraction == Interaction.locations.Quiz[6] && (
//                     <div className="map-button-popup">
//
//                         {/* Container */}
//                         <div className="m-b-p-main-container">
//
//                             {/* Close Button */}
//                             <button
//                                 className="mbp-close-container"
//                                 onClick={() => { setSelectedInteraction(null) }}
//                             >
//                                 <img src={CloseButton} alt="Close Menu"/>
//                             </button>
//
//                             {/* Quote Bubble */}
//                             <div className="mbp-bubble-container">
//
//                                 {/* Image */}
//                                 <img src={BubbleImage} alt="Quote Bubble"/>
//
//                                 {/* Text */}
//                                 <div className="mbpb-title-container">
//
//                                     {/* Title */}
//                                     <div className="mbpb-title">
//                                         { selectedInteraction.title }
//                                     </div>
//
//                                     {/* Description */}
//                                     <div className="mbpb-description">
//                                         { selectedInteraction.description }
//                                     </div>
//
//                                 </div>
//
//                             </div>
//
//                             {/* Button Container */}
//                             <div className="mbp-button-container">
//
//                                 {/* Play Button */}
//                                 <Link
//                                     className="mbp-button mbp-play-button"
//                                     to="/section-seven-quiz"
//                                 >
//                                     Play
//                                 </Link>
//
//                                 {/* Not Now Button */}
//                                 <button className="mbp-button mbp-cancel-button">
//                                     Not Now
//                                 </button>
//
//                             </div>
//
//                             {/* Character Container */}
//                             <div className="mbp-character-container">
//                                 <img src={AlfieImg} alt="Alfie"/>
//                             </div>
//
//                         </div>
//
//                     </div>
//                 ) ||
//                 selectedInteraction == Interaction.locations.Quiz[7] && (
//                     <div className="map-button-popup">
//
//                         {/* Container */}
//                         <div className="m-b-p-main-container">
//
//                             {/* Close Button */}
//                             <button
//                                 className="mbp-close-container"
//                                 onClick={() => { setSelectedInteraction(null) }}
//                             >
//                                 <img src={CloseButton} alt="Close Menu"/>
//                             </button>
//
//                             {/* Quote Bubble */}
//                             <div className="mbp-bubble-container">
//
//                                 {/* Image */}
//                                 <img src={BubbleImage} alt="Quote Bubble"/>
//
//                                 {/* Text */}
//                                 <div className="mbpb-title-container">
//
//                                     {/* Title */}
//                                     <div className="mbpb-title">
//                                         { selectedInteraction.title }
//                                     </div>
//
//                                     {/* Description */}
//                                     <div className="mbpb-description">
//                                         { selectedInteraction.description }
//                                     </div>
//
//                                 </div>
//
//                             </div>
//
//                             {/* Button Container */}
//                             <div className="mbp-button-container">
//
//                                 {/* Play Button */}
//                                 <Link
//                                     className="mbp-button mbp-play-button"
//                                     to="/section-eight-quiz"
//                                 >
//                                     Play
//                                 </Link>
//
//                                 {/* Not Now Button */}
//                                 <button className="mbp-button mbp-cancel-button">
//                                     Not Now
//                                 </button>
//
//                             </div>
//
//                             {/* Character Container */}
//                             <div className="mbp-character-container">
//                                 <img src={AlfieImg} alt="Alfie"/>
//                             </div>
//
//                         </div>
//
//                     </div>
//                 ) ||
//                 selectedInteraction == Interaction.locations.Quiz[8] && (
//                     <div className="map-button-popup">
//
//                         {/* Container */}
//                         <div className="m-b-p-main-container">
//
//                             {/* Close Button */}
//                             <button
//                                 className="mbp-close-container"
//                                 onClick={() => { setSelectedInteraction(null) }}
//                             >
//                                 <img src={CloseButton} alt="Close Menu"/>
//                             </button>
//
//                             {/* Quote Bubble */}
//                             <div className="mbp-bubble-container">
//
//                                 {/* Image */}
//                                 <img src={BubbleImage} alt="Quote Bubble"/>
//
//                                 {/* Text */}
//                                 <div className="mbpb-title-container">
//
//                                     {/* Title */}
//                                     <div className="mbpb-title">
//                                         { selectedInteraction.title }
//                                     </div>
//
//                                     {/* Description */}
//                                     <div className="mbpb-description">
//                                         { selectedInteraction.description }
//                                     </div>
//
//                                 </div>
//
//                             </div>
//
//                             {/* Button Container */}
//                             <div className="mbp-button-container">
//
//                                 {/* Play Button */}
//                                 <Link
//                                     className="mbp-button mbp-play-button"
//                                     to="/section-nine-quiz"
//                                 >
//                                     Play
//                                 </Link>
//
//                                 {/* Not Now Button */}
//                                 <button className="mbp-button mbp-cancel-button">
//                                     Not Now
//                                 </button>
//
//                             </div>
//
//                             {/* Character Container */}
//                             <div className="mbp-character-container">
//                                 <img src={AlfieImg} alt="Alfie"/>
//                             </div>
//
//                         </div>
//
//                     </div>
//                 )
//             }
//
//             {
//                 selectedInteraction === factEraOne && (
//                     <div className="map-button-popup">
//
//                         {/* Container */}
//                         <div className="m-b-p-main-container">
//
//                             {/* Close Button */}
//                             <button
//                                 className="mbp-close-container"
//                                 onClick={() => { setSelectedInteraction(null) }}
//                             >
//                                 <img src={CloseButton} alt="Close Menu"/>
//                             </button>
//
//                             {/* Quote Bubble */}
//                             <div className="mbp-bubble-container">
//
//                                 {/* Image */}
//                                 <img src={BubbleImage} alt="Quote Bubble"/>
//
//                                 {/* Text */}
//                                 <div className="mbpb-title-container">
//
//                                     {/* Title */}
//                                     <div className="mbpb-title">
//                                         { selectedInteraction.title }
//                                     </div>
//
//                                     {/* Description */}
//                                     <div className="mbpb-description">
//                                         { selectedInteraction.description }
//                                     </div>
//
//                                 </div>
//
//                             </div>
//
//                             {/* Button Container */}
//                             <div className="mbp-button-container">
//
//                                 {/* Play Button */}
//                                 <Link
//                                     className="mbp-button mbp-play-button"
//                                     to="/section-one-fact"
//                                     onClick={() => { selectedInteraction.complete = true }
//                                     }
//                                 >
//                                     Learn
//                                 </Link>
//
//                                 {/* Not Now Button */}
//                                 <button className="mbp-button mbp-cancel-button">
//                                     Not Now
//                                 </button>
//
//                             </div>
//
//                             {/* Character Container */}
//                             <div className="mbp-character-container">
//                                 <img src={AlfieImg} alt="Alfie"/>
//                             </div>
//
//                         </div>
//
//                     </div>
//                 ) ||
//                 selectedInteraction == Interaction.locations.Fact[1] && (
//                     <div className="map-button-popup">
//
//                         {/* Container */}
//                         <div className="m-b-p-main-container">
//
//                             {/* Close Button */}
//                             <button
//                                 className="mbp-close-container"
//                                 onClick={() => { setSelectedInteraction(null) }}
//                             >
//                                 <img src={CloseButton} alt="Close Menu"/>
//                             </button>
//
//                             {/* Quote Bubble */}
//                             <div className="mbp-bubble-container">
//
//                                 {/* Image */}
//                                 <img src={BubbleImage} alt="Quote Bubble"/>
//
//                                 {/* Text */}
//                                 <div className="mbpb-title-container">
//
//                                     {/* Title */}
//                                     <div className="mbpb-title">
//                                         { selectedInteraction.title }
//                                     </div>
//
//                                     {/* Description */}
//                                     <div className="mbpb-description">
//                                         { selectedInteraction.description }
//                                     </div>
//
//                                 </div>
//
//                             </div>
//
//                             {/* Button Container */}
//                             <div className="mbp-button-container">
//
//                                 {/* Play Button */}
//                                 <Link
//                                     className="mbp-button mbp-play-button"
//                                     to="/section-two-fact"
//                                 >
//                                     Learn
//                                 </Link>
//
//                                 {/* Not Now Button */}
//                                 <button className="mbp-button mbp-cancel-button">
//                                     Not Now
//                                 </button>
//
//                             </div>
//
//                             {/* Character Container */}
//                             <div className="mbp-character-container">
//                                 <img src={AlfieImg} alt="Alfie"/>
//                             </div>
//
//                         </div>
//
//                     </div>
//                 ) ||
//                 selectedInteraction == Interaction.locations.Fact[2] && (
//                     <div className="map-button-popup">
//
//                         {/* Container */}
//                         <div className="m-b-p-main-container">
//
//                             {/* Close Button */}
//                             <button
//                                 className="mbp-close-container"
//                                 onClick={() => { setSelectedInteraction(null) }}
//                             >
//                                 <img src={CloseButton} alt="Close Menu"/>
//                             </button>
//
//                             {/* Quote Bubble */}
//                             <div className="mbp-bubble-container">
//
//                                 {/* Image */}
//                                 <img src={BubbleImage} alt="Quote Bubble"/>
//
//                                 {/* Text */}
//                                 <div className="mbpb-title-container">
//
//                                     {/* Title */}
//                                     <div className="mbpb-title">
//                                         { selectedInteraction.title }
//                                     </div>
//
//                                     {/* Description */}
//                                     <div className="mbpb-description">
//                                         { selectedInteraction.description }
//                                     </div>
//
//                                 </div>
//
//                             </div>
//
//                             {/* Button Container */}
//                             <div className="mbp-button-container">
//
//                                 {/* Play Button */}
//                                 <Link
//                                     className="mbp-button mbp-play-button"
//                                     to="/section-three-fact"
//                                 >
//                                     Learn
//                                 </Link>
//
//                                 {/* Not Now Button */}
//                                 <button className="mbp-button mbp-cancel-button">
//                                     Not Now
//                                 </button>
//
//                             </div>
//
//                             {/* Character Container */}
//                             <div className="mbp-character-container">
//                                 <img src={AlfieImg} alt="Alfie"/>
//                             </div>
//
//                         </div>
//
//                     </div>
//                 ) ||
//                 selectedInteraction == Interaction.locations.Fact[3] && (
//                     <div className="map-button-popup">
//
//                         {/* Container */}
//                         <div className="m-b-p-main-container">
//
//                             {/* Close Button */}
//                             <button
//                                 className="mbp-close-container"
//                                 onClick={() => { setSelectedInteraction(null) }}
//                             >
//                                 <img src={CloseButton} alt="Close Menu"/>
//                             </button>
//
//                             {/* Quote Bubble */}
//                             <div className="mbp-bubble-container">
//
//                                 {/* Image */}
//                                 <img src={BubbleImage} alt="Quote Bubble"/>
//
//                                 {/* Text */}
//                                 <div className="mbpb-title-container">
//
//                                     {/* Title */}
//                                     <div className="mbpb-title">
//                                         { selectedInteraction.title }
//                                     </div>
//
//                                     {/* Description */}
//                                     <div className="mbpb-description">
//                                         { selectedInteraction.description }
//                                     </div>
//
//                                 </div>
//
//                             </div>
//
//                             {/* Button Container */}
//                             <div className="mbp-button-container">
//
//                                 {/* Play Button */}
//                                 <Link
//                                     className="mbp-button mbp-play-button"
//                                     to="/section-four-fact"
//                                 >
//                                     Learn
//                                 </Link>
//
//                                 {/* Not Now Button */}
//                                 <button className="mbp-button mbp-cancel-button">
//                                     Not Now
//                                 </button>
//
//                             </div>
//
//                             {/* Character Container */}
//                             <div className="mbp-character-container">
//                                 <img src={AlfieImg} alt="Alfie"/>
//                             </div>
//
//                         </div>
//
//                     </div>
//                 ) ||
//                 selectedInteraction == Interaction.locations.Fact[4] && (
//                     <div className="map-button-popup">
//
//                         {/* Container */}
//                         <div className="m-b-p-main-container">
//
//                             {/* Close Button */}
//                             <button
//                                 className="mbp-close-container"
//                                 onClick={() => { setSelectedInteraction(null) }}
//                             >
//                                 <img src={CloseButton} alt="Close Menu"/>
//                             </button>
//
//                             {/* Quote Bubble */}
//                             <div className="mbp-bubble-container">
//
//                                 {/* Image */}
//                                 <img src={BubbleImage} alt="Quote Bubble"/>
//
//                                 {/* Text */}
//                                 <div className="mbpb-title-container">
//
//                                     {/* Title */}
//                                     <div className="mbpb-title">
//                                         { selectedInteraction.title }
//                                     </div>
//
//                                     {/* Description */}
//                                     <div className="mbpb-description">
//                                         { selectedInteraction.description }
//                                     </div>
//
//                                 </div>
//
//                             </div>
//
//                             {/* Button Container */}
//                             <div className="mbp-button-container">
//
//                                 {/* Play Button */}
//                                 <Link
//                                     className="mbp-button mbp-play-button"
//                                     to="/section-five-fact"
//                                 >
//                                     Learn
//                                 </Link>
//
//                                 {/* Not Now Button */}
//                                 <button className="mbp-button mbp-cancel-button">
//                                     Not Now
//                                 </button>
//
//                             </div>
//
//                             {/* Character Container */}
//                             <div className="mbp-character-container">
//                                 <img src={AlfieImg} alt="Alfie"/>
//                             </div>
//
//                         </div>
//
//                     </div>
//                 ) ||
//                 selectedInteraction == Interaction.locations.Fact[5] && (
//                     <div className="map-button-popup">
//
//                         {/* Container */}
//                         <div className="m-b-p-main-container">
//
//                             {/* Close Button */}
//                             <button
//                                 className="mbp-close-container"
//                                 onClick={() => { setSelectedInteraction(null) }}
//                             >
//                                 <img src={CloseButton} alt="Close Menu"/>
//                             </button>
//
//                             {/* Quote Bubble */}
//                             <div className="mbp-bubble-container">
//
//                                 {/* Image */}
//                                 <img src={BubbleImage} alt="Quote Bubble"/>
//
//                                 {/* Text */}
//                                 <div className="mbpb-title-container">
//
//                                     {/* Title */}
//                                     <div className="mbpb-title">
//                                         { selectedInteraction.title }
//                                     </div>
//
//                                     {/* Description */}
//                                     <div className="mbpb-description">
//                                         { selectedInteraction.description }
//                                     </div>
//
//                                 </div>
//
//                             </div>
//
//                             {/* Button Container */}
//                             <div className="mbp-button-container">
//
//                                 {/* Play Button */}
//                                 <Link
//                                     className="mbp-button mbp-play-button"
//                                     to="/section-six-fact"
//                                 >
//                                     Learn
//                                 </Link>
//
//                                 {/* Not Now Button */}
//                                 <button className="mbp-button mbp-cancel-button">
//                                     Not Now
//                                 </button>
//
//                             </div>
//
//                             {/* Character Container */}
//                             <div className="mbp-character-container">
//                                 <img src={AlfieImg} alt="Alfie"/>
//                             </div>
//
//                         </div>
//
//                     </div>
//                 ) ||
//                 selectedInteraction == Interaction.locations.Fact[6] && (
//                     <div className="map-button-popup">
//
//                         {/* Container */}
//                         <div className="m-b-p-main-container">
//
//                             {/* Close Button */}
//                             <button
//                                 className="mbp-close-container"
//                                 onClick={() => { setSelectedInteraction(null) }}
//                             >
//                                 <img src={CloseButton} alt="Close Menu"/>
//                             </button>
//
//                             {/* Quote Bubble */}
//                             <div className="mbp-bubble-container">
//
//                                 {/* Image */}
//                                 <img src={BubbleImage} alt="Quote Bubble"/>
//
//                                 {/* Text */}
//                                 <div className="mbpb-title-container">
//
//                                     {/* Title */}
//                                     <div className="mbpb-title">
//                                         { selectedInteraction.title }
//                                     </div>
//
//                                     {/* Description */}
//                                     <div className="mbpb-description">
//                                         { selectedInteraction.description }
//                                     </div>
//
//                                 </div>
//
//                             </div>
//
//                             {/* Button Container */}
//                             <div className="mbp-button-container">
//
//                                 {/* Play Button */}
//                                 <Link
//                                     className="mbp-button mbp-play-button"
//                                     to="/section-seven-fact"
//                                 >
//                                     Learn
//                                 </Link>
//
//                                 {/* Not Now Button */}
//                                 <button className="mbp-button mbp-cancel-button">
//                                     Not Now
//                                 </button>
//
//                             </div>
//
//                             {/* Character Container */}
//                             <div className="mbp-character-container">
//                                 <img src={AlfieImg} alt="Alfie"/>
//                             </div>
//
//                         </div>
//
//                     </div>
//                 ) ||
//                 selectedInteraction == Interaction.locations.Fact[7] && (
//                     <div className="map-button-popup">
//
//                         {/* Container */}
//                         <div className="m-b-p-main-container">
//
//                             {/* Close Button */}
//                             <button
//                                 className="mbp-close-container"
//                                 onClick={() => { setSelectedInteraction(null) }}
//                             >
//                                 <img src={CloseButton} alt="Close Menu"/>
//                             </button>
//
//                             {/* Quote Bubble */}
//                             <div className="mbp-bubble-container">
//
//                                 {/* Image */}
//                                 <img src={BubbleImage} alt="Quote Bubble"/>
//
//                                 {/* Text */}
//                                 <div className="mbpb-title-container">
//
//                                     {/* Title */}
//                                     <div className="mbpb-title">
//                                         { selectedInteraction.title }
//                                     </div>
//
//                                     {/* Description */}
//                                     <div className="mbpb-description">
//                                         { selectedInteraction.description }
//                                     </div>
//
//                                 </div>
//
//                             </div>
//
//                             {/* Button Container */}
//                             <div className="mbp-button-container">
//
//                                 {/* Play Button */}
//                                 <Link
//                                     className="mbp-button mbp-play-button"
//                                     to="/section-eight-fact"
//                                 >
//                                     Learn
//                                 </Link>
//
//                                 {/* Not Now Button */}
//                                 <button className="mbp-button mbp-cancel-button">
//                                     Not Now
//                                 </button>
//
//                             </div>
//
//                             {/* Character Container */}
//                             <div className="mbp-character-container">
//                                 <img src={AlfieImg} alt="Alfie"/>
//                             </div>
//
//                         </div>
//
//                     </div>
//                 ) ||
//                 selectedInteraction == Interaction.locations.Fact[8] && (
//                     <div className="map-button-popup">
//
//                         {/* Container */}
//                         <div className="m-b-p-main-container">
//
//                             {/* Close Button */}
//                             <button
//                                 className="mbp-close-container"
//                                 onClick={() => { setSelectedInteraction(null) }}
//                             >
//                                 <img src={CloseButton} alt="Close Menu"/>
//                             </button>
//
//                             {/* Quote Bubble */}
//                             <div className="mbp-bubble-container">
//
//                                 {/* Image */}
//                                 <img src={BubbleImage} alt="Quote Bubble"/>
//
//                                 {/* Text */}
//                                 <div className="mbpb-title-container">
//
//                                     {/* Title */}
//                                     <div className="mbpb-title">
//                                         { selectedInteraction.title }
//                                     </div>
//
//                                     {/* Description */}
//                                     <div className="mbpb-description">
//                                         { selectedInteraction.description }
//                                     </div>
//
//                                 </div>
//
//                             </div>
//
//                             {/* Button Container */}
//                             <div className="mbp-button-container">
//
//                                 {/* Play Button */}
//                                 <Link
//                                     className="mbp-button mbp-play-button"
//                                     to="/section-nine-fact"
//                                 >
//                                     Learn
//                                 </Link>
//
//                                 {/* Not Now Button */}
//                                 <button className="mbp-button mbp-cancel-button">
//                                     Not Now
//                                 </button>
//
//                             </div>
//
//                             {/* Character Container */}
//                             <div className="mbp-character-container">
//                                 <img src={AlfieImg} alt="Alfie"/>
//                             </div>
//
//                         </div>
//
//                     </div>
//                 )
//             }
//
//             {
//                 selectedInteraction === Interaction.locations.Picture[0] && (
//                     <div className="map-info-window">
//                         <InfoWindow
//                             position={{
//                                 lat: selectedInteraction.coordinates[0] + 0.000033,
//                                 lng: selectedInteraction.coordinates[1]
//                             }}
//                             onCloseClick={() => {
//                                 setSelectedInteraction(null);
//                             }}
//                         >
//                             <div className="map-button">
//                                 <h2>{ selectedInteraction.type }</h2>
//                                 <Link
//                                     to="/section-one-pic"
//                                     className="basic-btn fact-btn"
//                                     onClick={() => {selectedInteraction.complete = true }}
//                                 >
//                                     <h3>{ selectedInteraction.description }</h3>
//                                 </Link>
//                             </div>
//                         </InfoWindow>
//                     </div>
//                 )
//             }
//
//         </GoogleMap>
//     )
// }
//
// const WrappedMap = withScriptjs(withGoogleMap(UnwrappedMap));
//
// export default function Map() {
//     return (
//         <div className="map-section-container">
//
//             {/* Header Section */}
//             <div className="w-m-header-container">
//
//                 {/* Background Image */}
//                 <div className="w-m-h-image">
//                     <img src={HeaderBackdrop} alt="Header Section"/>
//                 </div>
//
//                 {/* Inner Container */}
//                 <div className="w-m-h-inner-container">
//
//                     {/* Character Icon */}
//                     <div className="w-m-h-character">
//                         <img src={CharIcon} alt="User" />
//                     </div>
//
//                     {/* Experience Bar */}
//                     <div className="w-m-h-score-container">
//
//                         {/* Text */}
//                         <div className="wmhs-title">
//                             0 points
//                         </div>
//
//                         {/* Completion Bar */}
//                         <div className="wmhs-bar">
//
//                         </div>
//
//                     </div>
//
//                     {/* Settings Icon */}
//                     <div className="w-m-h-settings">
//                         <img src={SettingsIcon} alt="Settings"/>
//                     </div>
//
//                 </div>
//
//             </div>
//
//             {/* Map Container */}
//             <div className="wrapped-map-inner-container">
//                 <WrappedMap
//                     googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
//                     loadingElement={ <div style={{height: '100%'}} /> }
//                     containerElement={ <div style={{height: '100%'}} />}
//                     mapElement={ <div className="map-element-container" />}
//
//                 />
//             </div>
//
//             {/* Footer Section */}
//         </div>
//     )
// }

/* global google */
import React, {useEffect, useState} from 'react';
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

import GameIcon from './assets/game-icon.svg'; import CharIcon from './assets/header-char-icon.svg'; import SettingsIcon from './assets/settings-icon.svg';
import QuizIncomplete from './assets/quiz-icon.svg'; import QuizComplete from './assets/quiz-complete.svg'; import QuizLocked from './assets/quiz-locked.svg';
import FactIncomplete from './assets/fact-icon.svg'; import FactComplete from './assets/fact-complete.svg'; import FactLocked from './assets/fact-locked.svg';
import PicIncomplete from './assets/picture-incomplete.svg'; import PicComplete from './assets/picture-complete.svg';

import HeaderBackdrop from './assets/header-background.svg'; import BubbleImage from './assets/bubble.svg';
import AlfieImg from './assets/alfie-image.png';
import MapOverlay from './assets/main-building.svg'; import CloseButton from './assets/16/icon.svg';

// Impromptu JSON data for locations
export const Interaction = {
    locations: {
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
        ],

        Sections: [
            {
                era: 1,
                complete: false,
                unlocked: true,
                centerCoords: [51.523196, -2.578249],
                quiz: {
                    coordinates: [51.523176, -2.578209],
                    title: 'QUIZ TIME!',
                    description: "Do you want to play with me and earn some points?",
                    complete: false,
                },
                fact: {
                    coordinates: [51.523226, -2.578289],
                    title: "FACT TIME!",
                    description: "Do you want to learn with me and earn some points?",
                    complete: false
                }
            },
            {
                era: 2,
                complete: false,
                unlocked: false,
                centerCoords: [51.523315, -2.578260],
                quiz: {
                    coordinates: [51.523315, -2.578260],
                    title: 'QUIZ TIME!',
                    description: "Do you want to play with me and earn some points?",
                    complete: false,
                },
                fact: {
                    coordinates: [51.523265, -2.577975],
                    title: "FACT TIME!",
                    description: "Do you want to learn with me and earn some points?",
                    complete: false
                }
            },
            {
                era: 3,
                complete: false,
                unlocked: false,
                centerCoords: [51.523365, -2.578005],
                quiz: {
                    coordinates: [51.523365, -2.578005],
                    title: 'QUIZ TIME!',
                    description: "Do you want to play with me and earn some points?",
                    complete: false,
                },
                fact: {
                    coordinates: [51.523405, -2.578095],
                    title: "FACT TIME!",
                    description: "Do you want to learn with me and earn some points?",
                    complete: false
                }
            },
            {
                era: 4,
                complete: false,
                unlocked: false,
                centerCoords: [51.523565, -2.578309],
                quiz: {
                    coordinates: [51.523565, -2.578309],
                    title: 'QUIZ TIME!',
                    description: "Do you want to play with me and earn some points?",
                    complete: false,
                },
                fact: {
                    coordinates: [51.523485, -2.578159],
                    title: "FACT TIME!",
                    description: "Do you want to learn with me and earn some points?",
                    complete: false
                }
            },
            {
                era: 5,
                complete: false,
                unlocked: false,
                centerCoords: [51.523395, -2.578309],
                quiz: {
                    coordinates: [51.523395, -2.578309],
                    title: 'QUIZ TIME!',
                    description: "Do you want to play with me and earn some points?",
                    complete: false,
                },
                fact: {
                    coordinates: [51.523425, -2.578509],
                    title: "FACT TIME!",
                    description: "Do you want to learn with me and earn some points?",
                    complete: false
                }
            },
            {
                era: 6,
                complete: false,
                unlocked: false,
                centerCoords: [51.523265, -2.578649],
                quiz: {
                    coordinates: [51.523265, -2.578649],
                    title: 'QUIZ TIME!',
                    description: "Do you want to play with me and earn some points?",
                    complete: false,
                },
                fact: {
                    coordinates: [51.523315, -2.578549],
                    title: "FACT TIME!",
                    description: "Do you want to learn with me and earn some points?",
                    complete: false
                }
            },
            {
                era: 7,
                complete: false,
                unlocked: false,
                centerCoords: [51.523176, -2.578409],
                quiz: {
                    coordinates: [51.523176, -2.578409],
                    title: 'QUIZ TIME!',
                    description: "Do you want to play with me and earn some points?",
                    complete: false,
                },
                fact: {
                    coordinates: [51.523116, -2.578329],
                    title: "FACT TIME!",
                    description: "Do you want to learn with me and earn some points?",
                    complete: false
                }
            },
            {
                era: 8,
                complete: false,
                unlocked: false,
                centerCoords: [51.523076, -2.578259],
                quiz: {
                    coordinates: [51.523076, -2.578259],
                    title: 'QUIZ TIME!',
                    description: "Do you want to play with me and earn some points?",
                    complete: false,
                },
                fact: {
                    coordinates: [51.523066, -2.578419],
                    title: "FACT TIME!",
                    description: "Do you want to learn with me and earn some points?",
                    complete: false
                }
            },
            {
                era: 9,
                complete: false,
                unlocked: false,
                centerCoords: [51.522776, -2.579259],
                quiz: {
                    coordinates: [51.522776, -2.579259],
                    title: 'QUIZ TIME!',
                    description: "Do you want to play with me and earn some points?",
                    complete: false,
                },
                fact: {
                    coordinates: [51.522756, -2.579059],
                    title: "FACT TIME!",
                    description: "Do you want to learn with me and earn some points?",
                    complete: false
                }
            },
        ]
    },
}

function UnwrappedMap() {

    const [selectedInteraction, setSelectedInteraction] = useState(null);
    const [latitude, setLatitude] = useState(51.523196);
    const [longitude, setLongitude] = useState(-2.578249);

    const eras = Interaction.locations.Sections
    const quizEraOne = eras[0].quiz; const factEraOne = eras[0].fact;
    const quizEraTwo = eras[1].quiz; const factEraTwo = eras[1].fact;
    const quizEraThree = eras[2].quiz; const factEraThree = eras[2].fact;
    const quizEraFour = eras[3].quiz; const factEraFour = eras[3].fact;
    const quizEraFive = eras[4].quiz; const factEraFive = eras[4].fact;
    const quizEraSix = eras[5].quiz; const factEraSix = eras[5].fact;
    const quizEraSeven = eras[6].quiz; const factEraSeven = eras[6].fact;
    const quizEraEight = eras[7].quiz; const factEraEight = eras[7].fact;
    const quizEraNine = eras[8].quiz; const factEraNine = eras[8].fact;

    const isEraOneComplete = () => {
        const era = eras[0];
        const quiz = eras[0].quiz;
        const fact = eras[0].fact;

        if (fact.complete && quiz.complete) {
            era.complete = true;
            console.log("Era one is complete");
        } else {
            era.complete = false;
            console.log("Era one not complete yet!!")
        }
    }
    isEraOneComplete();
    const isEraTwoComplete = () => {
        const era = eras[1];
        const quiz = eras[1].quiz;
        const fact = eras[1].fact;

        if (fact.complete && quiz.complete) {
            era.complete = true;
            console.log("Era one is complete");
        } else {
            era.complete = false;
            console.log("Era one not complete yet!!")
        }
    }
    isEraTwoComplete();
    const isEraThreeComplete = () => {
        const era = eras[2];
        const quiz = eras[2].quiz;
        const fact = eras[2].fact;

        if (fact.complete && quiz.complete) {
            era.complete = true;
            console.log("Era one is complete");
        } else {
            era.complete = false;
            console.log("Era one not complete yet!!")
        }
    }
    isEraThreeComplete();
    const isEraFourComplete = () => {
        const era = eras[3];
        const quiz = eras[3].quiz;
        const fact = eras[3].fact;

        if (fact.complete && quiz.complete) {
            era.complete = true;
            console.log("Era one is complete");
        } else {
            era.complete = false;
            console.log("Era one not complete yet!!")
        }
    }
    isEraFourComplete();
    const isEraFiveComplete = () => {
        const era = eras[4];
        const quiz = eras[4].quiz;
        const fact = eras[4].fact;

        if (fact.complete && quiz.complete) {
            era.complete = true;
            console.log("Era one is complete");
        } else {
            era.complete = false;
            console.log("Era one not complete yet!!")
        }
    }
    isEraFiveComplete();
    const isEraSixComplete = () => {
        const era = eras[5];
        const quiz = eras[5].quiz;
        const fact = eras[5].fact;

        if (fact.complete && quiz.complete) {
            era.complete = true;
            console.log("Era one is complete");
        } else {
            era.complete = false;
            console.log("Era one not complete yet!!")
        }
    }
    isEraSixComplete();

    if(eras[0].complete) { eras[1].unlocked = true }
    if(eras[1].complete) { eras[2].unlocked = true }
    if(eras[2].complete) { eras[3].unlocked = true }
    if(eras[3].complete) { eras[4].unlocked = true }
    if(eras[4].complete) { eras[5].unlocked = true }
    if(eras[5].complete) { eras[6].unlocked = true }
    if(eras[6].complete) { eras[7].unlocked = true }
    if(eras[7].complete) { eras[8].unlocked = true }

    // Sets Location when an era is completed
    useEffect(() => {
        if(!eras[0].complete) {
            setLatitude(eras[0].centerCoords[0])
            setLongitude(eras[0].centerCoords[1])
        }

        if(eras[0].complete && !eras[1].complete) {
            setLatitude(eras[1].centerCoords[0])
            setLongitude(eras[1].centerCoords[1])
        }
    })

    console.log("Set Lat: " + setLatitude + ", Set Lon: " + setLongitude)
    console.log("Lat: " + latitude + ", Lon: " + longitude)


    return (
        // Creates map
        <GoogleMap
            defaultZoom={21}
            defaultCenter={{lat: 51.523176, lng: -2.578209}}
            center={{lat: latitude, lng: longitude}}
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

            {
                Interaction.locations.Sections.map((interaction) => (
                    <div>
                        <Marker
                            key={interaction.quiz.id}
                            position={{
                                lat: interaction.quiz.coordinates[0],
                                lng: interaction.quiz.coordinates[1]
                            }}
                            onClick={() => {
                                interaction.unlocked === true && interaction.quiz.complete === false ? setSelectedInteraction(interaction.quiz) :
                                console.log("N/A")
                            }}
                            icon={
                                interaction.unlocked === true && interaction.quiz.complete === true ? QuizComplete :
                                interaction.unlocked === true && interaction.quiz.complete === false ? QuizIncomplete :
                                interaction.unlocked === false ? QuizLocked : null
                            }
                        />
                        <Marker
                            key={interaction.fact.id}
                            position={{
                                lat: interaction.fact.coordinates[0],
                                lng: interaction.fact.coordinates[1]
                            }}
                            onClick={() => {
                                interaction.unlocked === true && interaction.fact.complete === false ? setSelectedInteraction(interaction.fact) :
                                console.log("N/A")
                            }}
                            icon={
                                interaction.unlocked === true && interaction.fact.complete === true ? FactComplete :
                                interaction.unlocked === true && interaction.fact.complete === false ? FactIncomplete :
                                interaction.unlocked === false ? FactLocked : null
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
                selectedInteraction === quizEraOne && (
                    <div className="map-button-popup">

                        {/* Container */}
                        <div className="m-b-p-main-container">

                            {/* Close Button */}
                            <button
                                className="mbp-close-container"
                                onClick={() => { setSelectedInteraction(null) }}
                            >
                                <img src={CloseButton} alt="Close Menu"/>
                            </button>

                            {/* Quote Bubble */}
                            <div className="mbp-bubble-container">

                                {/* Image */}
                                <img src={BubbleImage} alt="Quote Bubble"/>

                                {/* Text */}
                                <div className="mbpb-title-container">

                                    {/* Title */}
                                    <div className="mbpb-title">
                                        { selectedInteraction.title }
                                    </div>

                                    {/* Description */}
                                    <div className="mbpb-description">
                                        { selectedInteraction.description }
                                    </div>

                                </div>

                            </div>

                            {/* Button Container */}
                            <div className="mbp-button-container">

                                {/* Play Button */}
                                <Link
                                    className="mbp-button mbp-play-button"
                                    to="/section-one-quiz"
                                    onClick={() => { selectedInteraction.complete = true }}
                                >
                                    Play
                                </Link>

                                {/* Not Now Button */}
                                <button className="mbp-button mbp-cancel-button">
                                    Not Now
                                </button>

                            </div>

                            {/* Character Container */}
                            <div className="mbp-character-container">
                                <img src={AlfieImg} alt="Character"/>
                            </div>

                        </div>

                    </div>
                ) ||
                selectedInteraction === quizEraTwo && (
                    <div className="map-button-popup">

                        {/* Container */}
                        <div className="m-b-p-main-container">

                            {/* Close Button */}
                            <button
                                className="mbp-close-container"
                                onClick={() => { setSelectedInteraction(null) }}
                            >
                                <img src={CloseButton} alt="Close Menu"/>
                            </button>

                            {/* Quote Bubble */}
                            <div className="mbp-bubble-container">

                                {/* Image */}
                                <img src={BubbleImage} alt="Quote Bubble"/>

                                {/* Text */}
                                <div className="mbpb-title-container">

                                    {/* Title */}
                                    <div className="mbpb-title">
                                        { selectedInteraction.title }
                                    </div>

                                    {/* Description */}
                                    <div className="mbpb-description">
                                        { selectedInteraction.description }
                                    </div>

                                </div>

                            </div>

                            {/* Button Container */}
                            <div className="mbp-button-container">

                                {/* Play Button */}
                                <Link
                                    className="mbp-button mbp-play-button"
                                    to="/section-two-quiz"
                                    onClick={() => { selectedInteraction.complete = true }}
                                >
                                    Play
                                </Link>

                                {/* Not Now Button */}
                                <button className="mbp-button mbp-cancel-button">
                                    Not Now
                                </button>

                            </div>

                            {/* Character Container */}
                            <div className="mbp-character-container">
                                <img src={AlfieImg} alt="Character"/>
                            </div>

                        </div>

                    </div>
                ) ||
                selectedInteraction === quizEraThree && (
                    <div className="map-button-popup">

                        {/* Container */}
                        <div className="m-b-p-main-container">

                            {/* Close Button */}
                            <button
                                className="mbp-close-container"
                                onClick={() => { setSelectedInteraction(null) }}
                            >
                                <img src={CloseButton} alt="Close Menu"/>
                            </button>

                            {/* Quote Bubble */}
                            <div className="mbp-bubble-container">

                                {/* Image */}
                                <img src={BubbleImage} alt="Quote Bubble"/>

                                {/* Text */}
                                <div className="mbpb-title-container">

                                    {/* Title */}
                                    <div className="mbpb-title">
                                        { selectedInteraction.title }
                                    </div>

                                    {/* Description */}
                                    <div className="mbpb-description">
                                        { selectedInteraction.description }
                                    </div>

                                </div>

                            </div>

                            {/* Button Container */}
                            <div className="mbp-button-container">

                                {/* Play Button */}
                                <Link
                                    className="mbp-button mbp-play-button"
                                    to="/section-three-quiz"
                                    onClick={() => { selectedInteraction.complete = true }}
                                >
                                    Play
                                </Link>

                                {/* Not Now Button */}
                                <button className="mbp-button mbp-cancel-button">
                                    Not Now
                                </button>

                            </div>

                            {/* Character Container */}
                            <div className="mbp-character-container">
                                <img src={AlfieImg} alt="Character"/>
                            </div>

                        </div>

                    </div>
                ) ||
                selectedInteraction === quizEraFour && (
                    <div className="map-button-popup">

                        {/* Container */}
                        <div className="m-b-p-main-container">

                            {/* Close Button */}
                            <button
                                className="mbp-close-container"
                                onClick={() => { setSelectedInteraction(null) }}
                            >
                                <img src={CloseButton} alt="Close Menu"/>
                            </button>

                            {/* Quote Bubble */}
                            <div className="mbp-bubble-container">

                                {/* Image */}
                                <img src={BubbleImage} alt="Quote Bubble"/>

                                {/* Text */}
                                <div className="mbpb-title-container">

                                    {/* Title */}
                                    <div className="mbpb-title">
                                        { selectedInteraction.title }
                                    </div>

                                    {/* Description */}
                                    <div className="mbpb-description">
                                        { selectedInteraction.description }
                                    </div>

                                </div>

                            </div>

                            {/* Button Container */}
                            <div className="mbp-button-container">

                                {/* Play Button */}
                                <Link
                                    className="mbp-button mbp-play-button"
                                    to="/section-four-quiz"
                                    onClick={() => { selectedInteraction.complete = true }}
                                >
                                    Play
                                </Link>

                                {/* Not Now Button */}
                                <button className="mbp-button mbp-cancel-button">
                                    Not Now
                                </button>

                            </div>

                            {/* Character Container */}
                            <div className="mbp-character-container">
                                <img src={AlfieImg} alt="Character"/>
                            </div>

                        </div>

                    </div>
                ) ||
                selectedInteraction === quizEraFive && (
                    <div className="map-button-popup">

                        {/* Container */}
                        <div className="m-b-p-main-container">

                            {/* Close Button */}
                            <button
                                className="mbp-close-container"
                                onClick={() => { setSelectedInteraction(null) }}
                            >
                                <img src={CloseButton} alt="Close Menu"/>
                            </button>

                            {/* Quote Bubble */}
                            <div className="mbp-bubble-container">

                                {/* Image */}
                                <img src={BubbleImage} alt="Quote Bubble"/>

                                {/* Text */}
                                <div className="mbpb-title-container">

                                    {/* Title */}
                                    <div className="mbpb-title">
                                        { selectedInteraction.title }
                                    </div>

                                    {/* Description */}
                                    <div className="mbpb-description">
                                        { selectedInteraction.description }
                                    </div>

                                </div>

                            </div>

                            {/* Button Container */}
                            <div className="mbp-button-container">

                                {/* Play Button */}
                                <Link
                                    className="mbp-button mbp-play-button"
                                    to="/section-five-quiz"
                                    onClick={() => { selectedInteraction.complete = true }}
                                >
                                    Play
                                </Link>

                                {/* Not Now Button */}
                                <button className="mbp-button mbp-cancel-button">
                                    Not Now
                                </button>

                            </div>

                            {/* Character Container */}
                            <div className="mbp-character-container">
                                <img src={AlfieImg} alt="Character"/>
                            </div>

                        </div>

                    </div>
                ) ||
                selectedInteraction === quizEraSix && (
                    <div className="map-button-popup">

                        {/* Container */}
                        <div className="m-b-p-main-container">

                            {/* Close Button */}
                            <button
                                className="mbp-close-container"
                                onClick={() => { setSelectedInteraction(null) }}
                            >
                                <img src={CloseButton} alt="Close Menu"/>
                            </button>

                            {/* Quote Bubble */}
                            <div className="mbp-bubble-container">

                                {/* Image */}
                                <img src={BubbleImage} alt="Quote Bubble"/>

                                {/* Text */}
                                <div className="mbpb-title-container">

                                    {/* Title */}
                                    <div className="mbpb-title">
                                        { selectedInteraction.title }
                                    </div>

                                    {/* Description */}
                                    <div className="mbpb-description">
                                        { selectedInteraction.description }
                                    </div>

                                </div>

                            </div>

                            {/* Button Container */}
                            <div className="mbp-button-container">

                                {/* Play Button */}
                                <Link
                                    className="mbp-button mbp-play-button"
                                    to="/section-six-quiz"
                                    onClick={() => { selectedInteraction.complete = true }}
                                >
                                    Play
                                </Link>

                                {/* Not Now Button */}
                                <button className="mbp-button mbp-cancel-button">
                                    Not Now
                                </button>

                            </div>

                            {/* Character Container */}
                            <div className="mbp-character-container">
                                <img src={AlfieImg} alt="Character"/>
                            </div>

                        </div>

                    </div>
                ) ||
                selectedInteraction === quizEraSeven && (
                    <div className="map-button-popup">

                        {/* Container */}
                        <div className="m-b-p-main-container">

                            {/* Close Button */}
                            <button
                                className="mbp-close-container"
                                onClick={() => { setSelectedInteraction(null) }}
                            >
                                <img src={CloseButton} alt="Close Menu"/>
                            </button>

                            {/* Quote Bubble */}
                            <div className="mbp-bubble-container">

                                {/* Image */}
                                <img src={BubbleImage} alt="Quote Bubble"/>

                                {/* Text */}
                                <div className="mbpb-title-container">

                                    {/* Title */}
                                    <div className="mbpb-title">
                                        { selectedInteraction.title }
                                    </div>

                                    {/* Description */}
                                    <div className="mbpb-description">
                                        { selectedInteraction.description }
                                    </div>

                                </div>

                            </div>

                            {/* Button Container */}
                            <div className="mbp-button-container">

                                {/* Play Button */}
                                <Link
                                    className="mbp-button mbp-play-button"
                                    to="/section-seven-quiz"
                                    onClick={() => { selectedInteraction.complete = true }}
                                >
                                    Play
                                </Link>

                                {/* Not Now Button */}
                                <button className="mbp-button mbp-cancel-button">
                                    Not Now
                                </button>

                            </div>

                            {/* Character Container */}
                            <div className="mbp-character-container">
                                <img src={AlfieImg} alt="Character"/>
                            </div>

                        </div>

                    </div>
                ) ||
                selectedInteraction === quizEraEight && (
                    <div className="map-button-popup">

                        {/* Container */}
                        <div className="m-b-p-main-container">

                            {/* Close Button */}
                            <button
                                className="mbp-close-container"
                                onClick={() => { setSelectedInteraction(null) }}
                            >
                                <img src={CloseButton} alt="Close Menu"/>
                            </button>

                            {/* Quote Bubble */}
                            <div className="mbp-bubble-container">

                                {/* Image */}
                                <img src={BubbleImage} alt="Quote Bubble"/>

                                {/* Text */}
                                <div className="mbpb-title-container">

                                    {/* Title */}
                                    <div className="mbpb-title">
                                        { selectedInteraction.title }
                                    </div>

                                    {/* Description */}
                                    <div className="mbpb-description">
                                        { selectedInteraction.description }
                                    </div>

                                </div>

                            </div>

                            {/* Button Container */}
                            <div className="mbp-button-container">

                                {/* Play Button */}
                                <Link
                                    className="mbp-button mbp-play-button"
                                    to="/section-eight-quiz"
                                    onClick={() => { selectedInteraction.complete = true }}
                                >
                                    Play
                                </Link>

                                {/* Not Now Button */}
                                <button className="mbp-button mbp-cancel-button">
                                    Not Now
                                </button>

                            </div>

                            {/* Character Container */}
                            <div className="mbp-character-container">
                                <img src={AlfieImg} alt="Character"/>
                            </div>

                        </div>

                    </div>
                ) ||
                selectedInteraction === quizEraNine && (
                    <div className="map-button-popup">

                        {/* Container */}
                        <div className="m-b-p-main-container">

                            {/* Close Button */}
                            <button
                                className="mbp-close-container"
                                onClick={() => { setSelectedInteraction(null) }}
                            >
                                <img src={CloseButton} alt="Close Menu"/>
                            </button>

                            {/* Quote Bubble */}
                            <div className="mbp-bubble-container">

                                {/* Image */}
                                <img src={BubbleImage} alt="Quote Bubble"/>

                                {/* Text */}
                                <div className="mbpb-title-container">

                                    {/* Title */}
                                    <div className="mbpb-title">
                                        { selectedInteraction.title }
                                    </div>

                                    {/* Description */}
                                    <div className="mbpb-description">
                                        { selectedInteraction.description }
                                    </div>

                                </div>

                            </div>

                            {/* Button Container */}
                            <div className="mbp-button-container">

                                {/* Play Button */}
                                <Link
                                    className="mbp-button mbp-play-button"
                                    to="/section-nine-quiz"
                                    onClick={() => { selectedInteraction.complete = true }}
                                >
                                    Play
                                </Link>

                                {/* Not Now Button */}
                                <button className="mbp-button mbp-cancel-button">
                                    Not Now
                                </button>

                            </div>

                            {/* Character Container */}
                            <div className="mbp-character-container">
                                <img src={AlfieImg} alt="Character"/>
                            </div>

                        </div>

                    </div>
                )
            }

            {
                selectedInteraction === factEraOne && (
                    <div className="map-button-popup">

                        {/* Container */}
                        <div className="m-b-p-main-container">

                            {/* Close Button */}
                            <button
                                className="mbp-close-container"
                                onClick={() => { setSelectedInteraction(null) }}
                            >
                                <img src={CloseButton} alt="Close Menu"/>
                            </button>

                            {/* Quote Bubble */}
                            <div className="mbp-bubble-container">

                                {/* Image */}
                                <img src={BubbleImage} alt="Quote Bubble"/>

                                {/* Text */}
                                <div className="mbpb-title-container">

                                    {/* Title */}
                                    <div className="mbpb-title">
                                        { selectedInteraction.title }
                                    </div>

                                    {/* Description */}
                                    <div className="mbpb-description">
                                        { selectedInteraction.description }
                                    </div>

                                </div>

                            </div>

                            {/* Button Container */}
                            <div className="mbp-button-container">

                                {/* Play Button */}
                                <Link
                                    className="mbp-button mbp-play-button"
                                    to="/section-one-fact"
                                    onClick={() => { selectedInteraction.complete = true }
                                    }
                                >
                                    Learn
                                </Link>

                                {/* Not Now Button */}
                                <button className="mbp-button mbp-cancel-button">
                                    Not Now
                                </button>

                            </div>

                            {/* Character Container */}
                            <div className="mbp-character-container">
                                <img src={AlfieImg} alt="Alfie"/>
                            </div>

                        </div>

                    </div>
                ) ||
                selectedInteraction === factEraTwo && (
                    <div className="map-button-popup">

                        {/* Container */}
                        <div className="m-b-p-main-container">

                            {/* Close Button */}
                            <button
                                className="mbp-close-container"
                                onClick={() => { setSelectedInteraction(null) }}
                            >
                                <img src={CloseButton} alt="Close Menu"/>
                            </button>

                            {/* Quote Bubble */}
                            <div className="mbp-bubble-container">

                                {/* Image */}
                                <img src={BubbleImage} alt="Quote Bubble"/>

                                {/* Text */}
                                <div className="mbpb-title-container">

                                    {/* Title */}
                                    <div className="mbpb-title">
                                        { selectedInteraction.title }
                                    </div>

                                    {/* Description */}
                                    <div className="mbpb-description">
                                        { selectedInteraction.description }
                                    </div>

                                </div>

                            </div>

                            {/* Button Container */}
                            <div className="mbp-button-container">

                                {/* Play Button */}
                                <Link
                                    className="mbp-button mbp-play-button"
                                    to="/section-two-fact"
                                    onClick={() => { selectedInteraction.complete = true }
                                    }
                                >
                                    Learn
                                </Link>

                                {/* Not Now Button */}
                                <button className="mbp-button mbp-cancel-button">
                                    Not Now
                                </button>

                            </div>

                            {/* Character Container */}
                            <div className="mbp-character-container">
                                <img src={AlfieImg} alt="Alfie"/>
                            </div>

                        </div>

                    </div>
                ) ||
                selectedInteraction === factEraThree && (
                    <div className="map-button-popup">

                        {/* Container */}
                        <div className="m-b-p-main-container">

                            {/* Close Button */}
                            <button
                                className="mbp-close-container"
                                onClick={() => { setSelectedInteraction(null) }}
                            >
                                <img src={CloseButton} alt="Close Menu"/>
                            </button>

                            {/* Quote Bubble */}
                            <div className="mbp-bubble-container">

                                {/* Image */}
                                <img src={BubbleImage} alt="Quote Bubble"/>

                                {/* Text */}
                                <div className="mbpb-title-container">

                                    {/* Title */}
                                    <div className="mbpb-title">
                                        { selectedInteraction.title }
                                    </div>

                                    {/* Description */}
                                    <div className="mbpb-description">
                                        { selectedInteraction.description }
                                    </div>

                                </div>

                            </div>

                            {/* Button Container */}
                            <div className="mbp-button-container">

                                {/* Play Button */}
                                <Link
                                    className="mbp-button mbp-play-button"
                                    to="/section-three-fact"
                                    onClick={() => { selectedInteraction.complete = true }
                                    }
                                >
                                    Learn
                                </Link>

                                {/* Not Now Button */}
                                <button className="mbp-button mbp-cancel-button">
                                    Not Now
                                </button>

                            </div>

                            {/* Character Container */}
                            <div className="mbp-character-container">
                                <img src={AlfieImg} alt="Alfie"/>
                            </div>

                        </div>

                    </div>
                ) ||
                selectedInteraction === factEraFour && (
                    <div className="map-button-popup">

                        {/* Container */}
                        <div className="m-b-p-main-container">

                            {/* Close Button */}
                            <button
                                className="mbp-close-container"
                                onClick={() => { setSelectedInteraction(null) }}
                            >
                                <img src={CloseButton} alt="Close Menu"/>
                            </button>

                            {/* Quote Bubble */}
                            <div className="mbp-bubble-container">

                                {/* Image */}
                                <img src={BubbleImage} alt="Quote Bubble"/>

                                {/* Text */}
                                <div className="mbpb-title-container">

                                    {/* Title */}
                                    <div className="mbpb-title">
                                        { selectedInteraction.title }
                                    </div>

                                    {/* Description */}
                                    <div className="mbpb-description">
                                        { selectedInteraction.description }
                                    </div>

                                </div>

                            </div>

                            {/* Button Container */}
                            <div className="mbp-button-container">

                                {/* Play Button */}
                                <Link
                                    className="mbp-button mbp-play-button"
                                    to="/section-four-fact"
                                    onClick={() => { selectedInteraction.complete = true }
                                    }
                                >
                                    Learn
                                </Link>

                                {/* Not Now Button */}
                                <button className="mbp-button mbp-cancel-button">
                                    Not Now
                                </button>

                            </div>

                            {/* Character Container */}
                            <div className="mbp-character-container">
                                <img src={AlfieImg} alt="Alfie"/>
                            </div>

                        </div>

                    </div>
                ) ||
                selectedInteraction === factEraFive && (
                    <div className="map-button-popup">

                        {/* Container */}
                        <div className="m-b-p-main-container">

                            {/* Close Button */}
                            <button
                                className="mbp-close-container"
                                onClick={() => { setSelectedInteraction(null) }}
                            >
                                <img src={CloseButton} alt="Close Menu"/>
                            </button>

                            {/* Quote Bubble */}
                            <div className="mbp-bubble-container">

                                {/* Image */}
                                <img src={BubbleImage} alt="Quote Bubble"/>

                                {/* Text */}
                                <div className="mbpb-title-container">

                                    {/* Title */}
                                    <div className="mbpb-title">
                                        { selectedInteraction.title }
                                    </div>

                                    {/* Description */}
                                    <div className="mbpb-description">
                                        { selectedInteraction.description }
                                    </div>

                                </div>

                            </div>

                            {/* Button Container */}
                            <div className="mbp-button-container">

                                {/* Play Button */}
                                <Link
                                    className="mbp-button mbp-play-button"
                                    to="/section-five-fact"
                                    onClick={() => { selectedInteraction.complete = true }
                                    }
                                >
                                    Learn
                                </Link>

                                {/* Not Now Button */}
                                <button className="mbp-button mbp-cancel-button">
                                    Not Now
                                </button>

                            </div>

                            {/* Character Container */}
                            <div className="mbp-character-container">
                                <img src={AlfieImg} alt="Alfie"/>
                            </div>

                        </div>

                    </div>
                ) ||
                selectedInteraction === factEraSix && (
                    <div className="map-button-popup">

                        {/* Container */}
                        <div className="m-b-p-main-container">

                            {/* Close Button */}
                            <button
                                className="mbp-close-container"
                                onClick={() => { setSelectedInteraction(null) }}
                            >
                                <img src={CloseButton} alt="Close Menu"/>
                            </button>

                            {/* Quote Bubble */}
                            <div className="mbp-bubble-container">

                                {/* Image */}
                                <img src={BubbleImage} alt="Quote Bubble"/>

                                {/* Text */}
                                <div className="mbpb-title-container">

                                    {/* Title */}
                                    <div className="mbpb-title">
                                        { selectedInteraction.title }
                                    </div>

                                    {/* Description */}
                                    <div className="mbpb-description">
                                        { selectedInteraction.description }
                                    </div>

                                </div>

                            </div>

                            {/* Button Container */}
                            <div className="mbp-button-container">

                                {/* Play Button */}
                                <Link
                                    className="mbp-button mbp-play-button"
                                    to="/section-six-fact"
                                    onClick={() => { selectedInteraction.complete = true }
                                    }
                                >
                                    Learn
                                </Link>

                                {/* Not Now Button */}
                                <button className="mbp-button mbp-cancel-button">
                                    Not Now
                                </button>

                            </div>

                            {/* Character Container */}
                            <div className="mbp-character-container">
                                <img src={AlfieImg} alt="Alfie"/>
                            </div>

                        </div>

                    </div>
                ) ||
                selectedInteraction === factEraSeven && (
                    <div className="map-button-popup">

                        {/* Container */}
                        <div className="m-b-p-main-container">

                            {/* Close Button */}
                            <button
                                className="mbp-close-container"
                                onClick={() => { setSelectedInteraction(null) }}
                            >
                                <img src={CloseButton} alt="Close Menu"/>
                            </button>

                            {/* Quote Bubble */}
                            <div className="mbp-bubble-container">

                                {/* Image */}
                                <img src={BubbleImage} alt="Quote Bubble"/>

                                {/* Text */}
                                <div className="mbpb-title-container">

                                    {/* Title */}
                                    <div className="mbpb-title">
                                        { selectedInteraction.title }
                                    </div>

                                    {/* Description */}
                                    <div className="mbpb-description">
                                        { selectedInteraction.description }
                                    </div>

                                </div>

                            </div>

                            {/* Button Container */}
                            <div className="mbp-button-container">

                                {/* Play Button */}
                                <Link
                                    className="mbp-button mbp-play-button"
                                    to="/section-seven-fact"
                                    onClick={() => { selectedInteraction.complete = true }
                                    }
                                >
                                    Learn
                                </Link>

                                {/* Not Now Button */}
                                <button className="mbp-button mbp-cancel-button">
                                    Not Now
                                </button>

                            </div>

                            {/* Character Container */}
                            <div className="mbp-character-container">
                                <img src={AlfieImg} alt="Alfie"/>
                            </div>

                        </div>

                    </div>
                ) ||
                selectedInteraction === factEraEight && (
                    <div className="map-button-popup">

                        {/* Container */}
                        <div className="m-b-p-main-container">

                            {/* Close Button */}
                            <button
                                className="mbp-close-container"
                                onClick={() => { setSelectedInteraction(null) }}
                            >
                                <img src={CloseButton} alt="Close Menu"/>
                            </button>

                            {/* Quote Bubble */}
                            <div className="mbp-bubble-container">

                                {/* Image */}
                                <img src={BubbleImage} alt="Quote Bubble"/>

                                {/* Text */}
                                <div className="mbpb-title-container">

                                    {/* Title */}
                                    <div className="mbpb-title">
                                        { selectedInteraction.title }
                                    </div>

                                    {/* Description */}
                                    <div className="mbpb-description">
                                        { selectedInteraction.description }
                                    </div>

                                </div>

                            </div>

                            {/* Button Container */}
                            <div className="mbp-button-container">

                                {/* Play Button */}
                                <Link
                                    className="mbp-button mbp-play-button"
                                    to="/section-eight-fact"
                                    onClick={() => { selectedInteraction.complete = true }
                                    }
                                >
                                    Learn
                                </Link>

                                {/* Not Now Button */}
                                <button className="mbp-button mbp-cancel-button">
                                    Not Now
                                </button>

                            </div>

                            {/* Character Container */}
                            <div className="mbp-character-container">
                                <img src={AlfieImg} alt="Alfie"/>
                            </div>

                        </div>

                    </div>
                ) ||
                selectedInteraction === factEraNine && (
                    <div className="map-button-popup">

                        {/* Container */}
                        <div className="m-b-p-main-container">

                            {/* Close Button */}
                            <button
                                className="mbp-close-container"
                                onClick={() => { setSelectedInteraction(null) }}
                            >
                                <img src={CloseButton} alt="Close Menu"/>
                            </button>

                            {/* Quote Bubble */}
                            <div className="mbp-bubble-container">

                                {/* Image */}
                                <img src={BubbleImage} alt="Quote Bubble"/>

                                {/* Text */}
                                <div className="mbpb-title-container">

                                    {/* Title */}
                                    <div className="mbpb-title">
                                        { selectedInteraction.title }
                                    </div>

                                    {/* Description */}
                                    <div className="mbpb-description">
                                        { selectedInteraction.description }
                                    </div>

                                </div>

                            </div>

                            {/* Button Container */}
                            <div className="mbp-button-container">

                                {/* Play Button */}
                                <Link
                                    className="mbp-button mbp-play-button"
                                    to="/section-nine-fact"
                                    onClick={() => { selectedInteraction.complete = true }
                                    }
                                >
                                    Learn
                                </Link>

                                {/* Not Now Button */}
                                <button className="mbp-button mbp-cancel-button">
                                    Not Now
                                </button>

                            </div>

                            {/* Character Container */}
                            <div className="mbp-character-container">
                                <img src={AlfieImg} alt="Alfie"/>
                            </div>

                        </div>

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
        <div className="map-section-container">

            {/* Header Section */}
            <div className="w-m-header-container">

                {/* Background Image */}
                <div className="w-m-h-image">
                    <img src={HeaderBackdrop} alt="Header Section"/>
                </div>

                {/* Inner Container */}
                <div className="w-m-h-inner-container">

                    {/* Character Icon */}
                    <div className="w-m-h-character">
                        <img src={CharIcon} alt="User" />
                    </div>

                    {/* Experience Bar */}
                    <div className="w-m-h-score-container">

                        {/* Text */}
                        <div className="wmhs-title">
                            0 points
                        </div>

                        {/* Completion Bar */}
                        <div className="wmhs-bar">

                        </div>

                    </div>

                    {/* Settings Icon */}
                    <div className="w-m-h-settings">
                        <img src={SettingsIcon} alt="Settings"/>
                    </div>

                </div>

            </div>

            {/* Map Container */}
            <div className="wrapped-map-inner-container">
                <WrappedMap
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
                    loadingElement={ <div style={{height: '100%'}} /> }
                    containerElement={ <div style={{height: '100%'}} />}
                    mapElement={ <div className="map-element-container" />}

                />
            </div>

            {/* Footer Section */}
        </div>
    )
}
