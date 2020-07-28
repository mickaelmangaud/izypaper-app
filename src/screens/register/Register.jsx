import React, { useState } from 'react';
import { RegisterWrapper } from './styled';
import { Input, Button } from '../../components';
import { gql, useMutation } from '@apollo/client';

export const Register = () => {
  const [errors, setErrors] = useState(null);

  const [formFields, setFormFields] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    password_confirmation: ''
  });

  const handleInputChange = e => {
    setErrors(null);
    setFormFields({ ...formFields, [e.target.name]: e.target.value });
  };

  const [createUser] = useMutation(CREATE_USER_QUERY, {
    onError: err => {
      console.log('CREATEUSER ERROR :', err)
      setErrors(err.message);
    },
  });

  const handleSubmitRegister = e => {
    // TODO: valider identifiants
    e.preventDefault();
    createUser({ variables: formFields });
  };

  return (
    <RegisterWrapper>
     <div className="wrapper">
      <form onSubmit={handleSubmitRegister}>
        <h1>IZYPAPER Inscription</h1>
        <Input 
          label="Adresse mail"
          type="text"
          value={formFields.email}
          onChange={handleInputChange}
          name="email"
          error={false}
        />

        <Input 
          label="Mot de passe"
          type="password"
          value={formFields.password}
          onChange={handleInputChange}
          name="password"
          error={false}
        />

        <Input 
          label="Confirmation du mot de passe"
          type="password"
          value={formFields.password_confirmation}
          onChange={handleInputChange}
          name="password_confirmation"
          error={false}
        />
        <Button 
          label="Je m'inscris !"
          className="register-btn"
          onClick={handleSubmitRegister}
        />
      </form>
     </div>
    </RegisterWrapper>
  )
};

const CREATE_USER_QUERY = gql`
  mutation CreateUser( $firstName: String!, $lastName: String! ,$email: String!, $password: String!) {
    createUser(input: {firstName: $firstName, lastName: $lastName, email: $email, password: $password}) {
      id
      email
      firstName
      lastName
      roles
    }
  }
`;
