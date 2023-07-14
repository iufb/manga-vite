import { ForwardedRef, forwardRef } from "react";
import { InputProps } from "./Input.props";

export const Input = forwardRef(function Input(
  { className, title, type = "text", ...props }: InputProps,
  ref: ForwardedRef<HTMLInputElement>
): JSX.Element {
  return (
    <label htmlFor={title} className={`input-group ${className}`}>
      <span className="text-md mobile:text-sm text-indigoGrey ">{title}</span>
      <input
        {...props}
        min={0}
        id={title}
        ref={ref}
        type={type}
        className={`input input-bordered ${className}  flex-1 mobile:pr-0 focus:outline-indigoGrey`}
      />
    </label>
  );
});
