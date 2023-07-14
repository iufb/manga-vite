import { DetailedHTMLProps, HTMLAttributes } from "react";
export interface AuthFormProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  type: "login" | "register";
}
