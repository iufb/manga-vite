import { DetailedHTMLProps, HTMLAttributes } from "react";
export interface CommentProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  type: "comic" | "page";
}
