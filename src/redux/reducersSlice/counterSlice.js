import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  counter:0
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers:{

    setIncrement:(state, actions)=>{
        state.counter++;
    },

    setDecrement:(state, actions)=>{
        state.counter--
    }
  }


});
export const {setIncrement, setDecrement} = counterSlice.actions;

export default counterSlice.reducer;