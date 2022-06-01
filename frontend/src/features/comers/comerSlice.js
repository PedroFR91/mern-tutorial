import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import comerService from './comerService';
const initialState = {
  comers: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

//Create new comer

export const createComer = createAsyncThunk(
  'comers/create',
  async (comerData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await comerService.createComer(comerData, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
//Delete comer

export const deleteComer = createAsyncThunk(
  'comers/delete',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await comerService.deleteComer(id, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
//Get user comers
export const getComers = createAsyncThunk(
  'comers/getAll',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await comerService.getComers(token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const comerSlice = createSlice({
  name: 'comer',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createComer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createComer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.comers.push(action.payload);
      })
      .addCase(createComer.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getComers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getComers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.comers = action.payload;
      })
      .addCase(getComers.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteComer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteComer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.goals = state.comers.filter(
          (comer) => comer._id !== action.payload.id
        );
      })
      .addCase(deleteComer.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = comerSlice.actions;
export default comerSlice.reducer;
