import { DetailedHTMLProps, HTMLAttributes } from "react";
import { updateChapterType } from "../../../types/chapter.type";
export interface UpdatesItemProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  chapter: updateChapterType;
}
