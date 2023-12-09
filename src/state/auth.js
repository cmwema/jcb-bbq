import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  tokens: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn(state, action) {
      state.tokens = action.payload;
      state.isAuthenticated = true;
    },
    logOut(state) {
      state.tokens = {};
      state.isAuthenticated = false;
    },
  },
});

export const { logIn, logOut } = authSlice.actions;
export const getAuth = (state) => {
  return state.auth.isAuthenticated;
};

export default authSlice.reducer;
