import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AllEvents } from "types";

interface IEventState {
  events: AllEvents[];
  isLoading: boolean;
  error: null | string;
}
export const fetchEvents = createAsyncThunk<
  AllEvents[],
  string,
  { rejectValue: string }
>(
  "events/fetchEvents",

  async (endPoint, { rejectWithValue }) => {
    const response = await fetch(
      `https://64058b8beed195a99f856ad5.mockapi.io/sport-bet/${endPoint}`
    );
    if (!response.ok) {
      return rejectWithValue("Server error");
    }

    return await response.json();
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
    builder.addCase(fetchEvents.pending, (state) => {
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
