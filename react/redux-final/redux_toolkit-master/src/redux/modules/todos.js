import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  todos: [],
  // 서버에서 todos 가져오는 상태를 나타냄
  // 서버랑 연결하면 true, 끊어지면 false
  isLoading: false,
  error: null,
};

export const __getTodos = createAsyncThunk(
  "todos/getTodos",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get("http://localhost:3001/todos");
      // fulfillWithValue : 서버에서 데이터 가져오는게 성공한 경우 dispatch해주는 것
      // 인자로는 payload를 넣어줄 수 있다.
      // 어디로 얘네가 dispatch해준다는 걸까?
      //  --> dispatch란 ? 리듀서에 action과 payload를 전달해주는 과정임
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      // rejectWithValue : 서버에서 데이터 가져오는게 실패한 경우 dispatch해주는 것
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: {
    [__getTodos.pending]: (state) => {
      state.isLoading = true;
    },
    [__getTodos.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.todos = action.payload;
    },
    [__getTodos.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {} = todosSlice.actions;
export default todosSlice.reducer;
