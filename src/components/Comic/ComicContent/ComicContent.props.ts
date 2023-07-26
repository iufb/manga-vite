import { DetailedHTMLProps, HTMLAttributes } from "react";
import { IComic } from "../../../types/comic.type";
export interface ComicContentProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  comic: IComic;
}
