/* global google */

import React, {useEffect, useState} from 'react';
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
                centerCoords: [51.523238, -2.57822],
                zoom: 21.25,
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
                centerCoords: [51.523325, -2.578160],
                zoom: 20.9,
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
                centerCoords: [51.523405, -2.578045],
                zoom: 20.9,
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
                centerCoords: [51.523555, -2.578329],
                zoom: 20.9,
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
                centerCoords: [51.523455, -2.578469],
                zoom: 20.8,
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
                centerCoords: [51.523311, -2.578685],
                zoom: 20.75,
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
                centerCoords: [51.523186, -2.578438],
                zoom: 21.15,
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
    const [zoom, setZoom] = useState(21.25);

    const eras = Interaction.locations.Sections
    const quizEraOne = eras[0].quiz; const factEraOne = eras[0].fact;
    const quizEraTwo = eras[1].quiz; const factEraTwo = eras[1].fact;
    const quizEraThree = eras[2].quiz; const factEraThree = eras[2].fact;
    const quizEraFour = eras[3].quiz; const factEraFour = eras[3].fact;
    const quizEraFive = eras[4].quiz; const factEraFive = eras[4].fact;
    const quizEraSix = eras[5].quiz; const factEraSix = eras[5].fact;
    const quizEraSeven = eras[6].quiz; const factEraSeven = eras[6].fact;
    const quizEraEight = eras[7].quiz; const factEraEight = eras[7].fact;

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

    console.log("Set Lat: " + setLatitude + ", Set Lon: " + setLongitude); console.log("Lat: " + latitude + ", Lon: " + longitude); console.log("Zoom Level: ", zoom);

    return (
        // Creates map
        <GoogleMap
            defaultZoom={21.15}
            zoom={zoom}
            defaultCenter={{lat: 51.523176, lng: -2.578209}}
            center={{lat: latitude, lng: longitude}}
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
