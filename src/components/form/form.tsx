import { useForm } from "react-hook-form";
import {
  FORM_FIELDS,
  FORM_FIELDS_LABELS,
  FORM_INITIAL_VALUES,
} from "./constants";
import { FormValues } from "./types";
import { InputField } from "components/input-field";

function Form(): JSX.Element {
  const { control } = useForm<FormValues>({
    defaultValues: FORM_INITIAL_VALUES,
  });

  return (
    <form className="col s12">
      <InputField
        name={FORM_FIELDS.first_name}
        label={FORM_FIELDS_LABELS.first_name}
        control={control}
      />

      <InputField
        name={FORM_FIELDS.last_name}
        label={FORM_FIELDS_LABELS.last_name}
        control={control}
      />

      <InputField
        name={FORM_FIELDS.email}
        label={FORM_FIELDS_LABELS.email}
        control={control}
      />

      <InputField
        name={FORM_FIELDS.telephone}
        label={FORM_FIELDS_LABELS.telephone}
        control={control}
      />

      <button type="submit" className="waves-effect waves-light btn">
        Submit
      </button>
    </form>
  );
}

export default Form;
