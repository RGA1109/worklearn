import { IconButton, InputAdornment, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import { useFormContext } from "react-hook-form";

interface UseFormPasswordInputProps {
  name: string;
  label?: string;
  required?: boolean;
}

const UseFormPasswordInput = ({ 
  name,
  label = "Password",
  required = false
}: UseFormPasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const { register, formState: { errors } } = useFormContext();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <TextField
      fullWidth
      {...register(name, { required: required ? "This field is required" : false })}
      type={showPassword ? "text" : "password"}
      label={label}
      required={required}
      error={!!errors[name]}
      helperText={errors[name]?.message as string}
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

export default UseFormPasswordInput; 