import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header } from './SharedLayout.styled';
import { UserMenu } from 'components/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/auth-selectors';

export const SharedLayout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Container>
      <Header>
        <h1>Phonebook</h1>
        {isLoggedIn && <UserMenu />}
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
