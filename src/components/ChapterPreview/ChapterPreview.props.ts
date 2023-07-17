import { DetailedHTMLProps, HTMLAttributes } from "react";
export interface ChapterPreviewProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  pages: string[] | null;
  setFiles: (files: string[]) => void;
}
