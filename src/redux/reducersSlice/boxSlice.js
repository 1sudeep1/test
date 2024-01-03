import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  backgroundColor: 'green',
  padding:'10px',
  height:'200px',
  width:100,
};

export const boxSlice = createSlice({
  name: 'box',
  initialState,
  reducers:{
    increaseWidth:(state, actions)=>{
       state.width=state.width + 50
    },
    decreaseWidth:(state, actions)=>{
       state.width=state.width-50
    },
  }


});
export const {increaseWidth, decreaseWidth} = boxSlice.actions;

export default boxSlice.reducer;