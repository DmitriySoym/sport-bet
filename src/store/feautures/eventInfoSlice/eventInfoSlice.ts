import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IEventInfoSlice {
  firstTeam: string;
  secondTeam: string;
  eventType: string;
}
const initialState: IEventInfoSlice = {
  firstTeam: "",
  secondTeam: "",
  eventType: "",
};

const eventInfoSlice = createSlice({
  name: "eventInfo",
  initialState,
  reducers: {
    setFirstTeam(state, { payload }) {
      state.firstTeam = payload.firstTeam;
      state.secondTeam = payload.secondTeam;
      state.eventType = payload.eventType;
    },
  },
});

export default eventInfoSlice.reducer;

export const { setFirstTeam } = eventInfoSlice.actions;
