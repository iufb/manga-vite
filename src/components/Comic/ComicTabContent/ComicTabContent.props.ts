import { DetailedHTMLProps, HTMLAttributes } from "react";
export interface ComicTabContentProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  description: string;
  genres: string[];
  id: string;
}
