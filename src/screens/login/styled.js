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

  .back-arrow {
    position: absolute;
    left: 5%;
    top: 3%;
    display: flex;
    cursor: pointer;
      

    .material-icons {
      color: white;
      font-size: 42px;
      position: relative;
      bottom: 10px;
      @media (max-width: 768px) {
        color: ${({ theme }) => theme.colors.primary};
      }
    }

    p {
      color: white;
      font-family: 'Ubuntu', sans-serif;
      @media (max-width: 768px) {
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }

  .infos {
    flex: 1;
    margin: 5%;
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
      background-color: #fff;
      box-shadow: rgba(0, 0, 0, 0.2) 1px 1px 5px 1px;
      padding: 60px 60px 0 60px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 540px;
      min-width: 500px;
      position: relative;
      margin-bottom: 24px;
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
        font-family: 'Lato', sans-serif;
        transition: all .2s ease;
      }

      input {
        margin-bottom: 24px;
      }

      button {
        font-size: 18px;
        margin-top: 24px;
      }

      .errors {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        flex: 1;

        p {
          color: rgba(255,0,0,.5);
          font-weight: bold;
          font-family: 'Lato', sans-serif;
        }
      }
    }
  }
`;