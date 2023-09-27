import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../util/axios";

const initialState = {
  services: [],
  isLoading: false,
  error: null,
};

export const getServices = createAsyncThunk(
  "services/getServices",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("/service");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const createServices = createAsyncThunk(
  "services/createServices",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post("/service", data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateServices = createAsyncThunk(
  "services/updateServices",
  async ({data, id}, { rejectWithValue }) => {
    try {
      const response = await axios.put(`/service/${id}`, data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteServices = createAsyncThunk(
  "services/deleteServices",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`/service/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const uploadMedia = createAsyncThunk(
  "services/uploadMedia",
  async ({data, id}, { rejectWithValue }) => {
    try {
      const response = await axios.post(`/service/media/${id}`, data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const servicesSliceReducer = createSlice({
  name: "services",
  initialState,
  reducers: {
    setServices: (state, action) => {
      state.services = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getServices.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getServices.fulfilled, (state, action) => {
        state.isLoading = false;
        state.services = action.payload;
        state.error = null;
      })
      .addCase(getServices.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
    builder
      .addCase(createServices.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      }
      )
      .addCase(createServices.fulfilled, (state, action) => {
        state.isLoading = false;
        state.services.push(action.payload);
        state.error = null;
      }
      )
      .addCase(createServices.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }
      );
    builder
      .addCase(updateServices.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      }
      )
      .addCase(updateServices.fulfilled, (state, action) => {
        state.isLoading = false;
        state.services = state.services.map((service) => {
          if (service._id === action.payload._id) {
            return action.payload;
          }
          return service;
        });
        state.error = null;
      }
      )
      .addCase(updateServices.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }
      );
    builder
      .addCase(deleteServices.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      }
      )
      .addCase(deleteServices.fulfilled, (state, action) => {
        state.isLoading = false;
        state.services = state.services.filter(
          (service) => service._id !== action.payload._id
        );
        state.error = null;
      }
      )
      .addCase(deleteServices.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }
      );
    builder
      .addCase(uploadMedia.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      }
      )
      .addCase(uploadMedia.fulfilled, (state, action) => {
        state.isLoading = false;
        state.services = state.services.map((service) => {
          if (service._id === action.payload._id) {
            return action.payload;
          }
          return service;
        });
        state.error = null;
      }
      )
      .addCase(uploadMedia.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }
      );
  },
});

export const { setServices } = servicesSliceReducer.actions;

export default servicesSliceReducer;
