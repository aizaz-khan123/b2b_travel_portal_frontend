export const BASE_URL_V1 = process.env.NEXT_PUBLIC_API_BASE_URL;
// export const BASE_URL_V1 = "https://73b4-2400-adc5-482-c800-b40f-b5dd-83be-9956.ngrok-free.app/api/v1";
// export const NEXT_PUBLIC_BACKEND_URL = "https://73b4-2400-adc5-482-c800-b40f-b5dd-83be-9956.ngrok-free.app";
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
  getAirports: BASE_URL_V1 + '/settings/airport/index',
  createAirport: BASE_URL_V1 + '/settings/airport/store',
  showAirport: BASE_URL_V1 + '/settings/airport/show',
  deleteAirport: BASE_URL_V1 + '/settings/airport/delete',
  updateAirport: BASE_URL_V1 + '/settings/airport/update',

  getCountries: BASE_URL_V1 + '/settings/country/index',
  createCountry: BASE_URL_V1 + '/settings/country/store',
  showCountry: BASE_URL_V1 + '/settings/country/show',
  deleteCountry: BASE_URL_V1 + '/settings/country/delete',
  updateCountry: BASE_URL_V1 + '/settings/country/update',

  getNews: BASE_URL_V1 + '/settings/news/index',
  createNews: BASE_URL_V1 + '/settings/news/store',
  showNews: BASE_URL_V1 + '/settings/news/show',
  deleteNews: BASE_URL_V1 + '/settings/news/delete',
  updateNews: BASE_URL_V1 + '/settings/news/update',


  getSuppliers: BASE_URL_V1 + '/settings/supplier/index',
  createSupplier: BASE_URL_V1 + '/settings/supplier/store',
  showSupplier: BASE_URL_V1 + '/settings/supplier/show',
  updateSupplier: BASE_URL_V1 + '/settings/supplier/update',
  deleteSupplier: BASE_URL_V1 + '/settings/supplier/delete',
  supplierDropDownList: BASE_URL_V1 + '/settings/supplier/drop-down',
  showConnector: BASE_URL_V1 + '/settings/connector/show',
  updateConnector: BASE_URL_V1 + '/settings/connector/update',
  airlineDropDown: BASE_URL_V1 + '/settings/airline/drop-down',
  connectorDropDown: BASE_URL_V1 + '/settings/connector/drop-down',
  getAirlineMargins: BASE_URL_V1 + '/settings/airline-margin/index',
  createAirlinMargin: BASE_URL_V1 + '/settings/airline-margin/store',
  showAirlinMargin: BASE_URL_V1 + '/settings/airline-margin/show',
  updateAirlinMargin: BASE_URL_V1 + '/settings/airline-margin/update',
  deleteAirlinMargin: BASE_URL_V1 + '/settings/airline-margin/delete',

  createBranch: BASE_URL_V1 + '/organization/branch/store',
  getBranches: BASE_URL_V1 + '/organization/branch/index',
  deleteBranch: BASE_URL_V1 + '/organization/branch/delete',
  updateBranch: BASE_URL_V1 + '/organization/branch/update',
  statusUpdate: BASE_URL_V1 + '/organization/branch/status-change',
  branchDropDown: BASE_URL_V1 + '/organization/branch/drop-down',
  verifySetPasswordLink: BASE_URL_V1 + '/verify-set-password-link',

  createAgency: BASE_URL_V1 + '/organization/agency/store',
  getAgencies: BASE_URL_V1 + '/organization/agency/index',
  deleteAgency: BASE_URL_V1 + '/organization/agency/delete',
  updateAgency: BASE_URL_V1 + '/organization/agency/update',
  agencystatusUpdate: BASE_URL_V1 + '/organization/agency/status-change',

  createEmployee: BASE_URL_V1 + '/organization/employee/store',
  getEmployees: BASE_URL_V1 + '/organization/employee/index',
  deleteEmployee: BASE_URL_V1 + '/organization/employee/delete',
  updateEmployee: BASE_URL_V1 + '/organization/employee/update',
  employeeStatusUpdate: BASE_URL_V1 + '/organization/employee/status-change',

  //////////////////////////////
  locations: BASE_URL_V1 + '/locations',

  permissionList: BASE_URL_V1 + '/permission-list',
  permissionUpdate: BASE_URL_V1 + '/update-permission',



///////// fight /////////
flightSearch: BASE_URL_V1 + '/flight/search',


};
