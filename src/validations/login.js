import * as yup from 'yup';

export const loginSchema = yup.object({
  username: yup.string().required('Username field is required'),
  password: yup
    .string()
    .required('Password field is required')
    .min(6, 'Password must be atleast 6 characters'),
});

export const registerSchema = yup.object({
    firstname:yup.string().required('Firstname field is required').min(3, 'Firstname must be atleast 3 characters'),
    lastname:yup.string().required('Lastname field is required').min(3, 'Firstname must be atleast 3 characters'),
    shop:yup.string().required('Shop name is required').min(3, 'Shop name must be atleast 3 characters'),
    phone:yup.string().required('Phone number is required').min(10, 'Phone number must be atleast 10 characters'),
    email: yup.string().required('Email field is required').email('Email must be a valid email'),
    password: yup
      .string()
      .required('Password field is required')
      .min(6, 'Password must be atleast 6 characters'),
  });
