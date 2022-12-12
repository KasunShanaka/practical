import { combineReducers } from "redux";
import newBidReducer from "./newBid";
import vehicleReducer from "./vehicles";

const allReducers = combineReducers({
    vehicles: vehicleReducer,
    badeVehicles: newBidReducer,
})

export default allReducers;