import { Control, useWatch } from "react-hook-form";
import { FormValues } from "./form";
import { FORM_FIELDS } from "./form/constants";
import { useRenderCount } from "hooks/use-render-count";

type ComponentWithUseWatchProps = {
  control: Control<FormValues>;
};

export function ComponentWithUseWatch({
  control,
}: ComponentWithUseWatchProps): JSX.Element {
  const count = useRenderCount();
  const value = useWatch({ control, name: FORM_FIELDS.last_name });

  return (
    <div className="row valign-wrapper">
      <div className="col s4">useWatch</div>
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
