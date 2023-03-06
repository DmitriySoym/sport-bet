import { configureStore } from "@reduxjs/toolkit";
import eventsReduser from "./feautures/eventsSlice/eventsSlice";

export const store = configureStore({
  reducer: {
    events: eventsReduser,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
