import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

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
      Cookies.set("userDetail", JSON.stringify(action.payload.userDetail), {
        expires: 7,
        secure: true,
      });
    },
    userLogout: (state) => {
      state.isLoggedIn = false;
      state.userDetail = null;
      state.token = null;
      Cookies.remove("userDetail");
    },
  },
});

export const { loggedIn, userLogout } = authSlice.actions;
export default authSlice.reducer;