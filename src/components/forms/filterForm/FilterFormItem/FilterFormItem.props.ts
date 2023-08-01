import { DetailedHTMLProps, HTMLAttributes } from "react";
import { filterFormType } from "../../../../types/forms/filterForm.type";
import { UseFormRegister } from "react-hook-form";
export interface FilterFormItemProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  name: string;
  values: string[];
  register: UseFormRegister<filterFormType>;
  registerValue: keyof filterFormType;
}
