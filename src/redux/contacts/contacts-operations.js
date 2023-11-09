import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const getContacts = createAsyncThunk('contacts/getContacts', async () => {
  try {
    const { data } = await axios('/contacts');
    return data;
  } catch (error) {}
});

const createContact = createAsyncThunk('contacts/createContact', async body => {
  try {
    const { data } = await axios.post('/contacts', body);
    return data;
  } catch (error) {}
});

const contactsOperations = {
  getContacts,
  createContact,
};

export default contactsOperations;
