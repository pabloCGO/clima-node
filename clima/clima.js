const axios = require('axios');

const getClima = async(lat, lng) => {
    const params = {
        appid: '32f843d833c38373032f825c4a92418a',
        lat: lat,
        lon: lng,
        units: 'metric'
    }
    const resp = await axios.get('http://api.openweathermap.org/data/2.5/weather', { params });
    return resp.data.main.temp;
}

module.exports = {
    getClima
}