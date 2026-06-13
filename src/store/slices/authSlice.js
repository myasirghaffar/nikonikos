import { createSlice } from "@reduxjs/toolkit";
import api from "../../utils/axios";
import Swal from "sweetalert2"

const initialState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
  userDetails: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = !!action.payload;
      state.loading = false;
      state.error = null;
    },
    clearUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.loading = false;
      state.error = null;
      state.userDetails = null;
    },
    setUserDetails: (state, action) => {
      state.userDetails = action.payload;
      state.loading = false;
      state.error = null;
    },
  },
});

export const { setLoading, setError, setUser, clearUser, setUserDetails } = authSlice.actions;

export const login = (credentials) => async (dispatch) => {

  try {
    dispatch(setLoading(true));

    const { data } = await api.post(`/api/auth/login`, credentials);

    const token = data?.data?.token;
    const user = data?.data?.user;

    dispatch(setUser({ ...user, role: user?.role || "admin", token }));
    return { success: true, user };

  } catch (error) {
    console.log(error, 'data in error')
    dispatch(setError(error.response?.data?.error || error.message || "Login failed"));
    return { success: false, error: error.response?.data?.error };
  } finally {
    dispatch(setLoading(false));
  }
};

export const logout = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));

    await new Promise((resolve) => setTimeout(resolve, 500));

    dispatch(clearUser());

    return { success: true };
  } catch (error) {
    dispatch(setError(error.response?.data?.message || error.message || "Logout failed"));
    return { success: false, error: error.message };
  } finally {
    dispatch(setLoading(false));
  }
};

export const updateUser = (userData) => async (dispatch, getState) => {
  const formData = new FormData();

  // Append all user data fields to FormData
  Object.keys(userData).forEach(key => {
    if (key === 'profileImage' && userData[key]) {
      formData.append('profileImage', userData[key]);
    } else if (userData[key] !== undefined && userData[key] !== null) {
      formData.append(key, userData[key]);
    }
  });

  try {
    dispatch(setLoading(true));

    const { data } = await api.put(`/api/auth/editUser`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    // Update both user and userDetails in the state
    dispatch(setUser({ ...data.data, token: getState().auth?.user?.token }));
    dispatch(setUserDetails(data.data));

    Swal.fire({
      title: "Success",
      text: "Profile updated successfully",
      icon: "success",
      confirmButtonColor: "#DC2626",
      customClass: {
        confirmButton: "my-swal-btn",
      },
    });

    return { success: true, user: data.data };
  } catch (error) {
    Swal.fire({
      title: "Update Failed",
      text: error.response?.data?.message || error.message || "Failed to update profile",
      icon: "error",
      confirmButtonColor: "#DC2626",
      customClass: {
        confirmButton: "my-swal-btn",
      },
    });
    dispatch(setError(error.response?.data?.message || error.message || "Failed to update profile"));
    return { success: false, error: error.message };
  } finally {
    dispatch(setLoading(false));
  }
};

export default authSlice.reducer;
