import { store, AppDispatch, RootState } from "./store";
import { useAppDispatch } from "./hooks/hooks";
import { fetchEvents } from "./feautures/eventsSlice/eventsSlice";
import { getAllEvents } from "./selectors/eventsSelector";
import { useAppSelector } from "./hooks/hooks";
import { getDetailEvent } from "./selectors/detailEventSelector";
import { fetchDitailEvent } from "./feautures/detailEventSlice/detailEventSlice";
import { getEventInfo } from "./selectors/eventInfoSelector";

export {
  store,
  useAppDispatch,
  fetchEvents,
  getAllEvents,
  useAppSelector,
  getDetailEvent,
  fetchDitailEvent,
  getEventInfo,
};
export type { AppDispatch, RootState };
