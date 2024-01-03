import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  backgroundColor: 'red',
  height:'200px',
  width:'200px',
  borderRadius:0
};

export const boxCircleSlice = createSlice({
  name: 'boxCircle',
  initialState,
  reducers:{
        changeCircle:(state, actions)=>{
            state.borderRadius=50;
            state.backgroundColor='green'
        },
        changeSquare:(state, actions)=>{
            state.borderRadius=0;
            state.backgroundColor='red'
        }
  }


});
export const {changeCircle, changeSquare} = boxCircleSlice.actions;

export default boxCircleSlice.reducer;