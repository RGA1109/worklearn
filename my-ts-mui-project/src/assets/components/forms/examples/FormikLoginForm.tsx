import { Box, Button, TextField, Typography } from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import FormikPasswordInput from "../inputs/formik/FormikPasswordInput";

interface LoginFormData {
  email: string;
  password: string;
}

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
});

const FormikLoginForm = () => {
  const initialValues: LoginFormData = {
    email: "",
    password: "",
  };

  const handleSubmit = (values: LoginFormData) => {
    console.log("Form submitted:", values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form>
          <Box sx={{ maxWidth: 400, mx: "auto", p: 2 }}>
            <Typography variant="h5" gutterBottom>
              Login
            </Typography>
            
            <Field
              as={TextField}
              fullWidth
              name="email"
              label="Email"
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
              margin="normal"
              required
            />

            <FormikPasswordInput
              name="password"
              required
            />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{ mt: 2 }}
            >
              Login
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default FormikLoginForm; 