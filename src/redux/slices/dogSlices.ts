import { createSlice } from "@reduxjs/toolkit";
import { Breed } from "../../interfaceDataDog/interface";
import { fetchDog } from "../../service/dogService";

interface UserState {
  Dog: Breed[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: UserState = {
  Dog: [],
  status: "idle",
  error: null,
};

const dogSlice = createSlice({
  name: "dog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDog.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchDog.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.Dog = action.payload;
      })
      .addCase(fetchDog.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Something went wrong";
      });
  },
});

export default dogSlice.reducer;
