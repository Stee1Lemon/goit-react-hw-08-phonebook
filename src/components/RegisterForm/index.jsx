import { FormComponent } from 'components/FormStyled/Form.styled';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import authOperations from 'redux/auth/auth-operations';

export const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <FormComponent onSubmit={handleSubmit}>
      <div>
        <label>
          <p>Name</p>
          <input
            type="text"
            name="name"
            required
            autoComplete="off"
            onChange={e => {
              setName(e.target.value);
            }}
            value={name}
          />
        </label>
        <label>
          <p>Email</p>
          <input
            type="email"
            name="email"
            required
            autoComplete="off"
            onChange={e => {
              setEmail(e.target.value);
            }}
            value={email}
          />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            name="password"
            required
            onChange={e => {
              setPassword(e.target.value);
            }}
            value={password}
          />
        </label>
      </div>
      <div>
        <button type={'submit'}>Register</button>
        <button type="button" onClick={() => navigate('/login')}>
          Back to Log in field
        </button>
      </div>
    </FormComponent>
  );
};
