"use client";

import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {
  TextField,
  Button,
  Box,
  Typography,
  Alert,
  List,
  ListItem,
} from "@mui/material";

// Yup validation schema for checking the entered input values from the user.
const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),

  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),

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

const SubmitForm = () => {
  const [submitErrors, setSubmitErrors] = useState([]);

  return (
    <div>
      <p style={{ textAlign: "center", margin: "2rem" }}>
        14. Create a new form and Implement form submission handling. Ensure that
        the form cannot be submitted if there are validation errors. Display a
        summary of errors if the user attempts to submit an invalid form.
      </p>
      <Box
        sx={{
          maxWidth: 450,
          mx: "auto",
          mt: 5,
          p: 3,
          border: "1px solid #ccc",
          borderRadius: 2,
        }}
      >
        <Typography variant="h5" mb={3}>
          New Form
        </Typography>

        <Formik
          initialValues={{ email: "", password: "", phone: "" }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setSubmitErrors([]);
            alert(
              "Form submitted successfully:\n" + JSON.stringify(values, null, 2)
            );
            setSubmitting(false);
            resetForm();
          }}
        >
          {({ handleSubmit, errors, touched, isSubmitting, validateForm }) => {
            const handleFormSubmit = async (e) => {
              e.preventDefault();
              const formErrors = await validateForm();

              if (Object.keys(formErrors).length > 0) {
                setSubmitErrors(Object.values(formErrors));
              } else {
                setSubmitErrors([]);
                handleSubmit();
              }
            };

            return (
              <Form noValidate onSubmit={handleFormSubmit}>
                {/* Showing summary of errors on submit attempt */}
                {submitErrors.length > 0 && (
                  <Alert severity="error" sx={{ mb: 2 }}>
                    <Typography variant="subtitle1">
                      Please fix these errors:
                    </Typography>
                    <List dense>
                      {submitErrors.map((err, idx) => (
                        <ListItem key={idx} sx={{ pl: 2 }}>
                          - {err}
                        </ListItem>
                      ))}
                    </List>
                  </Alert>
                )}

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
            );
          }}
        </Formik>
      </Box>
    </div>
  );
};

export default SubmitForm;
