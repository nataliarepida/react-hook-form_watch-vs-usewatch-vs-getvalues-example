import { UseFormWatch } from "react-hook-form";
import { FormValues } from "./form";
import { FORM_FIELDS } from "./form/constants";
import { useRenderCount } from "hooks/use-render-count";

type ComponentWithWatchProps = {
  watch: UseFormWatch<FormValues>;
};

export function ComponentWithWatch({
  watch,
}: ComponentWithWatchProps): JSX.Element {
  const count = useRenderCount();
  const value = watch(FORM_FIELDS.first_name);

  return (
    <div className="row valign-wrapper">
      <div className="col s4">watch</div>
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
