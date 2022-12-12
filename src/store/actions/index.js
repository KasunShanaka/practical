import * as api from '../../api';

export const getVehicles = (brand) => async (dispatch) => {
    try {
        if (brand) {
            const { data } = await api.filterVehicles(brand);
            dispatch({
                type: 'FETCH_VEHICLES',
                payload: data,
            });
        } else {
            const { data } = await api.fetchVehicles();
            dispatch({
                type: 'FETCH_VEHICLES',
                payload: data,
            });
        }
    } catch (error) {
        console.log(error.message);
    }
}

export const newBid = (badeData) => (dispatch) => {
    dispatch({
        type: 'NEW_BID',
        payload: badeData,
    });
}

export const clearBids = () => (dispatch) => {
    dispatch({
        type: 'CLEAR',
    });
}