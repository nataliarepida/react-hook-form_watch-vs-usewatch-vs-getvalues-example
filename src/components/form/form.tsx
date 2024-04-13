import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  FORM_FIELDS,
  FORM_FIELDS_LABELS,
  FORM_INITIAL_VALUES,
} from "./constants";
import { FormValues } from "./types";
import { InputField } from "components/input-field";

const schema = yup
  .object()
  .shape({
    [FORM_FIELDS.first_name]: yup.string().required().defined(),
    [FORM_FIELDS.last_name]: yup.string().defined(),
    [FORM_FIELDS.country]: yup.string().defined(),
    [FORM_FIELDS.telephone]: yup.string().defined(),
  })
  .required();

function Form(): JSX.Element {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: FORM_INITIAL_VALUES,
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormValues) => console.log("submit", data);

  return (
    <form className="col s12" onSubmit={handleSubmit(onSubmit)}>
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
        name={FORM_FIELDS.country}
        label={FORM_FIELDS_LABELS.country}
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
