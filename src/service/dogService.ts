import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Breed } from "../interfaceDataDog/interface";

export const fetchDog = createAsyncThunk<Breed[]>("getAllDog", async () => {
  try {
    const response = await axios.get<Breed[]>(
      "https://dogapi.dog/api/v2/breeds"
    );
    return response.data;
  } catch (error) {
    throw error;
  }
});
