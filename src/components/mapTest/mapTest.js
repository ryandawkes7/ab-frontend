import React, {Component} from 'react';

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

    getPermissions = () => {
    }

    getLocation() {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.getCoordinates, this.handleLocationError);
        } else {
            alert("Geolocation not supported by this browser");
        }
    }

    getCoordinates(position) {
        this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        })
    }

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
                <h2>React Geolocation Example</h2>
                <button onClick={this.getLocation}>Get Coordinates</button>
                <h4>HTML5 Coordinates</h4>
                <p>Latitude: {this.state.latitude}</p>
                <p>Longitude: {this.state.longitude}</p>
                <p>Address: {this.state.userAddress}</p>
                {this.state.latitude && this.state.longitude ?
                    <img src={`https://maps.googleapis.com/maps/api/staticmap?center=${this.state.latitude},${this.state.longitude}&zoom=14&size=400x300&sensor=false&markers=color:red%7C${this.state.latitude},${this.state.longitude}&key=${process.env.REACT_APP_GOOGLE_KEY}`} alt=""/>
                    :
                    null
                }
            </div>
        );
    }
}

export default MapTest;
