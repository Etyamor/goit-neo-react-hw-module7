import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { filtersReducer } from "./filtersSlice.js";
import { contactsReducer } from "./contactsSlice.js";
import { persistReducer, persistStore } from "redux-persist";

const contactsPersistConfig = {
  key: "contacts",
  storage,
  blacklist: ["filter"],
};

const persistedContactsReducer = persistReducer(
  contactsPersistConfig,
  contactsReducer,
);

export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filters: filtersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

export const persistor = persistStore(store);
