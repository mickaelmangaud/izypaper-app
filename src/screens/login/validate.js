import { regex } from '../../utils';

export const validateLogin = credentials => {
  let errors = {};
  errors.emails = !regex.EMAIL.test(credentials.email);
  errors.password = credentials.password.length < 6;
  return errors;
}