import { DetailedHTMLProps, HTMLAttributes } from "react";
import { IComic } from "../../../types/comic.type";
export interface ComicInfoProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  comic: IComic | null;
}
