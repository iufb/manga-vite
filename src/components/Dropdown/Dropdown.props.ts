import { DetailedHTMLProps, HTMLAttributes } from "react";
import { listType } from "../../types/list.type";
export interface DropdownProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  values: listType[] | string[];
  icon: JSX.Element;
  height: number;
  valueColor?: string;
  selectedValue: string;
  selectValue: (value: string) => void;
}
