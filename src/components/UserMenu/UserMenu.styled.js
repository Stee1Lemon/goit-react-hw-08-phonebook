import styled from 'styled-components';

export const UserMenuComponent = styled('div')`
  display: flex;
  align-items: center;
  gap: 10px;

  p {
    font-size: 16px;
  }

  span {
    font-weight: 500;
  }

  button {
    display: inline-block;
    outline: 0;
    appearance: none;
    padding: 0px 12px;
    border-radius: 4px;
    text-decoration: none;
    background-color: rgb(249, 251, 250);
    border: 1px solid rgb(137, 151, 155);
    box-shadow: rgb(6 22 33 / 30%) 0px 1px 2px;
    color: rgb(61, 79, 88);
    font-size: 13px;
    height: 36px;
    transition: all 150ms ease-in-out 0s;
    &:hover {
      color: rgb(61, 79, 88);
      background-color: rgb(255, 255, 255);
      border: 1px solid rgb(93, 108, 116, 0.3);
      box-shadow: rgb(0 0 0 / 30%) 0px 4px 4px, rgb(231 238 236) 0px 0px 0px 3px;
    }
  }
`;
