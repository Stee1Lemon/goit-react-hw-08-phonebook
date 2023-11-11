import { createSlice } from '@reduxjs/toolkit';
import contactsOperations from './contacts-operations';

const initialState = {
  items: [],
  isLoading: false,
  error: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(contactsOperations.getContacts.pending, state => {
        state.isLoading = true;
      })
      .addCase(
        contactsOperations.getContacts.fulfilled,
        (state, { payload }) => {
          state.items = payload;
          state.isLoading = false;
          state.error = '';
        }
      )
      .addCase(contactsOperations.createContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(
        contactsOperations.createContact.fulfilled,
        (state, { payload }) => {
          state.items.push(payload);
          state.isLoading = false;
        }
      )
      .addCase(
        contactsOperations.deleteContact.fulfilled,
        (state, { payload }) => {
          const newItems = state.items.filter(item => item.id !== payload);
          state.items = newItems;
          state.isLoading = false;
        }
      )
      .addMatcher(
        action => action.type.endsWith('/rejected'),
        state => {
          state.items = [];
          state.isLoading = false;
          state.error = 'Request failed';
        }
      );
  },
});

export const contactsReducer = contactsSlice.reducer;
