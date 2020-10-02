import React, {Component} from 'react';
import { Map, GoogleApiWrapper } from "google-maps-react";

const mapStyles = {
    width: '100%',
    height: '100%',
};

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

class MapTest extends Component {

    constructor (props) {
        super(props);
        this.state = {
            latitude: null,
            longitude: null,
            userAddress: null
        };
        this.getLocation = this.getLocation.bind(this);
        this.getCoordinates = this.getCoordinates.bind(this);
    }

    getLocation() {
        if(navigator.geolocation) {
            navigator.geolocation.watchPosition(this.getCoordinates, this.handleLocationError);
            navigator.geolocation.getCurrentPosition(function (position) {
                console.log(position)
            })
        } else {
            alert("Geolocation not supported by this browser");
        }
    }

    getCoordinates(position) {
        const latlon = position.coords.latitude + ", " + position.coords.longitude
        this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        })
    }

    //Error Handling
    handleLocationError(error) {
        switch(error.code){
            case error.PERMISSION_DENIED:
                alert("Denied request for Geolocation")
                break;
            case error.POSITION_UNAVAILABLE:
                alert("Location info is unavailable")
                break;
            case error.TIMEOUT:
                alert("Location request has timed out")
                break;
            case error.UNKNOWN_ERR:
                alert("An unknown error occurred")
                break;
            default:
                alert("An unknown error occurred")
        }
    }

    render () {
        return (
            <div>
                <button onClick={this.getLocation}>Location</button>
                <h2>Lon: { this.state.longitude }, Lat: {this.state.latitude}</h2>
                <Map
                    google={this.props.google}
                    zoom={14}
                    style={mapStyles}
                    initialCenter={{
                        lat: this.state.latitude,
                        lng: this.state.longitude
                    }}
                />
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyC-AmFN95fVGvNGJrQULEoHAX-1BYkk7xg'
})(MapTest);
