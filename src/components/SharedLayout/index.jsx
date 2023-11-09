import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, StyledLink } from './SharedLayout.styled';
import { UserMenu } from 'components/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/auth-selectors';

export const SharedLayout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Container>
      <Header>
        <h1>Phonebook</h1>
        <nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/contacts">Contacts</StyledLink>
          <StyledLink to="/login">Log in</StyledLink>
          <StyledLink to="/register">Registration</StyledLink>
        </nav>
        {isLoggedIn && <UserMenu />}
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
