import { DetailedHTMLProps, HTMLAttributes } from "react";
export interface VoteProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  commentId: string;
  votesUp: number;
  votesDown: number;
}
