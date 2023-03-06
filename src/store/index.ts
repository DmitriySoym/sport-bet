import { store } from "./store";
import { useAppDispatch } from "./hooks/hooks";
import { fetchEvents } from "./feautures/eventsSlice/eventsSlice";
import { getAllEvents } from "./selectors/eventsSelector";
import { useAppSelector } from "./hooks/hooks";

export { store, useAppDispatch, fetchEvents, getAllEvents, useAppSelector };
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
