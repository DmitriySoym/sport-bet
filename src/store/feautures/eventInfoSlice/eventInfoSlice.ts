import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IEventInfoSlice {
  firstTeam: string;
  secondTeam: string;
  eventType: string;
  messageStatus: boolean;
}
const initialState: IEventInfoSlice = {
  firstTeam: "",
  secondTeam: "",
  eventType: "",
  messageStatus: false,
};

const eventInfoSlice = createSlice({
  name: "eventInfo",
  initialState,
  reducers: {
    setEventInfo(state, { payload }) {
      state.firstTeam = payload.firstTeam;
      state.secondTeam = payload.secondTeam;
      state.eventType = payload.eventType;
      state.messageStatus = !state.messageStatus;
    },
  },
});

export default eventInfoSlice.reducer;

export const { setEventInfo } = eventInfoSlice.actions;
