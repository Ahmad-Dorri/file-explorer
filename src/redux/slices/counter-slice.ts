import { createSlice } from '@reduxjs/toolkit';

interface CounterType {
  count: number;
}

interface CounterAction {
  payload: number;
}

const initialState: CounterType = {
  count: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, action: CounterAction) => {
      state.count = state.count + action.payload;
    },
    decrement: (state, action: CounterAction) => {
      state.count = state.count - action.payload;
    },
  },
});
export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
