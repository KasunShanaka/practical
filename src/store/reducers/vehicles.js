const vehicleReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_VEHICLES':
            return action.payload;
        default:
            return state;
    }
};

export default vehicleReducer;