import { DetailedHTMLProps, HTMLAttributes } from "react";
export interface ProgressBarProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLProgressElement>,
    HTMLProgressElement
  > {
  percentage: number;
}
