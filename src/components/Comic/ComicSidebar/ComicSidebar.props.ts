import { DetailedHTMLProps, HTMLAttributes } from "react";
import { IComic } from "../../../types/comic.type";
export interface ComicSidebarProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  comic: IComic | null;
}
