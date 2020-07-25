import styled from 'styled-components';
import { images } from '../../../assets';

export const LoaderWrapper = styled.div`
  display: ${({displayed}) => displayed ? 'flex' : 'none'};
  justify-content: center;
  z-index: 10000;
  position: absolute;
  height: 100vh;
  width: 100vw;
  top: 0;
  background-image: url(${images.background});
  background-position: top center;
  background-size: cover;

  svg {
    width: 100px;
  }
`;