import { regex } from '../../utils';

export const validateLogin = credentials => {
  let errors = {};

  if (!regex.EMAIL.test(credentials.email)) {
    errors.email = 'Email invalide'
  } 

  if (credentials.password.length < 6) {
    errors.password = 'Mot de passe invalide'
  }

  return errors;
}