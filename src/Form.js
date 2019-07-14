import React from 'react';
import styled from 'styled-components';
import { withFormik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const SignUpForm = ({
  className,
  values,
  // touched,
  isSubmitting,
}) => {
  return (
    <div className={className}>
      <h1>Formik Form</h1>
      <p>Example of simple form made with Formik.</p>
      <Form className="form">
        <div className="form-input__wrapper">
          <Field
            className="form-input"
            type="email"
            name="email"
            placeholder="Email"
          />
          <small className="form-error__msg">
            <ErrorMessage name="email" />
          </small>
        </div>
        <div className="form-input__wrapper">
          <Field
            className="form-input"
            type="password"
            name="password"
            placeholder="Password"
          />
          <small className="form-error__msg">
            <ErrorMessage name="password" />
          </small>
        </div>
        <label>
          <Field
            className="form-checkbox"
            type="checkbox"
            name="newsletter"
            checked={values.newsletter}
          />
          Remember Me
        </label>
        <br />
        {/* <Field name="plan" component="select">
          <option value="free">Free</option>
          <option value="premium">Premium</option>
        </Field> */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="form-submit__btn">
          Login
        </button>
      </Form>
    </div>
  );
};

// Formik higher-order component + withFormik takes options object that we can provide to it
const FormikApp = withFormik({
  // Setting up initial values & you can access props values
  mapPropsToValues: ({ email, password, newsletter }) => ({
    email: email || '',
    password: password || '',
    newsletter: newsletter || true,
    // plan: plan || 'premium',
  }),
  validationSchema: yup.object().shape({
    email: yup
      .string()
      // Yup allows us to specify custom error messages
      .email('Email not valid')
      .required('Email is required'),
    password: yup
      .string()
      .min(6, 'Password must be 6 characters or longer')
      .max(12, 'Password can only be 12 characters')
      .required('Password is required'),
  }),
  // What to do on form submit ( graphql request, http request etc. )
  handleSubmit: (values, { setErrors, setSubmitting, resetForm }) => {
    setTimeout(() => {
      if (values.email === 'random@test.com') {
        setErrors({ email: 'That email is already taken' });
      } else {
        resetForm();
      }
      setSubmitting();
    }, 2000);
  },
})(SignUpForm);

const StyledForm = styled(FormikApp)`
  max-width: 500px;
  margin: 0 auto;
  padding: 10px;
  text-align: left;

  .form-input__wrapper {
    margin-bottom: 10px;

    .form-input {
      width: 100%;
      padding: 10px;
      font-size: 14px;
      margin-bottom: 5px;
      border: 1px solid rgb(191, 191, 191);
    }

    .form-error__msg {
      color: #ff3232;
    }
  }

  .form-submit__btn {
    width: 150px;
    padding: 6px 0px;
    font-size: 14px;
    cursor: pointer;
    background: #9640ff;
    color: white;
    border: none;
    box-shadow: -2px 4px 9px -5px rgba(133, 45, 240, 0.66);
  }

  .form-submit__btn:disabled {
    background: #cccccc;
    box-shadow: -2px 4px 9px -5px #cccccc;
  }

  label {
    color: #585858;
    font-size: 15px;
    display: flex;
  }
`;

export default StyledForm;
