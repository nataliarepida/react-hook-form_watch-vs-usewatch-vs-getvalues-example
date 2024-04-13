import { useRenderCount } from "hooks/use-render-count";
import { ForwardedRef, forwardRef } from "react";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  invalid?: boolean;
  error?: string;
};

function InputBase(
  { label, id, type, name, error, invalid, ...props }: InputProps,
  ref: ForwardedRef<HTMLInputElement>
): JSX.Element {
  const count = useRenderCount();

  return (
    <div className="row">
      <div className="input-field col s9">
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
          aria-invalid={invalid}
          style={
            invalid
              ? {
                  borderColor: "#F44336",
                  boxShadow: "0 1px 0 0 #F44336",
                }
              : undefined
          }
          {...props}
        />
        {error ? (
          <span
            className="helper-text"
            style={invalid ? { color: "#F44336" } : undefined}
          >
            {error}
          </span>
        ) : null}
      </div>
      <div className="input-field col s3">
        <p>
          Renders: <span>{count}</span>
        </p>
      </div>
    </div>
  );
}

export const Input = forwardRef<HTMLInputElement, InputProps>(InputBase);
