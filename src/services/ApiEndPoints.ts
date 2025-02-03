export const BASE_URL_V1 = process.env.NEXT_PUBLIC_API_BASE_URL;
export const NEXT_PUBLIC_BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL

export const API_END_POINTS = {
  getUser: NEXT_PUBLIC_BACKEND_URL + '/api/user',
  login: BASE_URL_V1 + '/auth/login',
  logout: BASE_URL_V1 + '/auth/logout',
  sendResetRequest: BASE_URL_V1 + '/auth/forgot-password',
  register: BASE_URL_V1 + '/auth/register',
  getProfile: BASE_URL_V1 + '/profile',
  getBankAccounts: BASE_URL_V1 + '/settings/bank-account/index',
  createBankAccount: BASE_URL_V1 + '/settings/bank-account/store',
  showBankAccount: BASE_URL_V1 + '/settings/bank-account/show',
  deleteBankAccount: BASE_URL_V1 + '/settings/bank-account/delete',
  updateBankAccount: BASE_URL_V1 + '/settings/bank-account/update',
  getAirlines: BASE_URL_V1 + '/settings/airline/index',
  createAirline: BASE_URL_V1 + '/settings/airline/store',
  showAirline: BASE_URL_V1 + '/settings/airline/show',
  deleteAirline: BASE_URL_V1 + '/settings/airline/delete',
  updateAirline: BASE_URL_V1 + '/settings/airline/update',
  getCountryDropDown: BASE_URL_V1 + '/settings/country/drop-down',
};
