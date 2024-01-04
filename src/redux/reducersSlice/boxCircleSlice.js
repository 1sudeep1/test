import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  backgroundColor: 'red',
  height:50,
  width:50,
  borderRadius:0
};

export const boxCircleSlice = createSlice({
  name: 'boxCircle',
  initialState,
  reducers:{
        changeShape:(state, actions)=>{
          (state.borderRadius==0)? (state.borderRadius=50, state.height=state.width) : (state.borderRadius=0, state.height=initialState.height)
        },
        changeWidth:(state, actions)=>{
          // state.width=state.width+50
          (actions.payload==='inc')?((state.borderRadius==50)? (state.width=state.width+50, state.height=state.width) :state.width=state.width+50
          ):((state.width>50)? ((state.borderRadius==50)? (state.width=state.width-50, state.height=state.width) :state.width=state.width-50):null
          )
        },

        changeColor:(state, actions)=>{
          state.backgroundColor=actions.payload==''? state.backgroundColor: actions.payload
        },
        reset:(state, actions)=>{
          return (initialState)
        },
  }


});
export const {changeShape, changeWidth, changeColor, reset} = boxCircleSlice.actions;

export default boxCircleSlice.reducer;