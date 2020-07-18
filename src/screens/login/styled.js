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

  .infos, .form-wrapper {
    flex: 1;
  }

  .form-wrapper { 
    background-color: #fff;
    display: flex;
    align-items: center;
    
    form {
      padding: 5% 35%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      position: relative;

      h1 {
        margin-bottom: 80px;
        color: ${(({ theme }) => theme.colors.primary )};
        text-align: center;
        font-size: 42px;
      }

      input, button {
        margin-bottom: 24px;
      }

      button {
        background-color: ${({ theme}) => theme.colors.primary };
        color: white;
        font-size: 18px;
        &:hover {
          background-color: ${({ theme }) => `rgba(${theme.colors.primary}, .2)`};
        }
      }

      .errors {
        width: 60%;
        position: absolute;
        text-align: center;
        bottom: 0;
        p {
          color: red;
        }
      }
    }
  }
`;