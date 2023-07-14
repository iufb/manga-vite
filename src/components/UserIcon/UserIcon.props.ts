import { DetailedHTMLProps, HTMLAttributes } from "react";
export interface UserIconProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  avatar: string | undefined;
  width: number;
  height: number;
  className?: string;
}
