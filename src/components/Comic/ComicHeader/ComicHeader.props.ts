import { DetailedHTMLProps, HTMLAttributes } from "react";
export interface ComicHeaderProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLHeadElement>, HTMLHeadElement> {
  title: string;
}
