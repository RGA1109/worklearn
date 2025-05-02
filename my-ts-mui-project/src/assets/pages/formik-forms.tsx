import { Container, Typography, Box, Divider } from "@mui/material";
import FormikLoginForm from "../components/forms/examples/FormikLoginForm";
import FormikMoneyForm from "../components/forms/examples/FormikMoneyForm";

const FormikFormsPage = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Formik Form Examples
      </Typography>
      <Typography variant="body1" paragraph>
        This page demonstrates form implementations using Formik.
      </Typography>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          Login Form
        </Typography>
        <Typography variant="body2" paragraph>
          A login form using Formik with password visibility toggle.
        </Typography>
        <FormikLoginForm />
      </Box>

      <Divider sx={{ my: 4 }} />

      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          Money Input
        </Typography>
        <Typography variant="body2" paragraph>
          A money input form using Formik with number formatting.
        </Typography>
        <FormikMoneyForm />
      </Box>
    </Container>
  );
};

export default FormikFormsPage; 