import React from 'react';

class Weather extends React.Component {
    render(){
        try {
            const locationFull = this.props.weather.current_observation.display_location.full;
            const weather = this.props.weather.current_observation.weather;
            const icon = this.props.weather.current_observation.icon_url;
            const temp = this.props.weather.current_observation.temperature_string;

            return(
                <div>
                    <h3>{locationFull}</h3>
                    <h3>{weather}</h3>
                    <img src={icon}/>
                    <h1>{temp}</h1>
                    <ul className="list-group">
					<li className="list-group-item"><strong>Relative Humidity: </strong>{this.props.weather.current_observation.relative_humidity}</li>
					<li className="list-group-item"><strong>Wind: </strong>{this.props.weather.current_observation.wind_string}</li>
					<li className="list-group-item"><strong>Dewpoint: </strong>{this.props.weather.current_observation.dewpoint_string}</li>
				</ul>
                </div>
            )
        } catch(e) {
            return ( <div></div>);
        }
    }
}

export default Weather;