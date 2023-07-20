import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
export interface PageContainerProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
  bgColor?: string;
  full?: boolean;
  centered?: boolean;
}
