import styled from 'styled-components';

export const StyledScreenWrapper = styled.div`
  height: 100%;
  width:100vw;
  padding: 36px;
  margin-top: 64px;
  overflow-y: scroll;
  padding-bottom: 150px;
  background-color: #eee;


  &::-webkit-scrollbar { width: 4px }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.primary };
    outline: 3px solid slategrey;
    border-radius: 5px;
  }
`;