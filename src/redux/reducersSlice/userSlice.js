import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  userName: 'Sudeep Tharu',
  token:'43503495',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers:{
    setUserName:(state, actions)=>{
        state.userName=actions.payload
    },
  }


});
export const {setUserName} = userSlice.actions;

export default userSlice.reducer;