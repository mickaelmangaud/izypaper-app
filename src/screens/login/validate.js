import { regex } from '../../utils';

export const validateLogin = credentials => ({
  email: !regex.EMAIL.test(credentials.email),
  password: credentials.password.length < 6,
})