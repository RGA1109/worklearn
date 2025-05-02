import { Box } from "@mui/material";
import FormikForm from "./formikForm";
import ReactHookForm from "./reactHookForm";

const FormsContainer = () => {
  return (
    <Box sx={{ maxWidth: 400, mx: "auto", p: 2 }}>
      <FormikForm />
      <ReactHookForm />
    </Box>
  );
};

export default FormsContainer; 