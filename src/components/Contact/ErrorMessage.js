import React from 'react';
import { ErrorMessage as FormikErrorMessage } from 'formik';

export default function ErrorMessage({ name, children }) {
  return (
    <FormikErrorMessage
      component="span"
      name={name}
      className="ml-2 text-red-500 text-sm normal-case"
    >
      {children}
    </FormikErrorMessage>
  );
}