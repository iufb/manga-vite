import { AiOutlineDown, AiOutlineFolder } from "react-icons/ai";
import { DropdownProps } from "./Dropdown.props";
import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";
export const Dropdown = ({
  values,
  selectedValue,
  selectValue,
  valueColor,
  className,
  ...props
}: DropdownProps): JSX.Element => {
  const [show, setShow] = useState<boolean>(false);
  const variants = {
    visible: {
      height: 135,
      marginBottom: 20,
      padding: 5,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.01,
      },
    },
    hidden: {
      padding: 0,
      height: 0,

      marginBottom: 0,
    },
  };
  const variantsChildren = {
    visible: {
      opacity: 1,
      height: 30,
    },
    hidden: {
      opacity: 0,
      height: 0,
    },
  };
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, () => setShow(false));
  return (
    <div className={` ${className} w-full dropdown  `} {...props} ref={ref}>
      <label
        tabIndex={0}
        onClick={() => setShow((prev) => !prev)}
        className={`${valueColor} text-customWhite  w-full center py-1  rounded-md cursor-pointer flex px-3  `}
      >
        <AiOutlineFolder />
        <span className="flex-1 center capitalize">{selectedValue}</span>
        <AiOutlineDown />
      </label>
      <AnimatePresence>
        <motion.ul
          variants={variants}
          initial={show ? "visible" : "hidden"}
          animate={show ? "visible" : "hidden"}
          tabIndex={0}
          className={` dropdown-content  bg-gray-200 z-[1]  menu-md  mt-2 shadow  rounded-box w-full`}
        >
          {values.map((value) => (
            <motion.li
              variants={variantsChildren}
              key={value}
              onClick={() => {
                selectValue(value);
                setShow(false);
              }}
              className="capitalize cursor-pointer  hover:bg-gray-400 center justify-start hover:text-customWhite rounded-md"
            >
              <a>{value}</a>
            </motion.li>
          ))}
        </motion.ul>
        )
      </AnimatePresence>
    </div>
  );
};
