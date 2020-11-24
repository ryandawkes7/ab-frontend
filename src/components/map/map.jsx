// /* global google */
//
// import React, {useEffect, useState, Component} from 'react';
// import './map.css';
// import { Link } from 'react-router-dom';
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
// import FactIncomplete from './assets/fact-icon.svg'; import FactComplete from './assets/fact-complete.svg'; import FactLocked from './assets/fact-locked.svg';
// import PicIncomplete from './assets/picture-incomplete.svg'; import PicComplete from './assets/picture-complete.svg';
//
// import HeaderBackdrop from './assets/header-background.svg'; import BubbleImage from './assets/bubble.svg';
// import AlfieImg from './assets/alfie-image.png';
// import MapOverlay from './assets/main-building.svg'; import ConcordeOverlay from './assets/concorde-map.png'
// import CloseButton from './assets/16/icon.svg';
//
// // Impromptu JSON data for locations
// export const Interaction = {
//     locations: {
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
//
//             // Era One
//             {
//                 era: 1,
//                 complete: false,
//                 unlocked: true,
//                 centerCoords: [51.523238, -2.57822],
//                 zoom: 21.25,
//                 quiz: [
//                     {
//                         id: 1,
//                         coordinates: [51.523186, -2.578229],
//                         title: 'QUIZ TIME!',
//                         description: "Do you want to play with me and earn some points?",
//                         complete: false,
//                     },
//                     {
//                         id: 2,
//                         coordinates: [51.523170, -2.578064],
//                         title: 'QUIZ TIME!',
//                         description: "Do you want to play with me and earn some points?",
//                         complete: false,
//                     },
//                 ],
//                 fact: {
//                     coordinates: [51.523146, -2.578169],
//                     title: "FACT TIME!",
//                     description: "Do you want to learn with me and earn some points?",
//                     complete: false
//                 }
//             },
//
//             // Era Two
//             {
//                 era: 2,
//                 complete: false,
//                 unlocked: false,
//                 centerCoords: [51.523325, -2.578160],
//                 zoom: 21.25,
//                 quiz: [
//                     {
//                         coordinates: [51.523305, -2.578240],
//                         title: 'QUIZ TIME!',
//                         description: "Do you want to play with me and earn some points?",
//                         complete: false,
//                     },
//                     {
//                         coordinates: [51.523225, -2.578000],
//                         title: 'QUIZ TIME!',
//                         description: "Do you want to play with me and earn some points?",
//                         complete: false,
//                     },
//                 ],
//                 fact: {
//                     coordinates: [51.523235, -2.578110],
//                     title: "FACT TIME!",
//                     description: "Do you want to learn with me and earn some points?",
//                     complete: false
//                 }
//             },
//
//             // Era Three
//             {
//                 era: 3,
//                 complete: false,
//                 unlocked: false,
//                 centerCoords: [51.523405, -2.578045],
//                 zoom: 20.9,
//                 quiz: [
//                     {
//                         id: 1,
//                         coordinates: [51.523325, -2.577955],
//                         title: 'QUIZ TIME!',
//                         description: "Do you want to play with me and earn some points?",
//                         complete: false,
//                     },
//                     {
//                         id: 2,
//                         coordinates: [51.523365, -2.577960],
//                         title: 'QUIZ TIME!',
//                         description: "Do you want to play with me and earn some points?",
//                         complete: false,
//                     },
//                     {
//                         id: 3,
//                         coordinates: [51.523395, -2.578015],
//                         title: 'QUIZ TIME!',
//                         description: "Do you want to play with me and earn some points?",
//                         complete: false,
//                     },
//                     {
//                         id: 4,
//                         coordinates: [51.523375, -2.578100],
//                         title: 'QUIZ TIME!',
//                         description: "Do you want to play with me and earn some points?",
//                         complete: false,
//                     },
//                 ],
//                 fact: {
//                     coordinates: [51.523285, -2.577965],
//                     title: "FACT TIME!",
//                     description: "Do you want to learn with me and earn some points?",
//                     complete: false
//                 }
//             },
//
//             // Era Four
//             {
//                 era: 4,
//                 complete: false,
//                 unlocked: false,
//                 centerCoords: [51.523555, -2.578329],
//                 zoom: 20.9,
//                 quiz: [
//                     {
//                         coordinates: [51.523448, -2.578157],
//                         title: 'QUIZ TIME!',
//                         description: "Do you want to play with me and earn some points?",
//                         complete: false,
//                     },
//                     {
//                         coordinates: [51.523522, -2.578243],
//                         title: 'QUIZ TIME!',
//                         description: "Do you want to play with me and earn some points?",
//                         complete: false,
//                     },
//                     {
//                         coordinates: [51.523512, -2.578333],
//                         title: 'QUIZ TIME!',
//                         description: "Do you want to play with me and earn some points?",
//                         complete: false,
//                     },
//                 ],
//                 fact: {
//                     coordinates: [51.523455, -2.578221],
//                     title: "FACT TIME!",
//                     description: "Do you want to learn with me and earn some points?",
//                     complete: false
//                 }
//             },
//
//             // Era Five
//             {
//                 era: 5,
//                 complete: false,
//                 unlocked: false,
//                 centerCoords: [51.523455, -2.578469],
//                 zoom: 20.9,
//                 quiz: [
//                     {
//                         coordinates: [51.523505, -2.578459],
//                         title: 'QUIZ TIME!',
//                         description: "Do you want to play with me and earn some points?",
//                         complete: false,
//                     },
//                     {
//                         coordinates: [51.523445, -2.578489],
//                         title: 'QUIZ TIME!',
//                         description: "Do you want to play with me and earn some points?",
//                         complete: false,
//                     },
//                     {
//                         coordinates: [51.523385, -2.578409],
//                         title: 'QUIZ TIME!',
//                         description: "Do you want to play with me and earn some points?",
//                         complete: false,
//                     },
//                 ],
//                 fact: {
//                     coordinates: [51.523435, -2.578409],
//                     title: "FACT TIME!",
//                     description: "Do you want to learn with me and earn some points?",
//                     complete: false
//                 }
//             },
//
//             // Era Six
//             {
//                 era: 6,
//                 complete: false,
//                 unlocked: false,
//                 centerCoords: [51.523455, -2.578469],
//                 zoom: 20.8,
//                 quiz: [
//                     {
//                         coordinates: [51.523295, -2.578549],
//                         title: 'QUIZ TIME!',
//                         description: "Do you want to play with me and earn some points?",
//                         complete: false,
//                     },
//                     {
//                         coordinates: [51.523315, -2.578619],
//                         title: 'QUIZ TIME!',
//                         description: "Do you want to play with me and earn some points?",
//                         complete: false,
//                     },
//                     {
//                         coordinates: [51.523235, -2.578619],
//                         title: 'QUIZ TIME!',
//                         description: "Do you want to play with me and earn some points?",
//                         complete: false,
//                     },
//                 ],
//                 fact: {
//                     coordinates: [51.523245, -2.578719],
//                     title: "FACT TIME!",
//                     description: "Do you want to learn with me and earn some points?",
//                     complete: false
//                 }
//             },
//
//             // Era Seven
//             {
//                 era: 7,
//                 complete: false,
//                 unlocked: false,
//                 centerCoords: [51.523311, -2.578685],
//                 zoom: 20.75,
//                 quiz: [
//                     {
//                         coordinates: [51.523187, -2.578401],
//                         title: 'QUIZ TIME!',
//                         description: "Do you want to play with me and earn some points?",
//                         complete: false,
//                     },
//                     {
//                         coordinates: [51.523134, -2.578456],
//                         title: 'QUIZ TIME!',
//                         description: "Do you want to play with me and earn some points?",
//                         complete: false,
//                     },
//                 ],
//                 fact: {
//                     coordinates: [51.523116, -2.578329],
//                     title: "FACT TIME!",
//                     description: "Do you want to learn with me and earn some points?",
//                     complete: false
//                 }
//             },
//
//             // Era Nine
//             {
//                 era: 9,
//                 complete: false,
//                 unlocked: false,
//                 centerCoords: [51.523900, -2.577390],
//                 zoom: 19.6,
//                 quiz: [
//                     {
//                         coordinates: [51.523630, -2.577300],
//                         title: 'QUIZ TIME!',
//                         description: "Do you want to play with me and earn some points?",
//                         complete: false,
//                     },
//                 ],
//                 fact: {
//                     coordinates: [51.523880, -2.577180],
//                     title: "FACT TIME!",
//                     description: "Do you want to learn with me and earn some points?",
//                     complete: false
//                 }
//             },
//         ]
//     },
// }
//
// class InteractionPopup extends Component {
//     render () {
//         return (
//             <div className="map-button-popup">
//
//                 {/* Container */}
//                 <div className="m-b-p-main-container">
//
//                     {/* Close Button */}
//                     <button
//                         className="mbp-close-container"
//                         // onClick={() => { setSelectedInteraction(null) }}
//                     >
//                         <img src={CloseButton} alt="Close Menu"/>
//                     </button>
//
//                     {/* Quote Bubble */}
//                     <div className="mbp-bubble-container">
//
//                         {/* Image */}
//                         <img src={BubbleImage} alt="Quote Bubble"/>
//
//                         {/* Text */}
//                         <div className="mbpb-title-container">
//
//                             {/* Title */}
//                             <div className="mbpb-title">
//                                 {this.props.title}
//                             </div>
//
//                             {/* Description */}
//                             <div className="mbpb-description">
//                                 {this.props.description}
//                             </div>
//
//                         </div>
//
//                     </div>
//
//                     {/* Button Container */}
//                     <div className="mbp-button-container">
//
//                         {/* Play Button */}
//                         <Link
//                             className="mbp-button mbp-play-button"
//                             to="/section-three-quiz"
//                             // onClick={ () => selectedInteraction.complete = true }
//                         >
//                             Play
//                         </Link>
//
//                         {/* Not Now Button */}
//                         <button className="mbp-button mbp-cancel-button">
//                             Not Now
//                         </button>
//
//                     </div>
//
//                     {/* Character Container */}
//                     <div className="mbp-character-container">
//                         <img src={AlfieImg} alt="Character"/>
//                     </div>
//
//                 </div>
//
//             </div>
//
//         )
//     }
// }
//
// function UnwrappedMap() {
//
//     const [selectedInteraction, setSelectedInteraction] = useState(null);
//     const [latitude, setLatitude] = useState(51.523196);
//     const [longitude, setLongitude] = useState(-2.578249);
//     const [zoom, setZoom] = useState(21.25);
//     const [lockedActivityPopup, setLockedActivityPopup] = useState(false);
//
//     const eras = Interaction.locations.Sections
//     const eraOneQuizOne = eras[0].quiz[0]; const eraOneQuizTwo = eras[0].quiz[1]; const factEraOne = eras[0].fact;
//     const eraTwoQuizOne = eras[1].quiz[0]; const eraTwoQuizTwo = eras[1].quiz[2]; const factEraTwo = eras[1].fact;
//     const eraThreeQuizOne = eras[2].quiz[0]; const eraThreeQuizTwo = eras[2].quiz[1]; const eraThreeQuizThree = eras[2].quiz[2]; const eraThreeQuizFour = eras[2].quiz[3]; const factEraThree = eras[2].fact;
//     const eraFourQuizOne = eras[3].quiz[0]; const eraFourQuizTwo = eras[3].quiz[1]; const eraFourQuizThree = eras[3].quiz[2]; const factEraFour = eras[3].fact;
//     const eraFiveQuizOne = eras[4].quiz[0]; const eraFiveQuizTwo = eras[4].quiz[1]; const eraFiveQuizThree = eras[4].quiz[2]; const factEraFive = eras[4].fact;
//     const eraSixQuizOne = eras[5].quiz[0]; const eraSixQuizTwo = eras[5].quiz[1]; const eraSixQuizThree = eras[5].quiz[2]; const factEraSix = eras[5].fact;
//     const eraSevenQuizOne = eras[6].quiz[0]; const eraSevenQuizTwo = eras[6].quiz[1]; const factEraSeven = eras[6].fact;
//     const eraNineQuizOne = eras[7].quiz[0]; const eraNineQuizTwo = eras[7].quiz[1]; const factEraNine = eras[7].fact;
//
//     const isEraOneComplete = () => {
//         const era = eras[0];
//         const quiz = eras[0].quiz;
//         const fact = eras[0].fact;
//
//         if (fact.complete && quiz[0].complete && quiz[1].complete) {
//             era.complete = true;
//         } else {
//             era.complete = false;
//         }
//     }
//     isEraOneComplete();
//
//     const isEraTwoComplete = () => {
//         const era = eras[1];
//         const quiz = eras[1].quiz;
//         const fact = eras[1].fact;
//
//         if (fact.complete && quiz[0].complete) {
//             era.complete = true;
//         } else {
//             era.complete = false;
//         }
//     }
//     isEraTwoComplete();
//
//     const isEraThreeComplete = () => {
//         const era = eras[2];
//         const quiz = eras[2].quiz;
//         const fact = eras[2].fact;
//
//         {
//             quiz.map((quizzes) => {
//                 if (fact.complete && quiz[0].complete && quiz[1].complete && quiz[2].complete && quiz[3].complete) {
//                     era.complete = true;
//                 } else {
//                     era.complete = false;
//                 }
//             })
//         }
//     }
//     isEraThreeComplete();
//
//     const isEraFourComplete = () => {
//         const era = eras[3];
//         const quiz = eras[3].quiz;
//         const fact = eras[3].fact;
//
//         if (fact.complete && quiz[0].complete && quiz[1].complete && quiz[2].complete ) {
//             era.complete = true;
//         } else {
//             era.complete = false;
//         }
//     }
//     isEraFourComplete();
//
//     const isEraFiveComplete = () => {
//         const era = eras[4];
//         const quiz = eras[4].quiz;
//         const fact = eras[4].fact;
//
//         if (fact.complete && quiz[0].complete && quiz[1].complete) {
//             era.complete = true;
//         } else {
//             era.complete = false;
//         }
//     }
//     isEraFiveComplete();
//
//     const isEraSixComplete = () => {
//         const era = eras[5];
//         const quiz = eras[5].quiz;
//         const fact = eras[5].fact;
//
//         if (fact.complete && quiz[0].complete && quiz[1].complete && quiz[2].complete) {
//             era.complete = true;
//         } else {
//             era.complete = false;
//         }
//     }
//     isEraSixComplete();
//
//     const isEraSevenComplete = () => {
//         const era = eras[6];
//         const quiz = eras[6].quiz;
//         const fact = eras[6].fact;
//
//         if (fact.complete && quiz[0].complete && quiz[1].complete) {
//             era.complete = true;
//         } else {
//             era.complete = false;
//         }
//     }
//     isEraSevenComplete();
//
//     const isEraNineComplete = () => {
//         const era = eras[7];
//         const quiz = eras[7].quiz;
//         const fact = eras[7].fact;
//
//         if (fact.complete && quiz[0].complete && quiz[1].complete) {
//             era.complete = true;
//         } else {
//             era.complete = false;
//         }
//     }
//     isEraNineComplete();
//
//     if(eras[0].complete) { eras[1].unlocked = true }
//     if(eras[1].complete) { eras[2].unlocked = true }
//     if(eras[2].complete) { eras[3].unlocked = true }
//     if(eras[3].complete) { eras[4].unlocked = true }
//     if(eras[4].complete) { eras[5].unlocked = true }
//     if(eras[5].complete) { eras[6].unlocked = true }
//     if(eras[6].complete) { eras[7].unlocked = true }
//
//
//     console.log("Selected Interaction: ", selectedInteraction)
//
//     // Sets Location when an era is completed
//     useEffect(() => {
//         if(!eras[0].complete) {
//             setLatitude(eras[0].centerCoords[0])
//             setLongitude(eras[0].centerCoords[1])
//             setZoom(eras[0].zoom)
//         }
//         if(eras[0].complete && !eras[1].complete) {
//             setLatitude(eras[1].centerCoords[0])
//             setLongitude(eras[1].centerCoords[1])
//             setZoom(eras[1].zoom)
//         }
//         if(eras[1].complete && !eras[2].complete) {
//             setLatitude(eras[2].centerCoords[0])
//             setLongitude(eras[2].centerCoords[1])
//             setZoom(eras[2].zoom)
//         }
//         if(eras[2].complete && !eras[3].complete) {
//             setLatitude(eras[3].centerCoords[0])
//             setLongitude(eras[3].centerCoords[1])
//             setZoom(eras[3].zoom)
//         }
//         if(eras[3].complete && !eras[4].complete) {
//             setLatitude(eras[4].centerCoords[0])
//             setLongitude(eras[4].centerCoords[1])
//             setZoom(eras[4].zoom)
//         }
//         if(eras[4].complete && !eras[5].complete) {
//             setLatitude(eras[5].centerCoords[0])
//             setLongitude(eras[5].centerCoords[1])
//             setZoom(eras[5].zoom)
//         }
//         if(eras[5].complete && !eras[6].complete) {
//             setLatitude(eras[6].centerCoords[0])
//             setLongitude(eras[6].centerCoords[1])
//             setZoom(eras[6].zoom)
//         }
//         if(eras[6].complete && !eras[7].complete) {
//             setLatitude(eras[7].centerCoords[0])
//             setLongitude(eras[7].centerCoords[1])
//             setZoom(eras[7].zoom)
//         }
//     })
//
//     return (
//         // Creates map
//         <GoogleMap
//             zoom={zoom}
//             defaultCenter={{lat: latitude, lng: longitude}}
//             center={{lat: latitude, lng: longitude}}
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
//             <GroundOverlay
//                 bounds={new google.maps.LatLngBounds(
//                     new google.maps.LatLng(51.523300, -2.578030),
//                     new google.maps.LatLng(51.524255, -2.576465),
//                 )}
//                 url={ConcordeOverlay}
//                 opacity={1}
//             />
//
//             {
//                 Interaction.locations.Sections.map((interaction) => interaction.quiz.map((quizInteraction) => (
//                     <div>
//                         <Marker
//                             key={quizInteraction.id}
//                             position={{
//                                 lat: quizInteraction.coordinates[0],
//                                 lng: quizInteraction.coordinates[1]
//                             }}
//                             onClick={() => {
//                                 interaction.unlocked === true && quizInteraction.complete === false ? setSelectedInteraction(quizInteraction) :
//                                 // interaction.unlocked === false ? toggleLockedQuizPopup :
//                                 // null
//                                 console.log("Unselected")
//                             }}
//                             icon={
//                                 interaction.unlocked === true && quizInteraction.complete === true ? QuizComplete :
//                                 interaction.unlocked === true && quizInteraction.complete === false ? QuizIncomplete :
//                                 interaction.unlocked !== true ? QuizLocked : null
//                             }
//                         />
//
//                         <Marker
//                             key={interaction.fact.id}
//                             position={{
//                                 lat: interaction.fact.coordinates[0],
//                                 lng: interaction.fact.coordinates[1]
//                             }}
//                             onClick={() => {
//                                 interaction.unlocked === true && interaction.fact.complete === false ? setSelectedInteraction(interaction.fact) :
//                                 console.log("N/A")
//                             }}
//                             icon={
//                                 interaction.unlocked === true && interaction.fact.complete === true ? FactComplete :
//                                 interaction.unlocked === true && interaction.fact.complete === false ? FactIncomplete :
//                                 interaction.unlocked === false ? FactLocked : null
//                             }
//                         />
//                     </div>
//                 )))
//             }
//
//             {/*{*/}
//             {/*    Interaction.locations.Game.map((interaction) => (*/}
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
//             {/*                icon={GameIcon}*/}
//             {/*            />*/}
//             {/*        </div>*/}
//             {/*    ))*/}
//             {/*}*/}
//             {/*{*/}
//             {/*    Interaction.locations.Picture.map((interaction) => (*/}
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
//             {/*                    !interaction.complete && (PicIncomplete) ||*/}
//             {/*                    interaction.complete && (PicComplete)*/}
//             {/*                }*/}
//             {/*            />*/}
//             {/*        </div>*/}
//             {/*    ))*/}
//             {/*}*/}
//             {/* End of Interaction Markers */}
//
//             {/* Selecting Interaction Section */}
//
//             {
//                 lockedActivityPopup === true && (
//                     <div className="locked-popup-container">
//                         <div className="lp-box">
//
//                         {/* Close Button */}
//                         <button className="mbp-close-container">
//                             <img src={CloseButton} alt="Close Menu"/>
//                         </button>
//
//                         {/* Title */}
//
//
//                         </div>
//                     </div>
//                 )
//
//             }
//
//             {
//                 // Function for if the button pressed is a QUIZ button
//
//                 // Era One
//                 selectedInteraction === eraOneQuizOne && (
//                     <InteractionPopup title={selectedInteraction.title} description={selectedInteraction.description} />
//
//                 ) ||
//                 selectedInteraction === eraOneQuizTwo && (
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
//                                 <img src={AlfieImg} alt="Character"/>
//                             </div>
//
//                         </div>
//                         ) ||
//
//                     </div>
//                 ) ||
//
//                 // Era Two
//                 selectedInteraction === eraTwoQuizOne && (
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
//                                 <img src={AlfieImg} alt="Character"/>
//                             </div>
//
//                         </div>
//
//                     </div>
//                 ) ||
//                 selectedInteraction === eraTwoQuizTwo && (
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
//                                 <img src={AlfieImg} alt="Character"/>
//                             </div>
//
//                         </div>
//
//                     </div>
//                 ) ||
//
//                 // Era Three
//                 selectedInteraction === eraThreeQuizOne && (
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
//                                     onClick={ () => selectedInteraction.complete = true }
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
//                                 <img src={AlfieImg} alt="Character"/>
//                             </div>
//
//                         </div>
//
//                     </div>
//                 ) ||
//                 selectedInteraction === eraThreeQuizTwo && (
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
//                                     onClick={ () => selectedInteraction.complete = true }
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
//                                 <img src={AlfieImg} alt="Character"/>
//                             </div>
//
//                         </div>
//
//                     </div>
//                 ) ||
//                 selectedInteraction === eraThreeQuizThree && (
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
//                                     onClick={ () => selectedInteraction.complete = true }
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
//                                 <img src={AlfieImg} alt="Character"/>
//                             </div>
//
//                         </div>
//
//                     </div>
//                 ) ||
//                 selectedInteraction === eraThreeQuizFour && (
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
//                                     onClick={ () => selectedInteraction.complete = true }
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
//                                 <img src={AlfieImg} alt="Character"/>
//                             </div>
//
//                         </div>
//
//                     </div>
//                 ) ||
//
//                 // Era Four
//                 selectedInteraction === eraFourQuizOne && (
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
//                                     onClick={ () => selectedInteraction.complete = true }
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
//                                 <img src={AlfieImg} alt="Character"/>
//                             </div>
//
//                         </div>
//
//                     </div>
//                 ) ||
//                 selectedInteraction === eraFourQuizTwo && (
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
//                                     onClick={ () => selectedInteraction.complete = true }
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
//                                 <img src={AlfieImg} alt="Character"/>
//                             </div>
//
//                         </div>
//
//                     </div>
//                 ) ||
//                 selectedInteraction === eraFourQuizThree && (
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
//                                     onClick={ () => selectedInteraction.complete = true }
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
//                                 <img src={AlfieImg} alt="Character"/>
//                             </div>
//
//                         </div>
//
//                     </div>
//                 ) ||
//
//                 // Era Five
//                 selectedInteraction === eraFiveQuizOne && (
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
//                                     onClick={ () => selectedInteraction.complete = true }
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
//                                 <img src={AlfieImg} alt="Character"/>
//                             </div>
//
//                         </div>
//
//                     </div>
//                 ) ||
//                 selectedInteraction === eraFiveQuizTwo && (
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
//                                     onClick={ () => selectedInteraction.complete = true }
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
//                                 <img src={AlfieImg} alt="Character"/>
//                             </div>
//
//                         </div>
//
//                     </div>
//                 ) ||
//                 selectedInteraction === eraFiveQuizThree && (
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
//                                     onClick={ () => selectedInteraction.complete = true }
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
//                                 <img src={AlfieImg} alt="Character"/>
//                             </div>
//
//                         </div>
//
//                     </div>
//                 ) ||
//
//                 // Era Six
//                 selectedInteraction === eraSixQuizOne && (
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
//                                     onClick={ () => selectedInteraction.complete = true }
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
//                                 <img src={AlfieImg} alt="Character"/>
//                             </div>
//
//                         </div>
//
//                     </div>
//                 ) ||
//                 selectedInteraction === eraSixQuizTwo && (
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
//                                     onClick={ () => selectedInteraction.complete = true }
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
//                                 <img src={AlfieImg} alt="Character"/>
//                             </div>
//
//                         </div>
//
//                     </div>
//                 ) ||
//                 selectedInteraction === eraSixQuizThree && (
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
//                                     onClick={ () => selectedInteraction.complete = true }
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
//                                 <img src={AlfieImg} alt="Character"/>
//                             </div>
//
//                         </div>
//
//                     </div>
//                 ) ||
//
//                 // Era Seven
//                 selectedInteraction === eraSevenQuizOne && (
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
//                                     onClick={ () => selectedInteraction.complete = true }
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
//                                 <img src={AlfieImg} alt="Character"/>
//                             </div>
//
//                         </div>
//
//                     </div>
//                 ) ||
//                 selectedInteraction === eraSevenQuizTwo && (
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
//                                     onClick={ () => selectedInteraction.complete = true }
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
//                                 <img src={AlfieImg} alt="Character"/>
//                             </div>
//
//                         </div>
//
//                     </div>
//                 ) ||
//
//                 // Era Nine
//                 selectedInteraction === eraNineQuizOne && (
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
//                                     onClick={ () => selectedInteraction.complete = true }
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
//                                 <img src={AlfieImg} alt="Character"/>
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
//                 selectedInteraction === factEraTwo && (
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
//                 selectedInteraction === factEraThree && (
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
//                 selectedInteraction === factEraFour && (
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
//                 selectedInteraction === factEraFive && (
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
//                 selectedInteraction === factEraSix && (
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
//                 selectedInteraction === factEraSeven && (
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
//                 )
//             }
//
//             {/*{*/}
//             {/*    selectedInteraction === Interaction.locations.Picture[0] && (*/}
//             {/*        <div className="map-info-window">*/}
//             {/*            <InfoWindow*/}
//             {/*                position={{*/}
//             {/*                    lat: selectedInteraction.coordinates[0] + 0.000033,*/}
//             {/*                    lng: selectedInteraction.coordinates[1]*/}
//             {/*                }}*/}
//             {/*                onCloseClick={() => {*/}
//             {/*                    setSelectedInteraction(null);*/}
//             {/*                }}*/}
//             {/*            >*/}
//             {/*                <div className="map-button">*/}
//             {/*                    <h2>{ selectedInteraction.type }</h2>*/}
//             {/*                    <Link*/}
//             {/*                        to="/section-one-pic"*/}
//             {/*                        className="basic-btn fact-btn"*/}
//             {/*                        onClick={() => {selectedInteraction.complete = true }}*/}
//             {/*                    >*/}
//             {/*                        <h3>{ selectedInteraction.description }</h3>*/}
//             {/*                    </Link>*/}
//             {/*                </div>*/}
//             {/*            </InfoWindow>*/}
//             {/*        </div>*/}
//             {/*    )*/}
//             {/*}*/}
//
//         </GoogleMap>
//     )
// }
//
//
// const WrappedMap = withScriptjs(withGoogleMap(UnwrappedMap));
//
// export default function Map() {
//
//     const [endPopup, setEndPopup] = useState(false)
//
//     const togglePopup = () => {
//         setEndPopup(!endPopup);
//         console.log(endPopup)
//     }
//
//     const EndAdventurePopup = () => {
//         return(
//             endPopup === true && (
//             <div className="end-adventure-container">
//                 <div className="e-a-box-container">
//                     <div className="e-a-b-inner-container">
//
//                         {/* Close Button */}
//                         <div className="e-a-b-close" onClick={togglePopup}>
//                             <img src={CloseButton} alt="Close Menu"/>
//                         </div>
//
//                         {/* Title */}
//                         <div className="e-a-b-title">
//                             DO YOU WANT TO QUIT?
//                         </div>
//
//                         {/* Subtitle */}
//                         <div className="e-a-b-subtitle">
//                             Your points won't be added!
//                         </div>
//
//                         {/* Buttons */}
//                         <div className="e-a-b-button-container">
//                             <Link to="/leaderboard" className="eab-button eab-yes-button">
//                                 YES
//                             </Link>
//
//                             <button className="eab-button eab-no-button">
//                                 NO
//                             </button>
//
//                         </div>
//
//                     </div>
//                 </div>
//             </div>
//             )
//         )
//     }
//
//     return (
//         <div className="map-section-container">
//             <EndAdventurePopup />
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
//                     <button
//                         className="w-m-h-character"
//                         onClick={togglePopup}
//                     >
//                         <img src={CharIcon} alt="User" />
//                     </button>
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

import React, {useEffect, useState, Component} from 'react';
import './map.css';
import { Link } from 'react-router-dom';

import {
    GoogleMap,
    withScriptjs,
    withGoogleMap,
    Marker,
    InfoWindow,
    GroundOverlay
} from 'react-google-maps';

import GameIcon from './assets/game-icon.svg'; import CharIcon from './assets/header-char-icon.svg'; import SettingsIcon from './assets/settings-icon.svg';
import QuizIncomplete from './assets/quiz-incomplete.png'; import QuizComplete from './assets/quiz-complete.png'; import QuizLocked from './assets/quiz-locked.png';
import FactIncomplete from './assets/fact-incomplete.png'; import FactComplete from './assets/fact-complete.png'; import FactLocked from './assets/fact-locked.png';
import PicIncomplete from './assets/picture-incomplete.svg'; import PicComplete from './assets/picture-complete.svg';

import HeaderBackdrop from './assets/header-background.svg'; import BubbleImage from './assets/bubble.svg';
import AlfieImg from './assets/alfie-image.png';
import MapOverlay from './assets/map-overlay.png'; import ConcordeOverlay from './assets/concorde-map.png'
import CloseButton from './assets/16/icon.svg';
import BackdropBubble from "../quiz/assets/backdrop-bubble.png"; import LockedImg from './assets/locked-img.png';

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

            // Era One
            {
                era: 1,
                complete: false,
                unlocked: true,
                centerCoords: [51.523238, -2.57822],
                zoom: 21.25,
                quiz: [
                    {
                        id: 1,
                        coordinates: [51.523186, -2.578229],
                        title: 'QUIZ TIME!',
                        description: "Do you want to play with me and earn some points?",
                        complete: false,
                    },
                    {
                        id: 2,
                        coordinates: [51.523170, -2.578064],
                        title: 'QUIZ TIME!',
                        description: "Do you want to play with me and earn some points?",
                        complete: false,
                    },
                ],
                fact: {
                    coordinates: [51.523146, -2.578169],
                    title: "FACT TIME!",
                    description: "Do you want to learn with me and earn some points?",
                    complete: false
                }
            },

            // Era Two
            {
                era: 2,
                complete: false,
                unlocked: false,
                centerCoords: [51.523325, -2.578160],
                zoom: 21.25,
                quiz: [
                    {
                        coordinates: [51.523305, -2.578240],
                        title: 'QUIZ TIME!',
                        description: "Do you want to play with me and earn some points?",
                        complete: false,
                    },
                    {
                        coordinates: [51.523225, -2.578000],
                        title: 'QUIZ TIME!',
                        description: "Do you want to play with me and earn some points?",
                        complete: false,
                    },
                ],
                fact: {
                    coordinates: [51.523235, -2.578110],
                    title: "FACT TIME!",
                    description: "Do you want to learn with me and earn some points?",
                    complete: false
                }
            },

            // Era Three
            {
                era: 3,
                complete: false,
                unlocked: false,
                centerCoords: [51.523405, -2.578045],
                zoom: 20.9,
                quiz: [
                    {
                        id: 1,
                        coordinates: [51.523325, -2.577955],
                        title: 'QUIZ TIME!',
                        description: "Do you want to play with me and earn some points?",
                        complete: false,
                    },
                    {
                        id: 2,
                        coordinates: [51.523365, -2.577960],
                        title: 'QUIZ TIME!',
                        description: "Do you want to play with me and earn some points?",
                        complete: false,
                    },
                    {
                        id: 3,
                        coordinates: [51.523395, -2.578015],
                        title: 'QUIZ TIME!',
                        description: "Do you want to play with me and earn some points?",
                        complete: false,
                    },
                    {
                        id: 4,
                        coordinates: [51.523375, -2.578100],
                        title: 'QUIZ TIME!',
                        description: "Do you want to play with me and earn some points?",
                        complete: false,
                    },
                ],
                fact: {
                    coordinates: [51.523285, -2.577965],
                    title: "FACT TIME!",
                    description: "Do you want to learn with me and earn some points?",
                    complete: false
                }
            },

            // Era Four
            {
                era: 4,
                complete: false,
                unlocked: false,
                centerCoords: [51.523555, -2.578329],
                zoom: 20.9,
                quiz: [
                    {
                        coordinates: [51.523448, -2.578157],
                        title: 'QUIZ TIME!',
                        description: "Do you want to play with me and earn some points?",
                        complete: false,
                    },
                    {
                        coordinates: [51.523522, -2.578243],
                        title: 'QUIZ TIME!',
                        description: "Do you want to play with me and earn some points?",
                        complete: false,
                    },
                    {
                        coordinates: [51.523512, -2.578333],
                        title: 'QUIZ TIME!',
                        description: "Do you want to play with me and earn some points?",
                        complete: false,
                    },
                ],
                fact: {
                    coordinates: [51.523455, -2.578221],
                    title: "FACT TIME!",
                    description: "Do you want to learn with me and earn some points?",
                    complete: false
                }
            },

            // Era Five
            {
                era: 5,
                complete: false,
                unlocked: false,
                centerCoords: [51.523455, -2.578469],
                zoom: 20.9,
                quiz: [
                    {
                        coordinates: [51.523505, -2.578459],
                        title: 'QUIZ TIME!',
                        description: "Do you want to play with me and earn some points?",
                        complete: false,
                    },
                    {
                        coordinates: [51.523445, -2.578489],
                        title: 'QUIZ TIME!',
                        description: "Do you want to play with me and earn some points?",
                        complete: false,
                    },
                    {
                        coordinates: [51.523385, -2.578409],
                        title: 'QUIZ TIME!',
                        description: "Do you want to play with me and earn some points?",
                        complete: false,
                    },
                ],
                fact: {
                    coordinates: [51.523435, -2.578409],
                    title: "FACT TIME!",
                    description: "Do you want to learn with me and earn some points?",
                    complete: false
                }
            },

            // Era Six
            {
                era: 6,
                complete: false,
                unlocked: false,
                centerCoords: [51.523455, -2.578469],
                zoom: 20.8,
                quiz: [
                    {
                        coordinates: [51.523295, -2.578549],
                        title: 'QUIZ TIME!',
                        description: "Do you want to play with me and earn some points?",
                        complete: false,
                    },
                    {
                        coordinates: [51.523315, -2.578619],
                        title: 'QUIZ TIME!',
                        description: "Do you want to play with me and earn some points?",
                        complete: false,
                    },
                    {
                        coordinates: [51.523235, -2.578619],
                        title: 'QUIZ TIME!',
                        description: "Do you want to play with me and earn some points?",
                        complete: false,
                    },
                ],
                fact: {
                    coordinates: [51.523245, -2.578719],
                    title: "FACT TIME!",
                    description: "Do you want to learn with me and earn some points?",
                    complete: false
                }
            },

            // Era Seven
            {
                era: 7,
                complete: false,
                unlocked: false,
                centerCoords: [51.523311, -2.578685],
                zoom: 20.75,
                quiz: [
                    {
                        coordinates: [51.523187, -2.578401],
                        title: 'QUIZ TIME!',
                        description: "Do you want to play with me and earn some points?",
                        complete: false,
                    },
                    {
                        coordinates: [51.523134, -2.578456],
                        title: 'QUIZ TIME!',
                        description: "Do you want to play with me and earn some points?",
                        complete: false,
                    },
                ],
                fact: {
                    coordinates: [51.523116, -2.578329],
                    title: "FACT TIME!",
                    description: "Do you want to learn with me and earn some points?",
                    complete: false
                }
            },

            // Era Nine
            {
                era: 9,
                complete: false,
                unlocked: false,
                centerCoords: [51.523900, -2.577390],
                zoom: 19.6,
                quiz: [
                    {
                        coordinates: [51.523630, -2.577300],
                        title: 'QUIZ TIME!',
                        description: "Do you want to play with me and earn some points?",
                        complete: false,
                    },
                ],
                fact: {
                    coordinates: [51.523880, -2.577180],
                    title: "FACT TIME!",
                    description: "Do you want to learn with me and earn some points?",
                    complete: false
                }
            },
        ]
    },
}

class InteractionPopup extends Component {
    render () {
        return (
            <div className="map-button-popup">

                {/* Container */}
                <div className="m-b-p-main-container">

                    {/* Close Button */}
                    <button
                        className="mbp-close-container"
                        onClick={this.props.setInteraction}
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
                                {this.props.title}
                            </div>

                            {/* Description */}
                            <div className="mbpb-description">
                                {this.props.description}
                            </div>

                        </div>

                    </div>

                    {/* Button Container */}
                    <div className="mbp-button-container">

                        {/* Play Button */}
                        <Link
                            className="mbp-button mbp-play-button"
                            to="/section-three-quiz"
                            onClick={this.props.setInteractionClicked}
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
}

function UnwrappedMap() {

    const [selectedInteraction, setSelectedInteraction] = useState(null);
    const [latitude, setLatitude] = useState(51.523196);
    const [longitude, setLongitude] = useState(-2.578249);
    const [zoom, setZoom] = useState(21.25);
    const [lockedActivityPopup, setLockedActivityPopup] = useState(false);

    const eras = Interaction.locations.Sections
    const eraOneQuizOne = eras[0].quiz[0]; const eraOneQuizTwo = eras[0].quiz[1]; const factEraOne = eras[0].fact;
    const eraTwoQuizOne = eras[1].quiz[0]; const eraTwoQuizTwo = eras[1].quiz[2]; const factEraTwo = eras[1].fact;
    const eraThreeQuizOne = eras[2].quiz[0]; const eraThreeQuizTwo = eras[2].quiz[1]; const eraThreeQuizThree = eras[2].quiz[2]; const eraThreeQuizFour = eras[2].quiz[3]; const factEraThree = eras[2].fact;
    const eraFourQuizOne = eras[3].quiz[0]; const eraFourQuizTwo = eras[3].quiz[1]; const eraFourQuizThree = eras[3].quiz[2]; const factEraFour = eras[3].fact;
    const eraFiveQuizOne = eras[4].quiz[0]; const eraFiveQuizTwo = eras[4].quiz[1]; const eraFiveQuizThree = eras[4].quiz[2]; const factEraFive = eras[4].fact;
    const eraSixQuizOne = eras[5].quiz[0]; const eraSixQuizTwo = eras[5].quiz[1]; const eraSixQuizThree = eras[5].quiz[2]; const factEraSix = eras[5].fact;
    const eraSevenQuizOne = eras[6].quiz[0]; const eraSevenQuizTwo = eras[6].quiz[1]; const factEraSeven = eras[6].fact;
    const eraNineQuizOne = eras[7].quiz[0]; const eraNineQuizTwo = eras[7].quiz[1]; const factEraNine = eras[7].fact;

    const isEraOneComplete = () => {
        const era = eras[0];
        const quiz = eras[0].quiz;
        const fact = eras[0].fact;

        if (fact.complete && quiz[0].complete && quiz[1].complete) {
            era.complete = true;
        } else {
            era.complete = false;
        }
    }
    isEraOneComplete();

    const isEraTwoComplete = () => {
        const era = eras[1];
        const quiz = eras[1].quiz;
        const fact = eras[1].fact;

        if (fact.complete && quiz[0].complete) {
            era.complete = true;
        } else {
            era.complete = false;
        }
    }
    isEraTwoComplete();

    const isEraThreeComplete = () => {
        const era = eras[2];
        const quiz = eras[2].quiz;
        const fact = eras[2].fact;

        {
            quiz.map((quizzes) => {
                if (fact.complete && quiz[0].complete && quiz[1].complete && quiz[2].complete && quiz[3].complete) {
                    era.complete = true;
                } else {
                    era.complete = false;
                }
            })
        }
    }
    isEraThreeComplete();

    const isEraFourComplete = () => {
        const era = eras[3];
        const quiz = eras[3].quiz;
        const fact = eras[3].fact;

        if (fact.complete && quiz[0].complete && quiz[1].complete && quiz[2].complete ) {
            era.complete = true;
        } else {
            era.complete = false;
        }
    }
    isEraFourComplete();

    const isEraFiveComplete = () => {
        const era = eras[4];
        const quiz = eras[4].quiz;
        const fact = eras[4].fact;

        if (fact.complete && quiz[0].complete && quiz[1].complete) {
            era.complete = true;
        } else {
            era.complete = false;
        }
    }
    isEraFiveComplete();

    const isEraSixComplete = () => {
        const era = eras[5];
        const quiz = eras[5].quiz;
        const fact = eras[5].fact;

        if (fact.complete && quiz[0].complete && quiz[1].complete && quiz[2].complete) {
            era.complete = true;
        } else {
            era.complete = false;
        }
    }
    isEraSixComplete();

    const isEraSevenComplete = () => {
        const era = eras[6];
        const quiz = eras[6].quiz;
        const fact = eras[6].fact;

        if (fact.complete && quiz[0].complete && quiz[1].complete) {
            era.complete = true;
        } else {
            era.complete = false;
        }
    }
    isEraSevenComplete();

    const isEraNineComplete = () => {
        const era = eras[7];
        const quiz = eras[7].quiz;
        const fact = eras[7].fact;

        if (fact.complete && quiz[0].complete && quiz[1].complete) {
            era.complete = true;
        } else {
            era.complete = false;
        }
    }
    isEraNineComplete();

    if(eras[0].complete) { eras[1].unlocked = true }
    if(eras[1].complete) { eras[2].unlocked = true }
    if(eras[2].complete) { eras[3].unlocked = true }
    if(eras[3].complete) { eras[4].unlocked = true }
    if(eras[4].complete) { eras[5].unlocked = true }
    if(eras[5].complete) { eras[6].unlocked = true }
    if(eras[6].complete) { eras[7].unlocked = true }

    console.log("Selected Interaction: ", selectedInteraction)

    // Sets Location when an era is completed
    useEffect(() => {
        if(!eras[0].complete) {
            setLatitude(eras[0].centerCoords[0])
            setLongitude(eras[0].centerCoords[1])
            setZoom(eras[0].zoom)
        }
        if(eras[0].complete && !eras[1].complete) {
            setLatitude(eras[1].centerCoords[0])
            setLongitude(eras[1].centerCoords[1])
            setZoom(eras[1].zoom)
        }
        if(eras[1].complete && !eras[2].complete) {
            setLatitude(eras[2].centerCoords[0])
            setLongitude(eras[2].centerCoords[1])
            setZoom(eras[2].zoom)
        }
        if(eras[2].complete && !eras[3].complete) {
            setLatitude(eras[3].centerCoords[0])
            setLongitude(eras[3].centerCoords[1])
            setZoom(eras[3].zoom)
        }
        if(eras[3].complete && !eras[4].complete) {
            setLatitude(eras[4].centerCoords[0])
            setLongitude(eras[4].centerCoords[1])
            setZoom(eras[4].zoom)
        }
        if(eras[4].complete && !eras[5].complete) {
            setLatitude(eras[5].centerCoords[0])
            setLongitude(eras[5].centerCoords[1])
            setZoom(eras[5].zoom)
        }
        if(eras[5].complete && !eras[6].complete) {
            setLatitude(eras[6].centerCoords[0])
            setLongitude(eras[6].centerCoords[1])
            setZoom(eras[6].zoom)
        }
        if(eras[6].complete && !eras[7].complete) {
            setLatitude(eras[7].centerCoords[0])
            setLongitude(eras[7].centerCoords[1])
            setZoom(eras[7].zoom)
        }
    })

    return (
        // Creates map
        <GoogleMap
            zoom={zoom}
            defaultCenter={{lat: latitude, lng: longitude}}
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
            <GroundOverlay
                bounds={new google.maps.LatLngBounds(
                    new google.maps.LatLng(51.523300, -2.578030),
                    new google.maps.LatLng(51.524255, -2.576465),
                )}
                url={ConcordeOverlay}
                opacity={1}
            />

            {/* Marker Setup */}
            {
                Interaction.locations.Sections.map((interaction) => interaction.quiz.map((quizInteraction) => (
                    <div className="">
                        <Marker
                            key={quizInteraction.id}
                            position={{
                                lat: quizInteraction.coordinates[0],
                                lng: quizInteraction.coordinates[1]
                            }}
                            onClick={() => {
                                interaction.unlocked === true && quizInteraction.complete === false ? setSelectedInteraction(quizInteraction) :
                                interaction.unlocked === false ? setLockedActivityPopup(true) && console.log(lockedActivityPopup) : console.log("null")
                            }}
                            icon={
                                interaction.unlocked === true && quizInteraction.complete === true ? QuizComplete :
                                    interaction.unlocked === true && quizInteraction.complete === false ? QuizIncomplete :
                                        interaction.unlocked !== true ? QuizLocked : null
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
                                    interaction.unlocked === false ? setLockedActivityPopup(true) && console.log(lockedActivityPopup) : console.log("null")
                            }}
                            icon={
                                interaction.unlocked === true && interaction.fact.complete === true ? FactComplete :
                                    interaction.unlocked === true && interaction.fact.complete === false ? FactIncomplete :
                                        interaction.unlocked === false ? FactLocked : null
                            }
                        />
                    </div>
                )))
            }


            {/* Locked Popup Trigger */}
            {
                lockedActivityPopup === true && (
                    <div className="locked-popup-container">
                        <div className="lp-box">
                            <div className="hpb-inner-container">

                                {/* Close Button */}
                                <div className="hpb-close-button">
                                    <button onClick={() => setLockedActivityPopup(false)}>
                                        <img src={CloseButton} alt="Close Menu"/>
                                    </button>
                                </div>

                                {/* Body Section */}
                                <div className="hpb-body-container">

                                    {/* Title */}
                                    <div className="hpdb-inner-container hpdb-title-container">
                                        NOT READY YET!
                                    </div>

                                    {/* Image */}
                                    <div className="hpdb-inner-container hpdb-image-container">

                                        <div className="hpdbi-bubble">
                                            <img src={BackdropBubble} />
                                        </div>

                                        <div className="lp-image">
                                            <img src={LockedImg} alt="Locked"/>
                                        </div>

                                    </div>

                                    {/* Description */}
                                    <div className="hpdb-inner-container hpdb-description-container">
                                        Complete all unlocked activities first to unlock this one!
                                    </div>


                                    {/* Button */}
                                    <div className="hpdb-inner-container hpdb-button-container">
                                        <button className="hpdb-button" onClick={() => setLockedActivityPopup(false)}>
                                            OK
                                        </button>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>



                )
            }

            {/* Selecting Interactions - Quiz */}
            {

                // Era One
                selectedInteraction === eraOneQuizOne && (
                    <InteractionPopup
                        title={selectedInteraction.title}
                        description={selectedInteraction.description}
                        setInteraction={() => setSelectedInteraction(null)}
                        setInteractionClicked={() => selectedInteraction.complete = true}
                    />
                ) ||
                selectedInteraction === eraOneQuizTwo && (
                    <InteractionPopup
                        title={selectedInteraction.title}
                        description={selectedInteraction.description}
                        setInteraction={() => setSelectedInteraction(null)}
                        setInteractionClicked={() => selectedInteraction.complete = true}
                    />
                ) ||

                // Era Two
                selectedInteraction === eraTwoQuizOne && (
                    <InteractionPopup
                        title={selectedInteraction.title}
                        description={selectedInteraction.description}
                        setInteraction={() => setSelectedInteraction(null)}
                        setInteractionClicked={() => selectedInteraction.complete = true}
                    />
                ) ||
                selectedInteraction === eraTwoQuizTwo && (
                    <InteractionPopup
                        title={selectedInteraction.title}
                        description={selectedInteraction.description}
                        setInteraction={() => setSelectedInteraction(null)}
                        setInteractionClicked={() => selectedInteraction.complete = true}
                    />
                ) ||

                // Era Three
                selectedInteraction === eraThreeQuizOne && (
                    <InteractionPopup
                        title={selectedInteraction.title}
                        description={selectedInteraction.description}
                        setInteraction={() => setSelectedInteraction(null)}
                        setInteractionClicked={() => selectedInteraction.complete = true}
                    />
                ) ||
                selectedInteraction === eraThreeQuizTwo && (
                    <InteractionPopup
                        title={selectedInteraction.title}
                        description={selectedInteraction.description}
                        setInteraction={() => setSelectedInteraction(null)}
                        setInteractionClicked={() => selectedInteraction.complete = true}
                    />
                ) ||
                selectedInteraction === eraThreeQuizThree && (
                    <InteractionPopup
                        title={selectedInteraction.title}
                        description={selectedInteraction.description}
                        setInteraction={() => setSelectedInteraction(null)}
                        setInteractionClicked={() => selectedInteraction.complete = true}
                    />
                ) ||
                selectedInteraction === eraThreeQuizFour && (
                    <InteractionPopup
                        title={selectedInteraction.title}
                        description={selectedInteraction.description}
                        setInteraction={() => setSelectedInteraction(null)}
                        setInteractionClicked={() => selectedInteraction.complete = true}
                    />
                ) ||

                // Era Four
                selectedInteraction === eraFourQuizOne && (
                    <InteractionPopup
                        title={selectedInteraction.title}
                        description={selectedInteraction.description}
                        setInteraction={() => setSelectedInteraction(null)}
                        setInteractionClicked={() => selectedInteraction.complete = true}
                    />
                ) ||
                selectedInteraction === eraFourQuizTwo && (
                    <InteractionPopup
                        title={selectedInteraction.title}
                        description={selectedInteraction.description}
                        setInteraction={() => setSelectedInteraction(null)}
                        setInteractionClicked={() => selectedInteraction.complete = true}
                    />
                ) ||
                selectedInteraction === eraFourQuizThree && (
                    <InteractionPopup
                        title={selectedInteraction.title}
                        description={selectedInteraction.description}
                        setInteraction={() => setSelectedInteraction(null)}
                        setInteractionClicked={() => selectedInteraction.complete = true}
                    />
                ) ||

                // Era Five
                selectedInteraction === eraFiveQuizOne && (
                    <InteractionPopup
                        title={selectedInteraction.title}
                        description={selectedInteraction.description}
                        setInteraction={() => setSelectedInteraction(null)}
                        setInteractionClicked={() => selectedInteraction.complete = true}
                    />
                ) ||
                selectedInteraction === eraFiveQuizTwo && (
                    <InteractionPopup
                        title={selectedInteraction.title}
                        description={selectedInteraction.description}
                        setInteraction={() => setSelectedInteraction(null)}
                        setInteractionClicked={() => selectedInteraction.complete = true}
                    />
                ) ||
                selectedInteraction === eraFiveQuizThree && (
                    <InteractionPopup
                        title={selectedInteraction.title}
                        description={selectedInteraction.description}
                        setInteraction={() => setSelectedInteraction(null)}
                        setInteractionClicked={() => selectedInteraction.complete = true}
                    />
                ) ||

                // Era Six
                selectedInteraction === eraSixQuizOne && (
                    <InteractionPopup
                        title={selectedInteraction.title}
                        description={selectedInteraction.description}
                        setInteraction={() => setSelectedInteraction(null)}
                        setInteractionClicked={() => selectedInteraction.complete = true}
                    />
                ) ||
                selectedInteraction === eraSixQuizTwo && (
                    <InteractionPopup
                        title={selectedInteraction.title}
                        description={selectedInteraction.description}
                        setInteraction={() => setSelectedInteraction(null)}
                        setInteractionClicked={() => selectedInteraction.complete = true}
                    />
                ) ||
                selectedInteraction === eraSixQuizThree && (
                    <InteractionPopup
                        title={selectedInteraction.title}
                        description={selectedInteraction.description}
                        setInteraction={() => setSelectedInteraction(null)}
                        setInteractionClicked={() => selectedInteraction.complete = true}
                    />
                ) ||

                // Era Seven
                selectedInteraction === eraSevenQuizOne && (
                    <InteractionPopup
                        title={selectedInteraction.title}
                        description={selectedInteraction.description}
                        setInteraction={() => setSelectedInteraction(null)}
                        setInteractionClicked={() => selectedInteraction.complete = true}
                    />
                ) ||
                selectedInteraction === eraSevenQuizTwo && (
                    <InteractionPopup
                        title={selectedInteraction.title}
                        description={selectedInteraction.description}
                        setInteraction={() => setSelectedInteraction(null)}
                        setInteractionClicked={() => selectedInteraction.complete = true}
                    />
                ) ||

                // Era Nine
                selectedInteraction === eraNineQuizOne && (
                    <InteractionPopup
                        title={selectedInteraction.title}
                        description={selectedInteraction.description}
                        setInteraction={() => setSelectedInteraction(null)}
                        setInteractionClicked={() => selectedInteraction.complete = true}
                    />
                )
            }

            {/* Selecting Interactions - Fact */}
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
                )
            }
        </GoogleMap>
    )
}


const WrappedMap = withScriptjs(withGoogleMap(UnwrappedMap));

export default function Map() {

    const [endPopup, setEndPopup] = useState(false)

    const togglePopup = () => {
        setEndPopup(!endPopup);
        console.log(endPopup)
    }

    const EndAdventurePopup = () => {
        return(
            endPopup === true && (
                <div className="end-adventure-container">
                    <div className="e-a-box-container">
                        <div className="e-a-b-inner-container">

                            {/* Close Button */}
                            <div className="e-a-b-close" onClick={togglePopup}>
                                <img src={CloseButton} alt="Close Menu"/>
                            </div>

                            {/* Title */}
                            <div className="e-a-b-title">
                                DO YOU WANT TO QUIT?
                            </div>

                            {/* Subtitle */}
                            <div className="e-a-b-subtitle">
                                Your points won't be added!
                            </div>

                            {/* Buttons */}
                            <div className="e-a-b-button-container">
                                <Link to="/leaderboard" className="eab-button eab-yes-button">
                                    YES
                                </Link>

                                <button className="eab-button eab-no-button">
                                    NO
                                </button>

                            </div>

                        </div>
                    </div>
                </div>
            )
        )
    }

    return (
        <div className="map-section-container">
            <EndAdventurePopup />

            {/* Header Section */}
            <div className="w-m-header-container">

                {/* Background Image */}
                <div className="w-m-h-image">
                    <img src={HeaderBackdrop} alt="Header Section"/>
                </div>

                {/* Inner Container */}
                <div className="w-m-h-inner-container">

                    {/* Character Icon */}
                    <button
                        className="w-m-h-character"
                        onClick={togglePopup}
                    >
                        <img src={CharIcon} alt="User" />
                    </button>

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
