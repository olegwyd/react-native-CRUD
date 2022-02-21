import * as yup from 'yup';

export const scheme = yup.object().shape({
  userName: yup.string().min(1).max(30, 'not more than 30 symbols').required(),
  email: yup.string().email().max(50, 'less than 50 symbols').required(),
  password: yup.string().min(7, '7-20 char').max(20, '7-20 char').required(),
  varifyPassword: yup.string().min(7).max(20).required(),
});
