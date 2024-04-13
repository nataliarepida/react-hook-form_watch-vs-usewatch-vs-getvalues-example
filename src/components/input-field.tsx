import { Control, FieldValues, Path, useController } from "react-hook-form";
import { Input, InputProps } from "./input";

type InputFieldProps<T extends FieldValues = FieldValues> = InputProps & {
  name: Path<T>;
  control?: Control<T>;
};

export function InputField<T extends FieldValues = FieldValues>({
  name,
  control,
  required,
  ...props
}: InputFieldProps<T>): JSX.Element {
  const {
    field,
    fieldState: { invalid, error },
  } = useController({ name, control, rules: { required } });

  return (
    <Input
      {...field}
      {...props}
      invalid={invalid}
      required={required}
      error={error?.message}
    />
  );
}
