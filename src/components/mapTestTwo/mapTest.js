import React, { Component, useState } from 'react'
import {withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow} from 'react-google-maps'
import QuizIcon from "../map/assets/quiz-icon.svg";
import FactIcon from "../map/assets/picture-icon.svg";
import GameIcon from "../map/assets/game-icon.svg";
import {compose, withProps} from "recompose";
import {Link} from "react-router-dom";

const UnwrappedMap = compose(
    withProps({
        googleMapURL: `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`,
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `100vh` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
)((props) =>
    <GoogleMap
        defaultZoom={25}
        center={{lat: props.currentLocation.lat, lng: props.currentLocation.lng}}
        defaultCenter={{lat: 51.523214, lng: -2.578499}}
    >
        {props.isMarkerShown &&
        <Marker
            position={{ lat: props.currentLocation.lat, lng: props.currentLocation.lng }}
            onClick={props.onMarkerClick}
        />
        }
        {MapInteractions.locations.map(clickableInteractions => (
            <Marker
                key={clickableInteractions.id}
                position={{
                    lat: clickableInteractions.coordinates[0],
                    lng: clickableInteractions.coordinates[1]
                }}
                onClick={() => {
                    props.setSelectedInteraction(clickableInteractions);
                }}
                icon={
                    clickableInteractions.type === "Quiz" && (QuizIcon)
                    ||
                    clickableInteractions.type === "Fact" && (FactIcon)
                    ||
                    clickableInteractions.type === "Game" && (GameIcon)
                }
            />
        ))}
        {
            props.selectedInteraction === MapInteractions.locations[0] && (
                <div className="map-info-window">
                    <InfoWindow
                        position={{
                            lat: props.selectedInteraction.coordinates[0] + 0.000065,
                            lng: props.selectedInteraction.coordinates[1]
                        }}
                        onCloseClick={() => {
                        }}
                    >
                        <div className="map-button">
                            <h2>{ props.selectedInteraction.type }</h2>
                            <Link to="/quiz" className="map-basic-btn map-quiz-btn">
                                <h3>{props.selectedInteraction.description}</h3>
                            </Link>
                        </div>
                    </InfoWindow>
                </div>
            )
        }

    </GoogleMap>
)

const MapInteractions = {
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

class MapTest extends Component {
    constructor(props){
        super(props)
        this.state = {
            currentLatLng: {
                lat: null,
                lng: null
            },
            isMarkerShown: false,
            selectedInteraction: null,
            setSelectedInteraction: null
        }
    }

    selectedInteraction () {
        useState(null);
    }
    setSelectedInteraction() {
        useState(null);
    }

    componentWillUpdate () {
        this.getLocation()
    }

    componentDidMount () {
        this.delayedShowMarker()
    }

    delayedShowMarker = () => {
        setTimeout(() => {
            this.getLocation()
            this.setState({ isMarkerShown: true })
        }, 5000)
    }

    handleMarkerClick = () => {
        this.setState({ isMarkerShown: false })
        this.delayedShowMarker()
    }

    getLocation = () => {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    console.log(position.coords);
                    this.setState(prevState => ({
                        currentLatLng: {
                            ...prevState.currentLatLng,
                            lat: position.coords.latitude,
                            lng: position.coords.longitude
                        }
                    }))
                }
            )
        } else {
            console.log("error")
        }
    }

    render() {
        return (
            <UnwrappedMap
                isMarkerShown={this.state.isMarkerShown}
                onMarkerClick={this.handleMarkerClick}
                currentLocation={this.state.currentLatLng}
                selectedInteraction={this.state.selectedInteraction}
                setSelectedInteraction={this.state.setSelectedInteraction}
            />
        )
    }
}

export default MapTest;


