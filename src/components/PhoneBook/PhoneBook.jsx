import { useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/selectors';
import { PhoneBook } from './PhoneBook.styled';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';

export const PhoneBookComponent = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <PhoneBook>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && <h3>Loading...</h3>}
      {error && <h3>Request failed</h3>}
      <ContactList />
    </PhoneBook>
  );
};
