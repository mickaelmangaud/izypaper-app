import styled from 'styled-components';

export const NavigationWrapper = styled.div`
  position: fixed;
  width: 100vw;
  background-color: #048b9a;
  height: 60px;
  box-shadow: rgba(0, 0, 0, 0.2) 1px 1px 5px 1px;
  display: flex;
  justify-content: space-between;

  .burger {
    display: flex;
    justify-content: center;
    align-items: center;
    .material-icons {
      color: white;
      font-size: 32px;
      transition: all .2s ease;
      margin-left: 12px;
    }
  }

  .app-title {
    font-family: 'Merienda One', cursive;
    flex: 1;
    font-size: 24px;
    align-self: center;
    color: white;
    margin-left: 12px;
    position: relative;
    bottom: 2px;
  }

  .icons {
    width: 200px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 12px;
  }

  .icon {
    color: white;
    font-size: 32px;
    transition: all .2s ease;
    margin-left: 12px;
    &:hover {
      color: rgba(255,255,255, .75);
      transform: scale(.95);
    }
  }
`;