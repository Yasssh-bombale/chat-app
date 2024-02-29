import { configureStore } from "@reduxjs/toolkit";
import conversationReducer from "../slices/conversation.slice";
const store = configureStore({
  reducer: conversationReducer,
});

export default store;
