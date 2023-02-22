import { configureStore } from "@reduxjs/toolkit";
import { questifyApi } from "./auth/authOperations";
import tokenSlice from "./auth/tokenSlice.jsx";
import userSlice from "./auth/userSlice.jsx";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore, PERSIST } from "redux-persist";

const persistConfig = {
  key: "user",
  version: 1,
  storage: storage,
};

const persistedUserSlice = persistReducer(persistConfig, userSlice);

export const store = configureStore({
  reducer: {
    [questifyApi.reducerPath]: questifyApi.reducer,
    user: persistedUserSlice,
    token: tokenSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST],
      },
    }).concat(questifyApi.middleware),
  devTools: false,
});

export let persistor = persistStore(store);
