import { DetailedHTMLProps, HTMLAttributes } from "react";
export interface UserMenuModalProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  logout: () => void;
}
