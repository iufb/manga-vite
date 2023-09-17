import { DetailedHTMLProps, HTMLAttributes } from "react";
export interface CommentHeaderProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  type: "comic" | "page";
}
