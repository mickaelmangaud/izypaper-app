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
    background-image: none;
  }

  .infos {
    flex: 1;
    @media (max-width: 980px) {
      display: none;
    }
  }

  .form-wrapper { 
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5%;
    flex: 1;
    @media (max-width: 768px) {
      margin: 0;
    }

    h1 {
      font-family: 'Lato', sans-serif;
    }
    
    form {
      box-shadow: rgba(0, 0, 0, 0.2) 1px 1px 5px 1px;
      background-color: #fff;
      padding: 5% 60px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 540px;
      min-width: 500px;
      position: relative;
      @media (max-width: 768px) {
        padding: 5% 15%;
        box-shadow: none;
        width: 100%;
        min-width: initial;
      }

      h1 {
        margin-bottom: 80px;
        color: ${(({ theme }) => theme.colors.primary )};
        text-align: center;
        font-size: 42px;
      }

      input, button {
        margin-bottom: 24px;
        font-family: 'Lato';
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
        height: 100px;
        text-align: center;

        p {
          color: rgba(255,0,0,.5);
          font-weight: bold;
          font-family: 'Lato', sans-serif;
        }
      }
    }
  }
`;