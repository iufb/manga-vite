import { DetailedHTMLProps, HTMLAttributes } from "react";
export interface FileInputProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  setFiles: (files: string[]) => void;
  label: string;
}
