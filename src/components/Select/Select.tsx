import { ForwardedRef, forwardRef } from "react";
import { SelectProps } from "./Select.props";

export const Select = forwardRef(function Select(
  { className, items, defaultVal, currentValue, ...props }: SelectProps,
  ref: ForwardedRef<HTMLSelectElement>
): JSX.Element {
  return (
    <select
      className={`${className} select select-bordered select-md flex-1`}
      {...props}
      ref={ref}
    >
      <option disabled>{defaultVal}</option>
      {items.map((item, idx) => (
        <option key={item} value={item} selected={currentValue == idx + 1}>
          {item}
        </option>
      ))}
    </select>
  );
});
