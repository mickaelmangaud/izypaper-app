import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavigationWrapper = styled.div`
  background-color: #048b9a;
  height: 60px;
  box-shadow: rgba(0, 0, 0, 0.2) 1px 1px 5px 1px;
`;

export const Navigation = () => {
  return (
    <NavigationWrapper>
      <Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/creer-mon-entreprise">Créer mon entreprise</Link>
    </NavigationWrapper>
  )
};
