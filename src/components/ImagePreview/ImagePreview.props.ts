import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
export interface ImagePreviewProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  width?: number;
  height?: number;
  fill?: boolean;
  src: string | undefined;
  children?: ReactNode;
  deleteImage?: () => void;
  local?: boolean;
}
