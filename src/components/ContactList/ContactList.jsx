import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/contacts-selectors';
import { useEffect } from 'react';
import { selectFilter } from 'redux/filter/filter-selectors';
import contactsOperations from 'redux/contacts/contacts-operations';
import { ContactsListComponent } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.getContacts());
  }, [dispatch]);

  const deleteContact = async id => {
    dispatch(contactsOperations.deleteContact(id));
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
      <ContactsListComponent>
        {filteredContacts.map(({ name, id, number }) => {
          return (
            <li key={id}>
              <div>
                <p>
                  {name}: {number}
                </p>
                <button onClick={() => deleteContact(id)}>Delete</button>
              </div>
            </li>
          );
        })}
      </ContactsListComponent>
    </>
  );
};
