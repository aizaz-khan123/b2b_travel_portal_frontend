import { API_END_POINTS } from './ApiEndPoints';
import { emptySplitApi } from './emptySplitApi';
import { IBankAccount, IBankAccountsResponse } from "@/types/settings/bank_accounts"
export const api = emptySplitApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => ({
        url: API_END_POINTS.login,
        method: 'POST',
        body,
      }),
    }),
    logout: builder.mutation({
      query: (body) => ({
        url: API_END_POINTS.logout,
        method: 'POST',
      }),
    }),
    getBankAccounts: builder.query<any, { pageUrl?: string; searchText?: string }>({
      query: ({pageUrl,searchText}) => ({
        url:pageUrl||API_END_POINTS.getBankAccounts,
        method: "GET",
        params: {
          q: searchText,
        }
      }),
      providesTags: ["BankAccounts"],
      transformResponse: (response: any) => response.data,
    }),
    createBankAccount: builder.mutation({
      query: (body) => ({
        url: API_END_POINTS.createBankAccount,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['BankAccounts'],
    }),
    showBankAccount: builder.query<any, string>({
      query: (uuid) => ({
        url: `${API_END_POINTS.showBankAccount}/${uuid}`,
        method: 'GET',
      }),
      transformResponse: (response: any) => response.data,
    }),
    updateBankAccount: builder.mutation({
      query: ({bankAccountId, updated_data}) => ({
        url: `${API_END_POINTS.updateBankAccount}/${bankAccountId}`,
        method: "POST",
        body: updated_data,
      }),
      invalidatesTags: ['BankAccounts'],
    }),
    deleteBankAccount: builder.mutation({
      query: (id) => ({
        url: `${API_END_POINTS.deleteBankAccount}/${id}`,
        method: "GET",
      }),
      invalidatesTags: ['BankAccounts'],
    }),
    getAirlines: builder.query<any, { pageUrl?: string; searchText?: string }>({
      query: ({pageUrl,searchText}) => ({
        url:pageUrl||API_END_POINTS.getAirlines,
        method: "GET",
        params: {
          q: searchText,
        }
      }),
      providesTags: ["Airlines"],
      transformResponse: (response: any) => response.data,
    }),
    createAirline: builder.mutation({
      query: (body) => ({
        url: API_END_POINTS.createAirline,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Airlines'],
    }),
    showAirline: builder.query<any, string>({
      query: (uuid) => ({
        url: `${API_END_POINTS.showAirline}/${uuid}`,
        method: 'GET',
      }),
      transformResponse: (response: any) => response.data,
    }),
    updateAirline: builder.mutation({
      query: ({airlineId, updated_data}) => ({
        url: `${API_END_POINTS.updateAirline}/${airlineId}`,
        method: "POST",
        body: updated_data,
      }),
      invalidatesTags: ['Airlines'],
    }),
    deleteAirline: builder.mutation({
      query: (id) => ({
        url: `${API_END_POINTS.deleteAirline}/${id}`,
        method: "GET",
      }),
      invalidatesTags: ['Airlines'],
    }),
    getCountryList: builder.query<any, void>({
      query: () => ({
        url:API_END_POINTS.getCountryDropDown,
        method: "GET",
      }),
      transformResponse: (response: any) => response.data,
    }),
  }),
  overrideExisting: false,
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useGetBankAccountsQuery,
  useShowBankAccountQuery,
  useGetCountryListQuery,
  useCreateBankAccountMutation,
  useDeleteBankAccountMutation,
  useUpdateBankAccountMutation,
  useGetAirlinesQuery,
  useShowAirlineQuery,
  useCreateAirlineMutation,
  useDeleteAirlineMutation,
  useUpdateAirlineMutation,
} = api;