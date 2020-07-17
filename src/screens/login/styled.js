import styled from 'styled-components';
import { background } from '../../assets/images';

export const LoginWrapper = styled.div`
  display: flex;
  height: 100vh;
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }

  .infos, .form {
    flex: 1;
  }

  .form { 
    background-color: #eee;
    
    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 20%;
      height: 100%;

      h1 {
        margin-bottom: 80px;
        color: ${(({ theme }) => theme.colors.primary )};
        text-align: center;
        font-size: 42px;
      }

      input, button {
        width: 80%;
        margin-bottom: 24px;
        height: 40px;
        border: none;
        background-color: #ccc;
        border-radius: 3px;
        padding: 8px 12px;
      }

      input:focus {
        border: 1px solid ${({theme}) => theme.colors.primary};
      }

      button {
        background-color: ${({ theme}) => theme.colors.primary };
        color: white;
        font-size: 18px;
        &:hover {
          background-color: ${({ theme }) => `rgba(${theme.colors.primary}, .2)`};
        }
      }
    }
  }
`;