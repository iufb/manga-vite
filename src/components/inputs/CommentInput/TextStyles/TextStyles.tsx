import { BsTypeBold } from "react-icons/bs";
import { TextStylesProps } from "./TextStyles.props";
import {
  AiOutlineItalic,
  AiOutlineStrikethrough,
  AiOutlineUnderline,
} from "react-icons/ai";
import { useState } from "react";
interface IStyles {
  icon: JSX.Element;
  name: styleType;
  startTag: string;
  closeTag: string;
}
const styles: IStyles[] = [
  {
    icon: <BsTypeBold />,
    name: "bold",
    startTag: "<b>",
    closeTag: "</b>",
  },
  {
    icon: <AiOutlineItalic />,
    name: "italic",
    startTag: "<i>",
    closeTag: "</i>",
  },
  {
    icon: <AiOutlineUnderline />,
    name: "underline",
    startTag: "<u>",
    closeTag: "</u>",
  },
  {
    icon: <AiOutlineStrikethrough />,
    name: "linetrought",
    startTag: "<s>",
    closeTag: "</s>",
  },
];
type styleType = "bold" | "italic" | "underline" | "linetrought" | "blockquote";
type selectedType = { style: styleType; status: "active" | "deactive" };
export const TextStyles = ({
  className,
  comment,
  setComment,
  ...props
}: TextStylesProps): JSX.Element => {
  const [selected, setSelected] = useState<selectedType[]>([
    { style: "bold", status: "deactive" },
    { style: "italic", status: "deactive" },
    { style: "underline", status: "deactive" },
    { style: "linetrought", status: "deactive" },
    { style: "blockquote", status: "deactive" },
  ]);
  const changeControlStatus = (value: selectedType) => {
    return selected.map((s) => {
      if (s.style == value.style) {
        return { style: value.style, status: value.status };
      }
      return s;
    });
  };
  const getControlStatus = (name: styleType) => {
    return selected.find((s) => s.style == name)?.status;
  };

  const setControls = (
    style: styleType,
    startTag: string,
    closeTag: string
  ) => {
    if (getControlStatus(style) == "active") {
      setSelected(changeControlStatus({ style, status: "deactive" }));
      setComment(comment + closeTag);
    } else {
      setSelected(changeControlStatus({ style, status: "active" }));
      setComment(comment + startTag);
    }
  };

  return (
    <div className={`${className} flex gap-1 text-2xl`} {...props}>
      {styles.map(({ icon, name, startTag, closeTag }) => (
        <div
          className={` p-1 ${
            getControlStatus(name) == "active" &&
            "bg-gray-600 rounded-full text-customWhite"
          }`}
          key={name}
          onClick={() => setControls(name, startTag, closeTag)}
        >
          {icon}
        </div>
      ))}
    </div>
  );
};
