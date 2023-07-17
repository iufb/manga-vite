import {
  DetailedHTMLProps,
  Dispatch,
  HTMLAttributes,
  SetStateAction,
} from "react";
export interface MultiSelectProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  items: string[];
  title: string;
  state: string[];
  setState: Dispatch<SetStateAction<string[]>>;
}
