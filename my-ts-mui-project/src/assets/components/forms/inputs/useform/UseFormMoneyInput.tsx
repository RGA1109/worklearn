import { TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { useState, useEffect } from "react";

interface UseFormMoneyInputProps {
  name: string;
  label?: string;
  required?: boolean;
}

const UseFormMoneyInput = ({ 
  name,
  label = "Amount",
  required = false
}: UseFormMoneyInputProps) => {
  const { register, setValue, watch, formState: { errors } } = useFormContext();
  const [displayValue, setDisplayValue] = useState("");
  const fieldValue = watch(name);

  // Format number with commas and 2 decimal places
  const formatNumber = (value: string) => {
    // Remove all non-numeric characters except decimal point
    const numericValue = value.replace(/[^0-9.]/g, '');
    
    // Handle multiple decimal points
    const parts = numericValue.split('.');
    if (parts.length > 2) {
      return parts[0] + '.' + parts.slice(1).join('');
    }
    
    // Format the number
    const [whole, decimal] = parts;
    const formattedWhole = whole.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    
    if (decimal) {
      // Limit decimal to 2 places
      const limitedDecimal = decimal.slice(0, 2);
      return `${formattedWhole}.${limitedDecimal}`;
    }
    
    return formattedWhole;
  };

  // Convert formatted string back to number
  const parseNumber = (value: string) => {
    return parseFloat(value.replace(/,/g, '')) || 0;
  };

  useEffect(() => {
    // Initialize display value when field value changes
    if (fieldValue !== undefined && fieldValue !== null) {
      setDisplayValue(formatNumber(fieldValue.toString()));
    }
  }, [fieldValue]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    const formattedValue = formatNumber(newValue);
    setDisplayValue(formattedValue);
    
    // Update form value with parsed number
    const parsedValue = parseNumber(formattedValue);
    setValue(name, parsedValue);
  };

  const handleBlur = () => {
    // Ensure value has 2 decimal places on blur
    const parsedValue = parseNumber(displayValue);
    const formattedValue = parsedValue.toFixed(2);
    setDisplayValue(formatNumber(formattedValue));
    setValue(name, parsedValue);
  };

  return (
    <TextField
      fullWidth
      {...register(name, { required: required ? "This field is required" : false })}
      value={displayValue}
      onChange={handleChange}
      onBlur={handleBlur}
      label={label}
      required={required}
      error={!!errors[name]}
      helperText={errors[name]?.message as string}
      inputProps={{
        inputMode: 'decimal',
        pattern: '[0-9]*\\.?[0-9]*',
      }}
    />
  );
};

export default UseFormMoneyInput; 