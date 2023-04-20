import { createSlice } from '@reduxjs/toolkit';
import { Conversation } from '../_interface/interface';

const initState = {
  conversationData: <Conversation[]>[],
}

export const conversationSlice = createSlice({
  name: 'book',
  initialState: initState,
  reducers: {
    updateConversation: (state, action) => { 
      // console.log(action.payload)
      const data:Conversation = action.payload;
      state.conversationData.push(data);
    },
  }
})

export const { updateConversation } = conversationSlice.actions;

export default conversationSlice.reducer;