import { useDispatch, useSelector } from 'react-redux';
import {
  selectError,
  selectIsLoading,
} from 'redux/contacts/contacts-selectors';
import { PhoneBook } from './PhoneBook.styled';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import contactsOperations from 'redux/contacts/contacts-operations';

export const PhoneBookComponent = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  const handleContacts = () => {
    dispatch(contactsOperations.getContacts());
  };

  return (
    <PhoneBook>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <button onClick={handleContacts}>Handle Contacts</button>
      {isLoading && <h3>Loading...</h3>}
      {error && <h3>Request failed</h3>}
      <ContactList />
    </PhoneBook>
  );
};
