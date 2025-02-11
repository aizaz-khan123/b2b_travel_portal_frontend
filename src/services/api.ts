import { API_END_POINTS } from './ApiEndPoints';
import { emptySplitApi } from './emptySplitApi';

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
      query: ({ pageUrl, searchText }) => ({
        url: pageUrl || API_END_POINTS.getBankAccounts,
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
      query: ({ bankAccountId, updated_data }) => ({
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
      query: ({ pageUrl, searchText }) => ({
        url: pageUrl || API_END_POINTS.getAirlines,
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
      query: ({ airlineId, updated_data }) => ({
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
        url: API_END_POINTS.getCountryDropDown,
        method: "GET",
      }),
      transformResponse: (response: any) => response.data,
    }),
    getSupplierList: builder.query<any, void>({
      query: () => ({
        url: API_END_POINTS.supplierDropDownList,
        method: "GET",
      }),
      transformResponse: (response: any) => response.data,
    }),
    getAirports: builder.query<any, { pageUrl?: string; searchText?: string }>({
      query: ({ pageUrl, searchText }) => ({
        url: pageUrl || API_END_POINTS.getAirports,
        method: "GET",
        params: {
          q: searchText,
        }
      }),
      providesTags: ["Airports"],
      transformResponse: (response: any) => response.data,
    }),
    createAirport: builder.mutation({
      query: (body) => ({
        url: API_END_POINTS.createAirport,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Airports'],
    }),
    showAirport: builder.query<any, string>({
      query: (uuid) => ({
        url: `${API_END_POINTS.showAirport}/${uuid}`,
        method: 'GET',
      }),
      transformResponse: (response: any) => response.data,
    }),
    updateAirport: builder.mutation({
      query: ({ airportId, updated_data }) => ({
        url: `${API_END_POINTS.updateAirport}/${airportId}`,
        method: "POST",
        body: updated_data,
      }),
      invalidatesTags: ['Airports'],
    }),
    deleteAirport: builder.mutation({
      query: (id) => ({
        url: `${API_END_POINTS.deleteAirport}/${id}`,
        method: "GET",
      }),
      invalidatesTags: ['Airports'],
    }),
    getCountries: builder.query<any, { pageUrl?: string; searchText?: string }>({
      query: ({ pageUrl, searchText }) => ({
        url: pageUrl || API_END_POINTS.getCountries,
        method: "GET",
        params: {
          q: searchText,
        }
      }),
      providesTags: ["Countries"],
      transformResponse: (response: any) => response.data,
    }),
    createCountry: builder.mutation({
      query: (body) => ({
        url: API_END_POINTS.createCountry,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Countries'],
    }),
    showCountry: builder.query<any, string>({
      query: (uuid) => ({
        url: `${API_END_POINTS.showCountry}/${uuid}`,
        method: 'GET',
      }),
      transformResponse: (response: any) => response.data,
    }),
    updateCountry: builder.mutation({
      query: ({ countryId, updated_data }) => ({
        url: `${API_END_POINTS.updateCountry}/${countryId}`,
        method: "POST",
        body: updated_data,
      }),
      invalidatesTags: ['Countries'],
    }),
    deleteCountry: builder.mutation({
      query: (id) => ({
        url: `${API_END_POINTS.deleteCountry}/${id}`,
        method: "GET",
      }),
      invalidatesTags: ['Countries'],
    }),
    getNews: builder.query<any, { pageUrl?: string; searchText?: string }>({
      query: ({ pageUrl, searchText }) => ({
        url: pageUrl || API_END_POINTS.getNews,
        method: "GET",
        params: {
          q: searchText,
        }
      }),
      providesTags: ["News"],
      transformResponse: (response: any) => response.data,
    }),
    createNews: builder.mutation({
      query: (body) => ({
        url: API_END_POINTS.createNews,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['News'],
    }),
    showNews: builder.query<any, string>({
      query: (uuid) => ({
        url: `${API_END_POINTS.showNews}/${uuid}`,
        method: 'GET',
      }),
      transformResponse: (response: any) => response.data,
    }),
    updateNews: builder.mutation({
      query: ({ newsId, updated_data }) => ({
        url: `${API_END_POINTS.updateNews}/${newsId}`,
        method: "POST",
        body: updated_data,
      }),
      invalidatesTags: ['News'],
    }),
    deleteNews: builder.mutation({
      query: (id) => ({
        url: `${API_END_POINTS.deleteNews}/${id}`,
        method: "GET",
      }),
      invalidatesTags: ['News'],
    }),
    getSuppliers: builder.query<any, { pageUrl?: string; searchText?: string }>({
      query: ({ pageUrl, searchText }) => ({
        url: pageUrl || API_END_POINTS.getSuppliers,
        method: "GET",
        params: {
          q: searchText,
        }
      }),
      providesTags: ["Suppliers"],
      transformResponse: (response: any) => response.data,
    }),
    createSupplier: builder.mutation({
      query: (body) => ({
        url: API_END_POINTS.createSupplier,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Suppliers'],
    }),
    showSupplier: builder.query<any, string>({
      query: (uuid) => ({
        url: `${API_END_POINTS.showSupplier}/${uuid}`,
        method: 'GET',
      }),
      transformResponse: (response: any) => response.data,
    }),
    updateSupplier: builder.mutation({
      query: ({ supplierId, updated_data }) => ({
        url: `${API_END_POINTS.updateSupplier}/${supplierId}`,
        method: "POST",
        body: updated_data,
      }),
      invalidatesTags: ['Suppliers'],
    }),
    deleteSupplier: builder.mutation({
      query: (id) => ({
        url: `${API_END_POINTS.deleteSupplier}/${id}`,
        method: "GET",
      }),
      invalidatesTags: ['Suppliers'],
    }),
    showConnector: builder.query<any, string>({
      query: (type) => ({
        url: `${API_END_POINTS.showConnector}/${type}`,
        method: 'GET',
      }),
      transformResponse: (response: any) => response.data,
    }),
    updateConnector: builder.mutation({
      query: (updated_data) => ({
        url: `${API_END_POINTS.updateConnector}`,
        method: "POST",
        body: updated_data,
      }),
      invalidatesTags: ['Suppliers'],
    }),
    airlineDropDown: builder.query<any, void>({
      query: () => ({
        url: API_END_POINTS.airlineDropDown,
        method: "GET",
      }),
      transformResponse: (response: any) => response.data,
    }),
    connectorDropDown: builder.query<any, void>({
      query: () => ({
        url: API_END_POINTS.connectorDropDown,
        method: "GET",
      }),
      transformResponse: (response: any) => response.data,
    }),
    getAirlineMargins: builder.query<any, { pageUrl?: string; searchText?: string }>({
      query: ({ pageUrl, searchText }) => ({
        url: pageUrl || API_END_POINTS.getAirlineMargins,
        method: "GET",
        params: {
          q: searchText,
        }
      }),
      providesTags: ["AirlineMargins"],
      transformResponse: (response: any) => response.data,
    }),
    createAirlineMargin: builder.mutation({
      query: (body) => ({
        url: API_END_POINTS.createAirlinMargin,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['AirlineMargins'],
    }),
    showAirlineMargin: builder.query<any, string>({
      query: (uuid) => ({
        url: `${API_END_POINTS.showAirlinMargin}/${uuid}`,
        method: 'GET',
      }),
      transformResponse: (response: any) => response.data,
    }),
    updateAirlineMargin: builder.mutation({
      query: ({ airlineMarginId, updated_data }) => ({
        url: `${API_END_POINTS.updateAirlinMargin}/${airlineMarginId}`,
        method: "POST",
        body: updated_data,
      }),
      invalidatesTags: ['AirlineMargins'],
    }),
    deleteAirlineMargin: builder.mutation({
      query: (id) => ({
        url: `${API_END_POINTS.deleteAirlinMargin}/${id}`,
        method: "GET",
      }),
      invalidatesTags: ['AirlineMargins'],
    }),
    verifySetPasswordLink: builder.mutation({
      query: (body) => ({
        url: API_END_POINTS.verifySetPasswordLink,
        method: 'POST',
        body,
      }),
    }),
    getBranches: builder.query<any, { pageUrl?: string; searchText?: string }>({
      query: ({ pageUrl, searchText }) => ({
        url: pageUrl || API_END_POINTS.getBranches,
        method: "GET",
        params: {
          q: searchText,
        }
      }),
      providesTags: ["Branches"],
      transformResponse: (response: any) => response.data,
    }),
    createBranch: builder.mutation({
      query: (body) => ({
        url: API_END_POINTS.createBranch,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Branches'],
    }),
    deleteBranch: builder.mutation({
      query: (id) => ({
        url: `${API_END_POINTS.deleteBranch}/${id}`,
        method: "GET",
      }),
      invalidatesTags: ['Branches'],
    }),
    updateBranch:builder.mutation({
      query: ({ branchId, updated_data }) => ({
        url: `${API_END_POINTS.updateBranch}/${branchId}`,
        method: "POST",
        body: updated_data,
      }),
      invalidatesTags: ['Branches'],
    }),
    branchDropDown: builder.query<any, void>({
      query: () => ({
        url: API_END_POINTS.branchDropDown,
        method: "GET",
      }),
      transformResponse: (response: any) => response.data,
    }),
    statusUpdate: builder.mutation({
      query: ({uuid, body}) => ({
        url: API_END_POINTS.statusUpdate + `/${uuid}`,
        method: 'POST',
        body,
      }),
    }),
    getAgencies: builder.query<any, { pageUrl?: string; searchText?: string }>({
      query: ({ pageUrl, searchText }) => ({
        url: pageUrl || API_END_POINTS.getAgencies,
        method: "GET",
        params: {
          q: searchText,
        }
      }),
      providesTags: ["Agencies"],
      transformResponse: (response: any) => response.data,
    }),
    createAgency: builder.mutation({
      query: (body) => ({
        url: API_END_POINTS.createAgency,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Agencies'],
    }),
    deleteAgency: builder.mutation({
      query: (id) => ({
        url: `${API_END_POINTS.deleteAgency}/${id}`,
        method: "GET",
      }),
      invalidatesTags: ['Agencies'],
    }),
    updateAgency:builder.mutation({
      query: ({ agencyId, updated_data }) => ({
        url: `${API_END_POINTS.updateAgency}/${agencyId}`,
        method: "POST",
        body: updated_data,
      }),
      invalidatesTags: ['Agencies'],
    }),
    agencystatusUpdate: builder.mutation({
      query: ({uuid, body}) => ({
        url: API_END_POINTS.agencystatusUpdate + `/${uuid}`,
        method: 'POST',
        body,
      }),
    }),

    getEmployees: builder.query<any, { pageUrl?: string; searchText?: string }>({
      query: ({ pageUrl, searchText }) => ({
        url: pageUrl || API_END_POINTS.getEmployees,
        method: "GET",
        params: {
          q: searchText,
        }
      }),
      providesTags: ["Agencies"],
      transformResponse: (response: any) => response.data,
    }),
    createEmployee: builder.mutation({
      query: (body) => ({
        url: API_END_POINTS.createEmployee,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Agencies'],
    }),
    deleteEmployee: builder.mutation({
      query: (id) => ({
        url: `${API_END_POINTS.deleteEmployee}/${id}`,
        method: "GET",
      }),
      invalidatesTags: ['Agencies'],
    }),
    updateEmployee:builder.mutation({
      query: ({ employeeId, updated_data }) => ({
        url: `${API_END_POINTS.updateEmployee}/${employeeId}`,
        method: "POST",
        body: updated_data,
      }),
      invalidatesTags: ['Agencies'],
    }),
    employeeStatusUpdate: builder.mutation({
      query: ({uuid, body}) => ({
        url: API_END_POINTS.employeeStatusUpdate + `/${uuid}`,
        method: 'POST',
        body,
      }),
    }),
    locationsLookup: builder.query({
      query: (params) => ({
        url: API_END_POINTS.locations,
        method: 'GET',
        params,
      }),
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
  useGetSupplierListQuery,
  useCreateBankAccountMutation,
  useDeleteBankAccountMutation,
  useUpdateBankAccountMutation,
  useGetAirlinesQuery,
  useShowAirlineQuery,
  useCreateAirlineMutation,
  useDeleteAirlineMutation,
  useUpdateAirlineMutation,
  useGetAirportsQuery,
  useShowAirportQuery,
  useCreateAirportMutation,
  useDeleteAirportMutation,
  useUpdateAirportMutation,
  useGetCountriesQuery,
  useShowCountryQuery,
  useCreateCountryMutation,
  useDeleteCountryMutation,
  useUpdateCountryMutation,
  useGetNewsQuery,
  useShowNewsQuery,
  useCreateNewsMutation,
  useDeleteNewsMutation,
  useUpdateNewsMutation,
  useGetSuppliersQuery,
  useShowSupplierQuery,
  useCreateSupplierMutation,
  useDeleteSupplierMutation,
  useUpdateSupplierMutation,
  useShowConnectorQuery,
  useUpdateConnectorMutation,
  useAirlineDropDownQuery,
  useConnectorDropDownQuery,
  /////////////////////////
  useGetAirlineMarginsQuery,
  useShowAirlineMarginQuery,
  useCreateAirlineMarginMutation,
  useDeleteAirlineMarginMutation,
  useUpdateAirlineMarginMutation,

  useGetBranchesQuery,
  useCreateBranchMutation,
  useDeleteBranchMutation,
  useUpdateBranchMutation,
  useVerifySetPasswordLinkMutation,
  useStatusUpdateMutation,
  useBranchDropDownQuery,
  //////////////////////
  useGetAgenciesQuery,
  useCreateAgencyMutation,
  useDeleteAgencyMutation,
  useUpdateAgencyMutation,
  useAgencystatusUpdateMutation,
  // ///////////////////////
  useCreateEmployeeMutation,
  useDeleteEmployeeMutation,
  useEmployeeStatusUpdateMutation,
  useGetEmployeesQuery,
  useUpdateEmployeeMutation,
  useLocationsLookupQuery,
  useLazyLocationsLookupQuery
} = api;