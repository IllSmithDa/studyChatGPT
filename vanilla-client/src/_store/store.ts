import { configureStore } from '@reduxjs/toolkit';
import conversationReducer from '../_reducers/conversationSlice';
export const store = configureStore({
  reducer: {
    conversation: conversationReducer,
  }
})