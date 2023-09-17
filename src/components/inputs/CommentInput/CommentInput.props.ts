import { DetailedHTMLProps, HTMLAttributes, SetStateAction } from "react";
export interface CommentInputProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  commentLevel?: number;
  parentComment?: string;
  rootId?: string;
  setShowInput?: React.Dispatch<SetStateAction<boolean>>;
  type: "comic" | "page";
}
