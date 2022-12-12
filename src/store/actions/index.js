import * as api from '../../api';

export const getVehicles = () => async (dispatch) => {
    try {
        const { data } = await api.fetchVehicles();
        dispatch({
            type: 'FETCH_VEHICLES',
            payload: data,
        });
    } catch (error) {
        console.log(error.message);
    }
}

export const newBid = (newData) => (dispatch) => {
    console.log(newData)
    dispatch({
        type: 'NEW_BID',
        payload: newData,
    });
}