import { configureStore } from "@reduxjs/toolkit";
import dogReducer from "./slices/dogSlices";
const store = configureStore({
  reducer: {
    dogs: dogReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
