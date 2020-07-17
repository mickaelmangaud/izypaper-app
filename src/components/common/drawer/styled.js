import styled from 'styled-components';

export const DrawerWrapper = styled.div`
  position: absolute;
  top: 64px;
  left: ${({ open }) => open ? 'calc(100vw - 500px)' : '100vw'};
  opacity: ${({ open }) => open ? 1 : 0};
  width: 500px;
  height: calc(100vh - 64px);
  background-color: white;
  box-shadow: rgba(0,0,0,0.2) 0px 0px 5px 1px;
  transition: all .3s ease;

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
      font-family: 'Merienda One', sans-serif;
      font-size: 32px;
    }

    .description {
      font-family: 'Boogaloo', sans-serif;
      font-size: 18px;
      color: rgba(0,0,0,.5);
    }
  }
`;