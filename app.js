const { argv } = require('./config/yargs');
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const getInfo = async direccion => {

    try {
        const lugarResp = await lugar.getLugarLatLng(direccion);
        const climaResp = await clima.getClima(lugarResp.lat, lugarResp.lng);
        return `El clima de ${lugarResp.direccion} es de: ${climaResp}`;
    } catch (err) {
        throw `No se pudo determinar el clima de ${direccion}`;
    }


}

getInfo(argv.direccion).then(console.log).catch(console.log);