import styled from 'styled-components';
import { background } from '../../../assets/images';

export const NavigationWrapper = styled.div`
  position: fixed;
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.primary};
  height: 64px;
  box-shadow: rgba(0, 0, 0, 0.2) 1px 1px 5px 1px;
  display: ${({ displayed }) => displayed ? 'flex' : 'none '};
  justify-content: space-between;
  padding: 0 12px;
  background-image: url(${background});
  background-position: -1px center;
  background-size: cover;

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