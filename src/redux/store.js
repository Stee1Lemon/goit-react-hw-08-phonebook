import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
// import { rootReducer } from './reducer';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { authReducer } from './auth/auth-slice';
import { contactsReducer } from './contacts/contacts-slice';
import { filterReducer } from './filter/filter-slice';

// const persistConfig = {
//   key: 'root',
//   storage,
//   whitelist: ['auth'],
// };

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

// const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactsReducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
