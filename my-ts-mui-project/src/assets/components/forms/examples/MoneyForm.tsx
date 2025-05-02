import { Box, Button, Typography } from "@mui/material";
import { useForm, FormProvider } from "react-hook-form";
import UseFormMoneyInput from "../inputs/useform/UseFormMoneyInput";

interface MoneyFormData {
  amount: number;
}

const MoneyForm = () => {
  const methods = useForm<MoneyFormData>();
  const { handleSubmit, watch } = methods;
  const amount = watch("amount");

  const onSubmit = (data: MoneyFormData) => {
    console.log("Form submitted:", data);
  };

  return (
    <FormProvider {...methods}>
      <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ maxWidth: 400, mx: "auto", p: 2 }}>
        <Typography variant="h5" gutterBottom>
          Money Input Example
        </Typography>
        
        <UseFormMoneyInput
          name="amount"
          label="Amount"
          required
        />

        <Typography variant="body1" sx={{ mt: 2 }}>
          Raw value: {amount}
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
    </FormProvider>
  );
};

export default MoneyForm; 