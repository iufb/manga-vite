import { useRef, useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { SortProps } from "./Sort.props";
import { BiSortDown, BiSortUp } from "react-icons/bi";
import { useAppSelector } from "../../redux/hooks";
import { SortMenu } from "./SortMenu/SortMenu";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";

export const Sort = ({ className, ...props }: SortProps): JSX.Element => {
  const [isVisible, setIsVisible] = useState(false);
  const { label, direction } = useAppSelector((state) => state.sort);
  const menuRef = useRef<HTMLUListElement>(null);
  useOnClickOutside(menuRef, () => setIsVisible(false));
  return (
    <div
      className={`${className} relative  w-full max-w-[250px] justify-end `}
      {...props}
    >
      <span
        onClick={() => setIsVisible(true)}
        className="cursor-pointer flex gap-1 center "
      >
        {direction == "desc" ? <BiSortDown /> : <BiSortUp />}
        {label}
        <AiOutlineDown />
      </span>
      {isVisible && <SortMenu ref={menuRef} />}
    </div>
  );
};
