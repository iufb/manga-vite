import { CheckboxProps } from "./Checkbox.props";

export const Checkbox = ({
  className,
  label,
  ...props
}: CheckboxProps): JSX.Element => {
  return (
    <label
      className={`label justify-normal gap-2 cursor-pointer  ${className}`}
    >
      <input type="checkbox" className="checkbox checkbox-sm" {...props} />
      <span className="label-text">{label}</span>
    </label>
  );
};
