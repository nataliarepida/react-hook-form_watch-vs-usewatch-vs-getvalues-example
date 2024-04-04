import { useRenderCount } from "hooks/use-render-count";
import { ForwardedRef, forwardRef } from "react";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

function InputBase(
  { label, id, type, name, ...props }: InputProps,
  ref: ForwardedRef<HTMLInputElement>
): JSX.Element {
  const count = useRenderCount();

  return (
    <div className="row">
      <div className="input-field col s6">
        {label ? (
          <label htmlFor={id ?? name ?? label} className="active">
            {label}
          </label>
        ) : null}
        <input
          ref={ref}
          id={id ?? name ?? label}
          className="validate"
          type={type ?? "text"}
          name={name}
          {...props}
        />
      </div>
      <div className="input-field col s6">
        <p>
          Renders: <span>{count}</span>
        </p>
      </div>
    </div>
  );
}

export const Input = forwardRef<HTMLInputElement, InputProps>(InputBase);
