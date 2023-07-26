import { DetailedHTMLProps, HTMLAttributes } from "react";
export interface SelectProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {
  items: string[] | number[];
  currentValue?: string;
}
