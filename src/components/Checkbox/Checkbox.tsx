import { ForwardedRef, forwardRef } from "react";
import { CheckboxProps } from "./Checkbox.props";

export const Checkbox = forwardRef(
  (
    { className, label, ...props }: CheckboxProps,
    ref: ForwardedRef<HTMLInputElement>
  ): JSX.Element => {
    return (
      <label
        className={`label justify-normal gap-2 cursor-pointer  ${className}`}
      >
        <input
          type="checkbox"
          value={label}
          className="checkbox checkbox-sm"
          {...props}
          ref={ref}
        />
        <span className="label-text">{label}</span>
      </label>
    );
  }
);
