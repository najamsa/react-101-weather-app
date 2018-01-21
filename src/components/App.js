import React from 'react';
import { connect } from 'react-redux';
import Weather from './Weather';
import LocationForm from './LocationForm';
import fetchWeather from '../actions/weatherActions';

const mapStoreToProps = (store) => {
     return {
         weather: store.weather.weather,
     };
};

class AppComponent extends React.Component {
    componentWillMount(){
        this.props.dispatch(
            fetchWeather({
                city: "Bengaluru",
                state: "Karnataka" 
           })
        );
    }

    onLocationChange = (location) => {
        this.props.dispatch(
            fetchWeather({
                city: location.city,
                state: location.state
           })
        );
    }

    render(){
        const { weather } = this.props;

        return(
            <div className="container">
                <div className="row">
                <div className="text-center col-md-6 col-md-offset-3">
                <h1>WeatherCheck</h1>
                <Weather weather={weather} />
                <LocationForm onLocationChange={this.onLocationChange} />
                </div>
                </div>
            </div>
        )
    }
}

export default connect(mapStoreToProps)(AppComponent);