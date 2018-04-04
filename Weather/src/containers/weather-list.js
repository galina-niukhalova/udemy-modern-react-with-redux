import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReducerWeather from '../reducers/reducer-weather';
import Chart from '../components/chart.js';
import GoogleMap from '../components/google-map';


class WeatherList extends Component {

    renderWeather(cityData) {
        const name = cityData.city.name;
        const { lon, lat } = cityData.city.coord;

        const getData = (param) => {
            return cityData.list.map(el => el.main[param]);
        };

        return (
            <tr key={name}>
                <td><GoogleMap lon={lon} lat={lat} /></td>
                <td><Chart data={getData('temp')} color='orange' units='K' /></td>
                <td><Chart data={getData('pressure')} color='green' units='hPa' /></td>
                <td><Chart data={getData('humidity')} color='black' units='%' /></td>
            </tr>
        );
    }

    render() {
        return (
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}


function mapStateToProp({ weather }) {
    return { weather };
}

export default connect(mapStateToProp)(WeatherList);

