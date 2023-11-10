import { lazy, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';

const PhoneBookPage = lazy(() => import('pages/PhoneBookPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.refresh());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="contacts" element={<PhoneBookPage />} />
          <Route path="*" element={<Navigate to="login" />} />
        </Route>
      </Routes>
    </>
  );
};
