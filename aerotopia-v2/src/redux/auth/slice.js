import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../util/axios";

const initialAuthState = {
  user: null,
  isLoading: false,
  error: null,
  isLogged: false,
};

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post("/user/login", { email, password });
      console.log(response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const authSliceReducer = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    logoutUser: (state) => {
      state.user = null;
      state.isLoading = false;
      state.error = null;
      state.isLogged = false;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isLogged = true;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { logoutUser, setError } = authSliceReducer.actions;
export default authSliceReducer;
