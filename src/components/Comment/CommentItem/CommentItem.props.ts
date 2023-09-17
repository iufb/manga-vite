import { DetailedHTMLProps, HTMLAttributes } from "react";
import { commentType } from "../../../types/comment.type";
export interface CommentItemProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  comment: commentType;
  replies?: commentType[];
  type: "comic" | "page";
}
