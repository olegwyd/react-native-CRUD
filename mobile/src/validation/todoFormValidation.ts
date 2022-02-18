import * as yup from 'yup';

export const scheme = yup.object().shape({
  title: yup.string().min(1).max(30, 'not more than 50 symbols').required(),
  description: yup.string().min(1).max(200, 'less than 200 symbols').required(),
  year: yup.string().min(2, '2 - 4 symbols').max(4, '2 - 4 symbols').required(),
});
