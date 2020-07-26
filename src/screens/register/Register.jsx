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
    onError: err => setErrors(err.message),
  });

  const handleSubmitRegister = e => {
    // TODO: validate payload

    e.preventDefault();
    createUser({ variables: formFields });
  };

  return (
    <RegisterWrapper>
      <div className="register-wrapper">
        <div className="form-wrapper">
          <form onSubmit={handleSubmitRegister}>
            <h1>IZYPAPER - Inscription</h1>
            <Input 
              name="firstName"
              label="Prénom"
              type="text"
              onChange={handleInputChange}
              className="form-input"
            />
            <Input 
              name="lastName"
              label="Nom"
              type="text"
              onChange={handleInputChange}
              className="form-input"
            />
            <Input 
              name="email"
              label="Adresse email"
              type="text"
              onChange={handleInputChange}
              className="form-input"
            />
            <Input 
              name="password"
              label="Mot de passe"
              type="password"
              onChange={handleInputChange}
              className="form-input"
            />
            <Input 
              name="password_confirmation"
              label="Confirmation du mot de passe"
              type="password"
              onChange={handleInputChange}
              className="form-input"
            />

            <Button 
              label="Je m'inscris !"
              className="register-btn"
            />
          </form>
          {!!errors && <p>{errors}</p>}
        </div>
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
