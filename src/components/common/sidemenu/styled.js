import styled from 'styled-components';

export const SideMenuWrapper = styled.div`
  z-index: 1;
  position: absolute;
  background-color: white;
  height: 100vh;
  width: 250px;
  left: ${({ displayed }) => displayed ? '0' : '-250px'};
  /* top: 64px; */
  box-shadow: rgba(0,0,0,0.2) 0px 0px 5px 1px;
  transition: all .2s ease;

  .close {
    color: ${({ theme }) => theme.colors.primary};
    position: absolute;
    left: 16px;
    top: 16px;
    font-size: 24px;
    border-radius: 50%;
    padding: 8px;
    &:hover {
      background-color: ${({ theme }) => theme.colors.primary};
      color: white;
    }
  }
`;