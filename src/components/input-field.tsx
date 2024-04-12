import { Control, FieldValues, Path, useController } from "react-hook-form";
import { Input, InputProps } from "./input";

type InputFieldProps<T extends FieldValues = FieldValues> = InputProps & {
  name: Path<T>;
  control?: Control<T>;
};

export function InputField<T extends FieldValues = FieldValues>({
  name,
  control,
  ...props
}: InputFieldProps<T>): JSX.Element {
  const { field } = useController({ name, control });

  return <Input {...field} {...props} />;
}
