import { regex } from '../../utils';

export const validateLogin = credentials => ({
  email: !regex.EMAIL.test(credentials.email) && 'Email invalide',
  password: credentials.password.length < 6 && 'Mot de passe invalide',
})