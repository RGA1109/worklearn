import { FormControl, InputLabel, MenuItem, Select, SelectProps } from "@mui/material";
import { useField } from "formik";
import { UseFormRegister } from "react-hook-form";

interface FormValues {
  [key: string]: any;
}

interface Option {
  value: string | number;
  label: string;
}

interface CustomSelectProps extends Omit<SelectProps, 'name'> {
  name: string;
  label: string;
  options: Option[];
  register?: UseFormRegister<FormValues>;
  formik?: boolean;
}

const CustomSelect = ({ name, label, options, register, formik = false, ...props }: CustomSelectProps) => {
  const [field, meta] = useField(name);
  
  if (formik) {
    return (
      <FormControl fullWidth error={meta.touched && Boolean(meta.error)}>
        <InputLabel>{label}</InputLabel>
        <Select
          {...field}
          {...props}
          label={label}
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  }

  if (register) {
    return (
      <FormControl fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select
          {...register(name)}
          {...props}
          label={label}
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  }

  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select name={name} label={label} {...props}>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CustomSelect; 