const newBidReducer = (state = [], action) => {
    switch (action.type) {
        case 'NEW_BID':
            console.log(state)
            state.push(action.payload);
        default:
            return state;
    }
};

export default newBidReducer;