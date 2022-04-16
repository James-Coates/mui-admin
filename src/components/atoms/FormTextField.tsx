import { TextField, TextFieldProps } from "@mui/material";
import React from "react";
import { Control, Controller, FieldValue, FieldValues } from "react-hook-form";

type FormTextFieldProps = TextFieldProps & {
  control: Control<any, any>;
};

export default function FormTextField({
  name = "",
  control,
  ...rest
}: FormTextFieldProps) {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({
        field: { onChange, onBlur, value, name, ref },
        fieldState,
      }) => (
        <TextField
          value={value}
          onChange={onChange} // send value to hook form
          onBlur={onBlur} // notify when input is touched
          inputRef={ref} // wire up the input ref
          {...rest}
        />
      )}
    />
  );
}
