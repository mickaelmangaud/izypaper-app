import styled from 'styled-components';

export const PaperWrapper = styled.div`
  background-color: #f5f5f5;
  box-shadow: rgba(60,60,60,0.2) 0px 0px 3px 0px;
  padding: 36px;
  margin: 36px 0;
  border-radius: 3px 10px 10px 3px;
  border-left: 3px solid ${({ theme}) => theme.colors.primary};
`;