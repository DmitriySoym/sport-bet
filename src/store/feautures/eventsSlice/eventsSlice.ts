import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

interface IEventState {
  events: any[];
  isLoading: boolean;
  error: null | string;
}
export const fetchEvents = createAsyncThunk<
  any[],
  { endPoint: string },
  { rejectValue: string }
>(
  "events/fetchEvents",

  async ({ endPoint }, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://64058b8beed195a99f856ad5.mockapi.io/sport-bet/${endPoint}`
      );
      return await response.json();
    } catch (error) {
      return rejectWithValue("error");
    }
  }
);

const initialState: IEventState = {
  events: [],
  isLoading: false,
  error: null,
};

const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchEvents.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchEvents.fulfilled, (state, action) => {
      state.isLoading = false;
      state.events = action.payload;
    });
    builder.addCase(fetchEvents.rejected, (state, action) => {
      if (action.payload) {
        state.isLoading = false;
        state.error = action.payload;
      }
    });
  },
});

export default eventsSlice.reducer;
// export const { setEvents } = eventsSlice.actions;
