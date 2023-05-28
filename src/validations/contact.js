import * as yup from 'yup';

export const contactSchema = yup.object({
  names: yup.string().required('Fullnames field is required'),
  email: yup.string().required('Email field is required'),
  message: yup.string().required('Message field is required'),
});
