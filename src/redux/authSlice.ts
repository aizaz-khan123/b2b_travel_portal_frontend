import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  userDetail: null,
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loggedIn: (state, action) => {
      state.isLoggedIn = true;
      state.userDetail = action.payload.userDetail.user;
      state.token = action.payload.userDetail.token;
    },
    userLogout: (state) => {
      state.isLoggedIn = false;
      state.userDetail = null;
      state.token = null;
    },
  },
});

export const { loggedIn, userLogout } = authSlice.actions;
export default authSlice.reducer;