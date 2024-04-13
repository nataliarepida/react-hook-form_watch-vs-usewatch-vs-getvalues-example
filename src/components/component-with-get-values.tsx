import { UseFormGetValues } from "react-hook-form";
import { FormValues } from "./form";
import { FORM_FIELDS } from "./form/constants";
import { useRenderCount } from "hooks/use-render-count";

type ComponentWithGetValuesProps = {
  getValues: UseFormGetValues<FormValues>;
};

export function ComponentWithGetValues({
  getValues,
}: ComponentWithGetValuesProps): JSX.Element {
  const count = useRenderCount();
  const value = getValues(FORM_FIELDS.country);

  return (
    <div className="row valign-wrapper">
      <div className="col s4">
        getValues <br />
        <button
          type="button"
          onClick={() =>
            console.log(
              "country value with getValues",
              JSON.stringify(getValues(FORM_FIELDS.country), null, 2)
            )
          }
        >
          get values
        </button>
      </div>
      <div className="col s5">
        <pre className="teal-text text-darken-3">
          {JSON.stringify(value, null, 2)}
        </pre>
      </div>
      <div className="col s3">
        Renders: <span>{count}</span>
      </div>
    </div>
  );
}
