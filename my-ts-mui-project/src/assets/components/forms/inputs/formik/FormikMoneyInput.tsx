import { TextField } from "@mui/material";
import { useField } from "formik";
import { useState, useEffect } from "react";

interface FormikMoneyInputProps {
  name: string;
  label?: string;
  required?: boolean;
}

const FormikMoneyInput = ({ 
  name,
  label = "Amount",
  required = false
}: FormikMoneyInputProps) => {
  const [field, meta, helpers] = useField(name);
  const [displayValue, setDisplayValue] = useState("");

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
    if (field.value !== undefined && field.value !== null) {
      setDisplayValue(formatNumber(field.value.toString()));
    }
  }, [field.value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    const formattedValue = formatNumber(newValue);
    setDisplayValue(formattedValue);
    
    // Update Formik field value with parsed number
    const parsedValue = parseNumber(formattedValue);
    helpers.setValue(parsedValue);
  };

  const handleBlur = () => {
    // Ensure value has 2 decimal places on blur
    const parsedValue = parseNumber(displayValue);
    const formattedValue = parsedValue.toFixed(2);
    setDisplayValue(formatNumber(formattedValue));
    helpers.setValue(parsedValue);
  };

  return (
    <TextField
      fullWidth
      name={name}
      value={displayValue}
      onChange={handleChange}
      onBlur={handleBlur}
      label={label}
      required={required}
      error={meta.touched && Boolean(meta.error)}
      helperText={meta.touched && meta.error}
      inputProps={{
        inputMode: 'decimal',
        pattern: '[0-9]*\\.?[0-9]*',
      }}
    />
  );
};

export default FormikMoneyInput; 