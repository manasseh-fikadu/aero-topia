import { combineReducers } from "@reduxjs/toolkit";
import authSliceReducer from "./auth/slice";
import servicesSliceReducer from "./services/slice";
// import orderSliceReducer from "./order/slice";

const rootReducer = combineReducers({
  auth: authSliceReducer.reducer,
  services: servicesSliceReducer.reducer,
//   order: orderSliceReducer.reducer,
});

export default rootReducer;