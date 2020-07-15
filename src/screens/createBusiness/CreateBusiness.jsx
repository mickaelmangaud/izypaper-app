import React, { useState } from 'react';
import { Input } from '../../components';

export const CreateBusiness = () => {
  const [state, setState] = useState({
    step: 1,    
  });

  return (
    <div>
      <h1>Créer son entreprise</h1>
      <hr />
      <Input 
        value=""
        id="info1"
      />
    </div>
  )
};