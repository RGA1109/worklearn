import { Container, Typography, Box, Divider } from "@mui/material";
import LoginForm from "../components/forms/examples/LoginForm";
import MoneyForm from "../components/forms/examples/MoneyForm";

const ReactHookFormsPage = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        React Hook Form Examples
      </Typography>
      <Typography variant="body1" paragraph>
        This page demonstrates form implementations using React Hook Form.
      </Typography>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          Login Form
        </Typography>
        <Typography variant="body2" paragraph>
          A login form using React Hook Form with password visibility toggle.
        </Typography>
        <LoginForm />
      </Box>

      <Divider sx={{ my: 4 }} />

      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          Money Input
        </Typography>
        <Typography variant="body2" paragraph>
          A money input form using React Hook Form with number formatting.
        </Typography>
        <MoneyForm />
      </Box>
    </Container>
  );
};

export default ReactHookFormsPage; 