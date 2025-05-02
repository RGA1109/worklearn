import { IconButton, InputAdornment, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import { useField } from "formik";

interface FormikPasswordInputProps {
  name: string;
  label?: string;
  required?: boolean;
}

const FormikPasswordInput = ({ 
  name,
  label = "Password",
  required = false
}: FormikPasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [field, meta] = useField(name);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <TextField
      fullWidth
      {...field}
      type={showPassword ? "text" : "password"}
      label={label}
      required={required}
      error={meta.touched && Boolean(meta.error)}
      helperText={meta.touched && meta.error}
      slotProps={{
        input: {
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        },
      }}
    />
  );
};

export default FormikPasswordInput; 