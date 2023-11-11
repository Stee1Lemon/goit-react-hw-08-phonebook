import { useDispatch, useSelector } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
import { selectUserEmail } from 'redux/auth/auth-selectors';
import { UserMenuComponent } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const email = useSelector(selectUserEmail);

  return (
    <>
      <UserMenuComponent>
        <p>
          Welcome <span>{email}</span>
        </p>
        <button
          type="button"
          onClick={() => {
            dispatch(authOperations.logOut());
          }}
        >
          Logout
        </button>
      </UserMenuComponent>
    </>
  );
};
