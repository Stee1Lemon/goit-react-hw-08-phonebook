import { lazy, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout';
import { useDispatch, useSelector } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
import PrivateRoute from './privateRoute';
import PublicRoute from './publicRoute';
import { selectFetchingCurrentUser } from 'redux/auth/auth-selectors';

const PhoneBookPage = lazy(() => import('pages/PhoneBookPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));

export const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(selectFetchingCurrentUser);

  useEffect(() => {
    dispatch(authOperations.refresh());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route element={<PublicRoute restricted redirectTo="/contacts" />}>
              <Route path="login" element={<LoginPage />} />
              <Route path="register" element={<RegisterPage />} />
            </Route>
            <Route element={<PrivateRoute redirectTo="/login" />}>
              <Route path="contacts" element={<PhoneBookPage />} />
            </Route>
            <Route path="/" element={<Navigate to="login" />} />
            <Route path="*" element={<Navigate to="login" />} />
          </Route>
        </Routes>
      </>
    )
  );
};
