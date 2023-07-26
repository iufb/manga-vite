import { ForwardedRef, forwardRef } from "react";
import { TextareaProps } from "./Textarea.props";

export const Textarea = forwardRef(function Textarea(
  { className, label, ...props }: TextareaProps,
  ref: ForwardedRef<HTMLTextAreaElement>
): JSX.Element {
  return (
    <div className="col gap-1">
      <label
        htmlFor={label}
        className="bg-[#e5e6e6] px-2 py-1 w-fit rounded-md text-indigoGrey text-sm"
      >
        {label}
      </label>
      <textarea
        id={label}
        className={`${className} textarea textarea-bordered textarea-md`}
        {...props}
        ref={ref}
      />
    </div>
  );
});
