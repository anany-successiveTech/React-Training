"use client";
import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { TextField, Button, Box, Typography } from "@mui/material";

// schema using yup library for validation;
const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),

  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .max(16, "Password should not be long")
    .matches(/[A-Z]/, "Must contain at least one uppercase letter")
    .matches(/[0-9]/, "Must contain at least one number")
    .matches(/[@$!%*?&#]/, "Must contain at least one special character"),

  phone: Yup.string()
    .required("Phone number is required")
    .matches(
      /^(\+?\d{1,3}[- ]?)?\d{10}$/,
      "Phone number must be valid (10 digits, optional country code)"
    ),
});

const FormikTextField = ({ name, label, type = "text" }) => (
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
          form.validateField(name);
        }}
        onBlur={form.handleBlur}
      />
    )}
  </Field>
);

export default function ComplexForm() {
  return (
    <div>
      <p style={{ textAlign: "center", margin: "2rem" }}>
        13. Install Yup. Define a Yup validation schema for a more complex form.
        Include validation rules for fields like email, password, and phone
        number. Ensure that error messages are displayed for each validation
        rule. Implement real-time validation feedback using Material-UI's
        TextField component. Show validation errors as the user types, and clear
        the errors when the input is valid.(Use Formik as well)
      </p>
      <Box
        sx={{
          maxWidth: 400,
          mx: "auto",
          mt: 5,
          p: 3,
          border: "1px solid #ccc",
          borderRadius: 2,
        }}
      >
        <Typography variant="h5" mb={3}>
          Register
        </Typography>

        <Formik
          initialValues={{ email: "", password: "", phone: "" }}
          validationSchema={validationSchema}
          validateOnChange={false}
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
              <FormikTextField
                name="password"
                label="Password"
                type="password"
              />
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
    </div>
  );
}
