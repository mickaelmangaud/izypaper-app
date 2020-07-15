import React from 'react'
import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (
    <div>
      <Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/creer-mon-entreprise">Créer mon entreprise</Link>
    </div>
  )
};
