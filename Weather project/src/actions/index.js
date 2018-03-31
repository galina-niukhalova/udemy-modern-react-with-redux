import axios from 'axios';

const API_KEY = '582a921f76a9627ec91f80c32da23190';

export const FETCH_WEATHER = 'FETCH_WEATHER';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?&appid=${API_KEY}`;


export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    return {
        'type': FETCH_WEATHER,
        'payload': request
    };
}