const axios = require('axios');

const getLugarLatLng = async(dir) => {
    const encodeUrl = encodeURI(dir);
    const params = {
        auth: '102612831168463e15961116x127528',
        /*locate: 'Stora Torget 1, 582 19 Linkoping',*/
        locate: encodeUrl,
        json: '1'
    }

    const resp = await axios.get('https://geocode.xyz', { params });
    const respuesta = resp.data;
    if (respuesta.error) {
        throw new Error(`No hay resultados para: ${dir}`);
    }
    const direccion = respuesta.standard.city;
    const lat = respuesta.latt;
    const lng = respuesta.longt;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}