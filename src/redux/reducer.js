// import { combineReducers } from 'redux';
// import { contactsReducer } from './contacts/contacts-slice';
// import { filterReducer } from './filter/filter-slice';
// import { authReducer } from './auth/auth-slice';
// import storage from 'redux-persist/lib/storage';
// import persistReducer from 'redux-persist/es/persistReducer';

// const persistConfig = {
//   key: 'root',
//   storage,
// };

// const authPersistConfig = {
//   key: 'auth',
//   storage,
//   whitelist: ['token'],
// };

// export const rootReducer = combineReducers({
//   auth: persistReducer(authPersistConfig, authReducer),
//   contacts: contactsReducer,
//   filter: filterReducer,
// });

// export default persistReducer(persistConfig, rootReducer);
