export const BASE_URL = import.meta.env.VITE_API_URL;
// export const BASE_URL = 'https://b0fd-139-135-36-92.ngrok-free.app'
export const BASE_URL_IMAGE = import.meta.env.VITE_FILES_URL;

export const API_END_POINTS = {
  forgetPassword: BASE_URL + "/api/auth/forgot-password",
  resetPassword: BASE_URL + "/api/auth/reset-password",
  updateUserProfile: BASE_URL + "/api/auth/profile",
  getUserProfile: BASE_URL + "/api/auth/profile",

  getAdminDashboardStats: BASE_URL + "/api/admin/stats",
};
