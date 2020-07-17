import styled from 'styled-components';
import { background } from '../../../assets/images';

export const LoaderWrapper = styled.div`
  display: ${({displayed}) => displayed ? 'flex' : 'none'};
  justify-content: center;
  z-index: 10000;
  position: absolute;
  height: 100vh;
  width: 100vw;
  top: 0;
  background-image: url(${background});
  background-position: top center;
  background-size: cover;

  svg {
    width: 100px;
  }
`;