import { combineReducers } from 'redux';
import { contactsReducer } from './contacts/contacts-slice';
import { filterReducer } from './filter/filter-slice';
import { authReducer } from './auth/auth-slice';

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  auth: authReducer,
  filter: filterReducer,
});
