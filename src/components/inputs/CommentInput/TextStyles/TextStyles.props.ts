import { DetailedHTMLProps, HTMLAttributes, SetStateAction } from "react";
export interface TextStylesProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  setComment: React.Dispatch<SetStateAction<string>>;
  comment: string;
}
