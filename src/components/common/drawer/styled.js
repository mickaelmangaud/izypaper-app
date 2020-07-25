import styled from 'styled-components';

export const DrawerWrapper = styled.div`
  position: absolute;
  /* top: 64px; */
  left: ${({ open }) => open ? 'calc(100vw - 500px)' : '100vw'};
  opacity: ${({ open }) => open ? 1 : 0};
  width: 500px;
  /* height: calc(100vh - 64px); */
  height: 100vh;
  background-color: white;
  box-shadow: rgba(0,0,0,0.2) 0px 0px 5px 1px;
  transition: all .2s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between; 

  .close {
    color: ${({ theme }) => theme.colors.primary};
    position: absolute;
    right: 16px;
    top: 16px;
    font-size: 24px;
    border-radius: 50%;
    padding: 8px;
    &:hover {
      background-color: rgba(4, 139, 154, .5);
      color: white;
    }
  }

  .userinfos {
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    .avatar {
      margin: 10% 0;
      width: 50%;
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