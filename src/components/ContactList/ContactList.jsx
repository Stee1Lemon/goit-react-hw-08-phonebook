import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/contacts-selectors';
import { useEffect } from 'react';
import { fetchContactsThunk } from 'redux/thunk';
import { fetchDeleteContact } from 'api/api';
import { selectFilter } from 'redux/filter/filter-selectors';
import contactsOperations from 'redux/contacts/contacts-operations';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.getContacts());
  }, [dispatch]);

  const deleteContact = async id => {
    await fetchDeleteContact(id);
    dispatch(fetchContactsThunk());
  };

  const doFilteredContacts = () => {
    return contacts.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const filteredContacts = doFilteredContacts();

  if (!filteredContacts?.length) return null;

  return (
    <>
      <ul>
        {filteredContacts.map(({ name, id, number }) => {
          return (
            <li key={id}>
              <p>
                {name}: {number}
              </p>
              <button onClick={() => deleteContact(id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
