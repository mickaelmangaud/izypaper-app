import React from 'react';
import { RegisterWrapper } from './styled';
import { Input, Button } from '../../components';
import { gql, useMutation } from '@apollo/client';

export const Register = () => {
  const [formFields, setFormFields] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    password_confirmation: ''
  });

  const [createUser, { error, loading, data }] = useMutation(CREATE_USER_QUERY, {
    onError: () => console.log('ON ERROR')
  });

  const handleInputChange = e => setFormFields({ ...formFields, [e.target.name]: e.target.value});

  const handleSubmitRegister = e => {
    e.preventDefault();
    console.log(`Je m'inscris`);
    try {
      createUser({ variables: formFields });
    } catch (e) {
      console.log('E', e);
    }
  }

  console.log('formFields', formFields);
  if(data) {
    console.log('CREATE USER DATA', data);
  }

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
