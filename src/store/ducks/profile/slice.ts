import { createSlice } from "@reduxjs/toolkit";
import { initialProfile } from "./state";

export const useReducer = createSlice({
  name: "userProfile",
  initialState: initialProfile,
  reducers: {
    setLoginSuccess(state, action) {
      state = { ...state, auth: true, user: action.payload };
    },
    setLoginError(state, action) {
      state.error = action.payload;
    },
  },
});
