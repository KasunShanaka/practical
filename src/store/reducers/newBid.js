const newBidReducer = (state = [], action) => {
    switch (action.type) {
        case 'CLEAR':
            state = []
            return state;
        case 'NEW_BID':
            state.push(action.payload);
            return state;
        default:
            return state;
    }
};

export default newBidReducer;