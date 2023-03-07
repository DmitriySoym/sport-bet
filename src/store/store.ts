import { configureStore } from "@reduxjs/toolkit";
import eventsReduser from "./feautures/eventsSlice/eventsSlice";
import detailEventReducer from "./feautures/detailEventSlice/detailEventSlice";
import eventInfoReducer from "./feautures/eventInfoSlice/eventInfoSlice";

export const store = configureStore({
  reducer: {
    events: eventsReduser,
    detailEvent: detailEventReducer,
    eventInfo: eventInfoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
