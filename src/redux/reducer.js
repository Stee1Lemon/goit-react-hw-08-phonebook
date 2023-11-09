import { combineReducers } from 'redux';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';
import { authReducer } from './auth/auth-slice';

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  auth: authReducer,
  filter: filterReducer,
});
