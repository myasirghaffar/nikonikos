import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage
import authReducer from "./slices/authSlice";
import { injectStore } from "../utils/axios";
import { SplitApiSettings } from "../services/SplitApiSetting";

// Create persist config
const persistConfig = {
  key: "auth",
  storage,
  whitelist: ["user", "isAuthenticated"], // Only persist these keys from auth slice
};
// Wrap authReducer with persistReducer
const persistedAuthReducer = persistReducer(persistConfig, authReducer);

// Create the root reducer
const rootReducer = {
  auth: persistedAuthReducer,
  [SplitApiSettings.reducerPath]: SplitApiSettings.reducer,
};

// Configure the store
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Needed for redux-persist
    }).concat(SplitApiSettings.middleware),
});


injectStore(store);

// Create the persistor
const persistor = persistStore(store);

export { store, persistor };
export default store;
