import { Input, InputProps } from "@mui/material";
import { useField } from "formik";
import { UseFormRegister } from "react-hook-form";

interface FormValues {
  [key: string]: any;
}

interface CustomInputProps extends Omit<InputProps, 'name'> {
  name: string;
  register?: UseFormRegister<FormValues>;
  formik?: boolean;
}

const CustomInput = ({ name, register, formik = false, ...props }: CustomInputProps) => {
  const [field, meta] = useField(name);
  
  if (formik) {
    return (
      <Input
        {...field}
        {...props}
        error={meta.touched && Boolean(meta.error)}
      />
    );
  }

  if (register) {
    return (
      <Input
        {...register(name)}
        {...props}
      />
    );
  }

  return <Input name={name} {...props} />;
};

export default CustomInput; 