import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { Input, InputProps } from "./input";

type InputFieldProps<T extends FieldValues = FieldValues> = InputProps & {
  name: Path<T>;
  control: Control<T>;
};

export function InputField<T extends FieldValues = FieldValues>({
  name,
  control,
  ...props
}: InputFieldProps<T>): JSX.Element {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => <Input {...field} {...props} />}
    />
  );
}
