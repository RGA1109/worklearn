import { Container, Typography, Box, Divider, Tabs, Tab } from "@mui/material";
import { useState } from "react";
import LoginForm from "../components/forms/examples/LoginForm";
import FormikLoginForm from "../components/forms/examples/FormikLoginForm";
import MoneyForm from "../components/forms/examples/MoneyForm";
import FormikMoneyForm from "../components/forms/examples/FormikMoneyForm";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`form-tabpanel-${index}`}
      aria-labelledby={`form-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

const FormsPage = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Form Examples
      </Typography>
      <Typography variant="body1" paragraph>
        This page demonstrates various form implementations using Formik and React Hook Form.
      </Typography>

      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={tabValue} onChange={handleTabChange} aria-label="form tabs">
          <Tab label="React Hook Form" />
          <Tab label="Formik" />
        </Tabs>
      </Box>

      <TabPanel value={tabValue} index={0}>
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
      </TabPanel>

      <TabPanel value={tabValue} index={1}>
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
      </TabPanel>
    </Container>
  );
};

export default FormsPage; 