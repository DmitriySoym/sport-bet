import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AllEvents } from "types";
import { ErrorMessage } from "./styles";

interface IEventState {
  event: AllEvents;
  isLoading: boolean;
  error: null | string;
}

export const fetchDitailEvent = createAsyncThunk<
  AllEvents,
  { id: string; endPoint: string },
  { rejectValue: string }
>("event/fetchDitailEvent", async (params, { rejectWithValue }) => {
  const response = await fetch(
    `https://64058b8beed195a99f856ad5.mockapi.io/sport-bet/${params.endPoint}/${params.id}`
  );
  if (!response.ok) {
    return rejectWithValue("Server error");
  }

  return await response.json();
});

const initialState: IEventState = {
  event: {} as AllEvents,
  isLoading: false,
  error: null,
};

const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchDitailEvent.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchDitailEvent.fulfilled, (state, action) => {
      state.isLoading = false;
      state.event = action.payload;
    });
    builder.addCase(fetchDitailEvent.rejected, (state, action) => {
      if (action.payload) {
        state.isLoading = false;
        state.error = action.payload;
      }
    });
  },
});

export default eventSlice.reducer;
