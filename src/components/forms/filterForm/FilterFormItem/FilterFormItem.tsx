import { Checkbox } from "../../../Checkbox/Checkbox";
import { FilterFormItemProps } from "./FilterFormItem.props";

export const FilterFormItem = ({
  className,
  register,
  name,
  values,
  registerValue,
}: FilterFormItemProps): JSX.Element => {
  return (
    <div className={`${className}`}>
      <span>{name}</span>
      <div className="grid grid-cols-2">
        {values.map((type) => (
          <Checkbox label={type} key={type} {...register(registerValue)} />
        ))}
      </div>
    </div>
  );
};
