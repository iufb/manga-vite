import { ChangeEvent, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { MultiSelectProps } from "./MultiSelect.props";

export const MultiSelect = ({
  items,
  title,
  className,
  state,
  setState,
  ...props
}: MultiSelectProps): JSX.Element => {
  const [isFocus, setIsFocus] = useState(false);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedValue = e.target.value;
    const selectedOptions = items.find((item) => item == selectedValue);
    if (selectedOptions) {
      setState([...state, selectedOptions]);
      e.target.value = "";
    }
  };
  const handleDisabled = (item: string) => {
    return state.findIndex((value) => value == item) !== -1;
  };
  const handleDelete = (item: string) => {
    setState([...state.filter((value) => value !== item)]);
  };
  return (
    <div
      className={`flex flex-col ${className} border border-gray-300`}
      {...props}
    >
      <div
        className={`flex ${
          isFocus && "border"
        } border-indigoGrey p-2 rounded-md  `}
      >
        {state.length > 0 && (
          <div className="flex  gap-2 top-2 px-2  flex-wrap max-w-[400px] ">
            {state.map((value, idx) => (
              <div
                key={idx}
                className="bg-indigoGrey rounded-md text-customWhite cursor-pointer p-1 flex items-center  gap-2 "
              >
                {value}
                <AiOutlineClose onClick={() => handleDelete(value)} />
              </div>
            ))}
          </div>
        )}
        <input
          list="select"
          placeholder={title}
          onChange={handleChange}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          className={`  flex-1 w-full pl-2 focus:outline-none py-2 h-fit my-auto border border-gray-300`}
        />
      </div>
      <datalist id="select">
        {items.map((item) => (
          <option key={item} disabled={handleDisabled(item)}>
            {item}
          </option>
        ))}
      </datalist>
    </div>
  );
};
