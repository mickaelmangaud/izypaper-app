import styled from 'styled-components';
import { images } from '../../../assets';

export const NavigationWrapper = styled.div`
  position: fixed;
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.primary};
  height: 64px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 5px 0px;
  display: ${({ displayed }) => displayed ? 'flex' : 'none '};
  justify-content: space-between;
  padding: 0 12px;
  background-image: url(${images.background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: -1px top;

  .app-title {
    font-family: 'Merienda One', cursive;
    flex: 1;
    font-size: 18px;
    align-self: center;
    color: white;
    position: relative;
    bottom: 1px;
    margin-left: 12px;
  }

  .icons {
    width: 200px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .icon {
    color: white;
    padding: 12px;
    overflow: visible;
    font-size: 1.5rem;
    text-align: center;
    transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border-radius: 50%;
    &:hover {
      background-color: rgba(0, 0, 0, 0.04);
    }
  }
`;

export const BurgerWrapper = styled.div`
z-index: 20;
display: flex;
justify-content: center;
align-items: center;

  .material-icons {
    color: white;
    padding: 12px;
    overflow: visible;
    font-size: 1.5rem;
    text-align: center;
    transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border-radius: 50%;
    &:hover {
      background-color: rgba(0, 0, 0, 0.04);
    }
  }
`;