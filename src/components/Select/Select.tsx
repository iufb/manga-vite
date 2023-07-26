import { ForwardedRef, forwardRef } from "react";
import { SelectProps } from "./Select.props";

export const Select = forwardRef(function Select(
  { className, items, currentValue, ...props }: SelectProps,
  ref: ForwardedRef<HTMLSelectElement>
): JSX.Element {
  return (
    <select
      className={`${className} min-w-[130px] border border-gray-300    select  select-text h-[26px] flex-1`}
      {...props}
      value={currentValue}
      ref={ref}
    >
      {items.map((item) => (
        <option key={item} className={`bg-gray-900  text-customWhite`}>
          {item}
        </option>
      ))}
    </select>
  );
});
