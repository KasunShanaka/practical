import axios from 'axios';

const url = 'http://157.245.61.32:7979/vehicles';

export const fetchVehicles = () => axios.get(url);
export const filterVehicles = (brand) => axios.get(`${url}?details.brand=${brand}`)