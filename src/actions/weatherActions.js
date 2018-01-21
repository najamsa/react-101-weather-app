import axios from 'axios';

function fetchWeather(location){
    const url = `http://api.wunderground.com/api/PUT_YOUR_WEATHER_KEY/conditions/q/${location.state}/${location.city}.json`;
    return function(dispatch){
        dispatch({ type: "FETCH_WEATHER"});
        axios.get(url)
        .then((res) => {
            dispatch({ type: "FETCH_WEATHER_FULFILLED",
                        payload: res.data})
        })
        .catch((err) => {
            dispatch({ type: 'FETCH_WEATHER_REJECTED',
                        payload: err})
        });
    }
}

export default fetchWeather;
