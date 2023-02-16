import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  number: 0,
};

export const __addNumber = createAsyncThunk(
  "counter/__addNumber",
  (args, thunkAPI) => {
    setTimeout(() => {
      thunkAPI.dispatch(addNumber(args));
    }, 3000);
  }
);

export const userSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addNumber: (state, action) => {
      state.number = state.number + action.payload;
    },

    minusNumber: (state, action) => {
      state.number = state.number - action.payload;
    },
  },
  extraReducers: {
    // [__addNumber.fulfilled]: (state, action) => {
    //   console.log(action);
    //   state.number = state.number + +action.payload;
    // },
  },
});

// Action creators are generated for each case reducer function
export const { addNumber, minusNumber } = userSlice.actions;
export default userSlice.reducer;
