'use client'
import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Box, Typography } from '@mui/material';

// Yup validation schema
const validationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),

  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .matches(/[A-Z]/, 'Must contain at least one uppercase letter')
    .matches(/[0-9]/, 'Must contain at least one number')
    .matches(/[@$!%*?&#]/, 'Must contain at least one special character'),

  phone: Yup.string()
    .required('Phone number is required')
    .matches(
      /^(\+?\d{1,3}[- ]?)?\d{10}$/,
      'Phone number must be valid (10 digits, optional country code)'
    ),
});

const FormikTextField = ({ name, label, type = 'text' }) => (
  <Field name={name}>
    {({ field, form }) => (
      <TextField
        {...field}
        type={type}
        label={label}
        fullWidth
        margin="normal"
        error={Boolean(form.touched[name] && form.errors[name])}
        helperText={form.touched[name] && form.errors[name]}
        onChange={(e) => {
          form.handleChange(e);
          // trigger validation on change for real-time feedback
          form.validateField(name);
        }}
        onBlur={form.handleBlur}
      />
    )}
  </Field>
);

export default function ComplexForm() {
  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 5, p: 3, border: '1px solid #ccc', borderRadius: 2 }}>
      <Typography variant="h5" mb={3}>
        Register
      </Typography>

      <Formik
        initialValues={{ email: '', password: '', phone: '' }}
        validationSchema={validationSchema}
        validateOnChange={false} // We'll manually trigger validation on change
        validateOnBlur={true}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
          resetForm();
        }}
      >
        {({ handleSubmit, isSubmitting }) => (
          <Form onSubmit={handleSubmit} noValidate>
            <FormikTextField name="email" label="Email" />
            <FormikTextField name="password" label="Password" type="password" />
            <FormikTextField name="phone" label="Phone Number" />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              disabled={isSubmitting}
              sx={{ mt: 3 }}
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
}
