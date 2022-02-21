import * as yup from 'yup';

export const scheme = yup.object().shape({
  email: yup.string().email().max(50, 'less than 50 symbols').required(),
  password: yup.string().min(7, '7-20 char').max(20, '7-20 char').required(),
});
