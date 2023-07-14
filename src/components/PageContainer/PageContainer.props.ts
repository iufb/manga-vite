import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
export interface PageContainerProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
}
