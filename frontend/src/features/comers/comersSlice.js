import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  comers: [],
  isError: false,
  isSucces: false,
  isLoading: false,
  message: '',
};

//Create new comer

export const createComer = createAsyncThunk(
  'comers/create',
  async (comerData, thunkAPI) => {
    try {
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

export const comersSlice = createSlice({
  name: 'comer',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
});

export const { reset } = comersSlice.actions;
export default comersSlice.reducer;
