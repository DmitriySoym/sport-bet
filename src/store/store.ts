import { configureStore } from "@reduxjs/toolkit";
import eventsReduser from "./feautures/eventsSlice/eventsSlice";
import detailEventReducer from "./feautures/detailEventSlice/detailEventSlice";

export const store = configureStore({
  reducer: {
    events: eventsReduser,
    detailEvent: detailEventReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
