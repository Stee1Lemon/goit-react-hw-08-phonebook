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

const deleteContact = createAsyncThunk('contacts/deleteContact', async id => {
  try {
    await axios.delete(`/contacts/${id}`);
    return id
  } catch (error) {}
});

const contactsOperations = {
  getContacts,
  createContact,
  deleteContact,
};

export default contactsOperations;
