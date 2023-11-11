import { FormComponent } from 'components/FormStyled/Form.styled';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import contactsOperations from 'redux/contacts/contacts-operations';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async e => {
    e.preventDefault();

    dispatch(contactsOperations.createContact({ name, number }));
    setName('');
    setNumber('');
  };

  return (
    <FormComponent onSubmit={handleSubmit}>
      <div>
        <label>
          <p>Name</p>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={e => {
              setName(e.target.value);
            }}
            value={name}
          />
        </label>
        <label>
          <p>Number</p>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={e => {
              setNumber(e.target.value);
            }}
            value={number}
          />
        </label>
      </div>
      <div>
        <button type={'submit'}>Add contact</button>
      </div>
    </FormComponent>
  );
};
