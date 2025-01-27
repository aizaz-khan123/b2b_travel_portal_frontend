import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";
import type { RootState } from "@/redux/store";

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

export const emptySplitApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    prepareHeaders: async (headers, { getState }) => {
      const state = getState() as RootState;

      const csrfToken = Cookies.get("XSRF-TOKEN");
      if (!csrfToken) {
        await fetchCsrfToken();
      }
      const csrf = Cookies.get("XSRF-TOKEN");
      if (csrf) {
        headers.set("X-XSRF-TOKEN", csrf);
      }

      const token = state?.persistedReducer?.authSlice?.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      headers.set("Accept", "application/json");
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  endpoints: () => ({}),
  tagTypes: [],
});
