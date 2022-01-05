import React from 'react'
import { Field as FormikField, FieldAttributes } from 'formik'

export default function Field(props: FieldAttributes<any>) {
  return (
    <FormikField
      {...props}
      className={`p-2 bg-gray-900 border border-gray-700 shadow-2xl outline-none focus:border-blue-500 ${props.className}`}
    />
  )
}