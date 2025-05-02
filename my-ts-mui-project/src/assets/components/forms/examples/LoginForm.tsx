import { Box, Button, TextField, Typography } from "@mui/material";
import { useForm, FormProvider } from "react-hook-form";
import UseFormPasswordInput from "../inputs/useform/UseFormPasswordInput";

interface LoginFormData {
  email: string;
  password: string;
}

const LoginForm = () => {
  const methods = useForm<LoginFormData>();
  const { register, handleSubmit, formState: { errors } } = methods;

  const onSubmit = (data: LoginFormData) => {
    console.log("Form submitted:", data);
  };

  return (
    <FormProvider {...methods}>
      <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ maxWidth: 400, mx: "auto", p: 2 }}>
        <Typography variant="h5" gutterBottom>
          Login
        </Typography>
        
        <TextField
          fullWidth
          label="Email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address"
            }
          })}
          error={!!errors.email}
          helperText={errors.email?.message}
          margin="normal"
          required
        />

        <UseFormPasswordInput
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
    </FormProvider>
  );
};

export default LoginForm; 