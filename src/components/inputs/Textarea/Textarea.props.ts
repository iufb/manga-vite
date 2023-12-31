import { DetailedHTMLProps, HTMLAttributes } from "react";
export interface TextareaProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  label: string;
}
