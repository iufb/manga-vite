import { DetailedHTMLProps, HTMLAttributes } from "react";
export interface InputProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  title: string;
  type?: "email" | "password" | "text" | "number";
}
