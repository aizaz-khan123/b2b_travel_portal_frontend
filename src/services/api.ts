import { API_END_POINTS } from "./ApiEndPoints";
import { emptySplitApi } from "./emptySplitApi";

export const api = emptySplitApi.injectEndpoints({
  overrideExisting: true, // Correct placement of overrideExisting
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => ({
        url: API_END_POINTS.getUser,
        method: "GET",
      }),
    }),
    login: builder.mutation({
      query: (body) => ({
        url: API_END_POINTS.login,
        method: "POST",
        body,
      }),
    }),
    logout: builder.mutation({
      query: (body) => ({
        url: API_END_POINTS.logout,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useGetUserQuery,
  useLoginMutation,
  useLogoutMutation,
} = api;
