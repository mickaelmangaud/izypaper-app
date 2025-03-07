import styled from 'styled-components';

export const DrawerWrapper = styled.div`
  position: absolute;
  left: ${({ open }) => open ? 'calc(100vw - 420px)' : '100vw'};
  opacity: ${({ open }) => open ? 1 : 0};
  width: 420px;
  height: 100vh;
  background-color: white;
  box-shadow: rgba(0,0,0,0.2) 0px 0px 5px 1px;
  transition: all .2s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 760px) {
    width: 100vw;
    left: ${({ open }) => open ? '0' : '100vw'};
  }

  .quit, .close {
    color: ${({ theme }) => theme.colors.primary};
    position: absolute;
    left: 8px;
    top: 16px;
    font-size: 24px;
    border-radius: 50%;
    padding: 8px;
    transition: all .3s ease;
    &:hover {
      transform: rotate(180deg);
    }
  }

  .close {
    left: initial;
    right: 8px;
  }

  .userinfos {
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    .avatar {
      margin: 10% 0;
      height: 50%;
      border-radius: 50%;
      border: 2px solid rgb(4, 139, 154);
    }

    .username {
      color: rgba(0,0,0, .8);
      font-family: 'Ubuntu', sans-serif;
      font-size: 24px;
    }

    .email {
      font-family: 'Boogaloo', sans-serif;
      font-size: 18px;
      color: rgb(4, 139, 154);
    }
  }

  .content {

  }

  .footer {
    
  }
`;