export const BASE_URL_V1 = process.env.NEXT_PUBLIC_API_BASE_URL;
export const NEXT_PUBLIC_BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL

export const API_END_POINTS = {
  getUser: NEXT_PUBLIC_BACKEND_URL + '/api/user',
  login: BASE_URL_V1 + '/auth/login',
  logout: BASE_URL_V1 + '/auth/logout',
  sendResetRequest: BASE_URL_V1 + '/auth/forgot-password',
  register: BASE_URL_V1 + '/auth/register',
  brandCategories: BASE_URL_V1 + '/categories/type/brand',
  brandRegistration: BASE_URL_V1 + '/brands',
  getAllCategories: BASE_URL_V1 + '/categories',
  createCategories: BASE_URL_V1 + '/categories',
  updateCategories: BASE_URL_V1 + '/categories',
  getProfile : BASE_URL_V1 + '/profile',
};
