import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
export interface ModalContainerProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
  center?: boolean;
  scroll?: boolean;
}
