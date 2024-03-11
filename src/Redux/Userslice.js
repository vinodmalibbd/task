// counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user:null
  },
  reducers: {
    setuser:(state,action)=>{
    state.user=action.payload;

    },
    removeuser:(state)=>{
        state.user=null
    }
  },
});

export const { setuser,removeuser} = userSlice.actions;
export default userSlice.reducer;