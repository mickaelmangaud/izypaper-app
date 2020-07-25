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
    }

    .username {
      color: rgba(0,0,0, .8);
      font-family: 'Ubuntu', sans-serif;
      font-size: 36px;
      margin-bottom: 12px;
    }

    .description {
      font-family: 'Boogaloo', sans-serif;
      font-size: 18px;
      color: rgba(0,0,0,.5);
    }
  }

  .content {

  }

  .footer {
    display: flex;
    padding: 12px;
    justify-content: flex-end;
    align-items: center;

    p {
      font-size: 14px;
      cursor: pointer;
      font-family: 'Ubuntu', sans-serif;
    }
  }
`;