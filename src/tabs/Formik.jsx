import styled from '@emotion/styled';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
const INITIAL_VALUES = { firstName: '', lastName: '', email: '' };
const VALIDATION_SHEMA = Yup.object({
  firstName: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
  lastName: Yup.string()
    .max(20, 'Must be 20 characters or less')
    .required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
});

export const FormikTab = () => {
  const onSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      validationSchema={VALIDATION_SHEMA}
      onSubmit={onSubmit}
    >
      <Form>
        <label htmlFor="firstName">First Name</label>
        <Field name="firstName" type="text" />
        <Error component="div" name="firstName" />

        <label htmlFor="lastName">Last Name</label>
        <Field name="lastName" type="text" />
        <Error component="div" name="lastName" />

        <label htmlFor="email">Email Address</label>
        <Field name="email" type="email" />
        <Error component="div" name="email" />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

const Error = styled(ErrorMessage)`
  color: red;
`;
