import { userLogout } from "@/redux/authSlice";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

// Define the structure of the authSlice state
interface AuthState {
  isLoggedIn: boolean;
  userDetail: any; // Adjust this type according to your user detail structure
  token: string | null;
}

// Define the RootState interface to represent the entire Redux state
interface RootState {
  auth: AuthState; // Assuming your authSlice is under the 'auth' key
}

const fetchCsrfToken = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/sanctum/csrf-cookie`, {
    method: "GET",
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch CSRF token");
  }
  return response;
};

// Custom base query to handle errors
const customBaseQuery = async (args: any, api: any, extraOptions: any) => {
  const result = await fetchBaseQuery({
    prepareHeaders: async (headers, { getState }) => {
      const csrfToken = Cookies.get("XSRF-TOKEN");
      if (!csrfToken) {
        await fetchCsrfToken();
      }
      const csrf = Cookies.get("XSRF-TOKEN");
      if (csrf) {
        headers.set("X-XSRF-TOKEN", csrf);
      }

      const state = getState() as RootState; 
      const token = state.auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      headers.set("Accept", "application/json");
      headers.set("Content-Type", "application/json");
      return headers;
    },
  })(args, api, extraOptions);

  // Handle errors
  if (result.error && result.error.status === 401) {
    api.dispatch(userLogout());
    window.location.href = "/login";
  }

  return result;
};

export const emptySplitApi = createApi({
  baseQuery: customBaseQuery,
  endpoints: () => ({}),
  tagTypes: [],
});
