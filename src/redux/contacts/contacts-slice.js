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
      .addCase(
        contactsOperations.getContacts.fulfilled,
        (state, { payload }) => {
          state.items = payload;
          state.isLoading = false;
          state.error = '';
        }
      )
      .addCase(
        contactsOperations.createContact.fulfilled,
        (state, { payload }) => {
          console.log(payload);
          // state.items.push({payload.name, payload.number})
        }
      )
      .addMatcher(
        action => action.type.endsWith('/pending'),
        state => {
          state.isLoading = true;
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

export const { deleteContactRedux } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
