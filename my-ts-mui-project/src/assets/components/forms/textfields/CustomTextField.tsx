import { TextField, TextFieldProps } from "@mui/material";
import { useField } from "formik";
import { UseFormRegister } from "react-hook-form";

interface FormValues {
  [key: string]: any;
}

interface CustomTextFieldProps extends Omit<TextFieldProps, 'name'> {
  name: string;
  register?: UseFormRegister<FormValues>;
  formik?: boolean;
}

const CustomTextField = ({ name, register, formik = false, ...props }: CustomTextFieldProps) => {
  const [field, meta] = useField(name);
  
  if (formik) {
    return (
      <TextField
        {...field}
        {...props}
        error={meta.touched && Boolean(meta.error)}
        helperText={meta.touched && meta.error}
      />
    );
  }

  if (register) {
    return (
      <TextField
        {...register(name)}
        {...props}
      />
    );
  }

  return <TextField name={name} {...props} />;
};

export default CustomTextField; 