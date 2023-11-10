import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import authOperations from 'redux/auth/auth-operations';
import { selectUserEmail } from 'redux/auth/auth-selectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const email = useSelector(selectUserEmail);
  const navigate = useNavigate();

  return (
    <>
      <div>
        <p>{email}</p>
        <button
          type="button"
          onClick={() => {
            dispatch(authOperations.logOut());
            navigate('/');
          }}
        >
          Logout
        </button>
      </div>
    </>
  );
};
