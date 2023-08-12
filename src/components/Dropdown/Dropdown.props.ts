import { DetailedHTMLProps, HTMLAttributes } from "react";
export interface DropdownProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  values: string[];
  valueColor: string;
  selectedValue: string;
  selectValue: (value: string) => void;
}
