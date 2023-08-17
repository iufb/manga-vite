import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
export interface ComicsGridProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
}
