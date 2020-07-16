import styled from 'styled-components';

export const LoaderWrapper = styled.div`
  display: ${({displayed}) => displayed ? 'flex' : 'none'};
  justify-content: center;
  z-index: 10000;
  position: absolute;
  height: 100vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.primary};
  top: 0;

  svg {
    width: 100px;
  }
`;