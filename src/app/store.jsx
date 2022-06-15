import { configureStore } from "@reduxjs/toolkit";
import { useReducer } from "react";
import userSlice from "../features/userSlice";

export default configureStore({
  reducer: {
    user: userSlice,
  },
});
