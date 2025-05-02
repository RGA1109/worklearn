import { Box, Button, Typography } from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikMoneyInput from "../inputs/formik/FormikMoneyInput";

interface MoneyFormData {
  amount: number;
}

const validationSchema = Yup.object({
  amount: Yup.number()
    .required("Amount is required")
    .min(0, "Amount must be greater than or equal to 0"),
});

const FormikMoneyForm = () => {
  const initialValues: MoneyFormData = {
    amount: 0,
  };

  const handleSubmit = (values: MoneyFormData) => {
    console.log("Form submitted:", values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values }) => (
        <Form>
          <Box sx={{ maxWidth: 400, mx: "auto", p: 2 }}>
            <Typography variant="h5" gutterBottom>
              Money Input Example (Formik)
            </Typography>
            
            <FormikMoneyInput
              name="amount"
              label="Amount"
              required
            />

            <Typography variant="body1" sx={{ mt: 2 }}>
              Raw value: {values.amount}
            </Typography>

            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{ mt: 2 }}
            >
              Submit
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default FormikMoneyForm; 