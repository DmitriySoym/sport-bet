import { store, AppDispatch, RootState } from "./store";
import { useAppDispatch } from "./hooks/hooks";
import { fetchEvents } from "./feautures/eventsSlice/eventsSlice";
import { getAllEvents } from "./selectors/eventsSelector";
import { useAppSelector } from "./hooks/hooks";

export { store, useAppDispatch, fetchEvents, getAllEvents, useAppSelector };
export type { AppDispatch, RootState };
