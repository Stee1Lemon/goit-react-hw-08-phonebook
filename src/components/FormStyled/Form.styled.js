import styled from 'styled-components';

export const FormComponent = styled.form`

max-width: fit-content;
padding: 35px;
margin: 0 auto;
border: 2px solid rgba(3,4,94,0.12);
border-radius: 10px;
background-color: rgba(3,4,94,0.1741946778711485);
box-shadow: 9px 6px 27px -6px rgba(0,0,0,0.65);
-webkit-box-shadow: 9px 6px 27px -6px rgba(0,0,0,0.65);
-moz-box-shadow: 9px 6px 27px -6px rgba(0,0,0,0.65);

  p {
    --s: 0.1em;
    --c: #2c4bff;
  
  color: #0000;
  padding-bottom: var(--s);
  background: 
    linear-gradient(90deg,var(--c) 50%,#000 0) calc(100% - var(--_p,0%))/200% 100%,
    linear-gradient(var(--c) 0 0) 0% 100%/var(--_p,0%) var(--s) no-repeat;
    -webkit-background-clip: text,padding-box;
  background-clip: text,padding-box;
  transition: 0.5s;

    font-size: 16px;
    cursor: pointer;

    &:hover {--_p: 50%}
  }

  input {
    margin-top: 5px;
    margin-bottom: 20px;
    border: none;
    background: hsl(0 0% 93%);
    border-radius: 0.25rem;
    padding: 0.75rem 1rem;
  }
    button {
        margin-right: 20px;
        border: none;
        border-radius: 0.25rem;
        padding: 0.75rem 1rem;
        background: #0077b6;
        color: white;
        box-shadow: 0 0.75rem 0.5rem -0.5rem hsl(0 50% 80%);
        transition: all 150ms ease-in-out 0s;

        &:hover, 
        &:focus {
            background: #03045e;
            box-shadow: rgb(0 0 0 / 30%) 0px 4px 4px, rgb(231 238 236) 0px 0px 0px 3px;
               
        }
    }
  }
`;
