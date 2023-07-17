import { IComic } from "@/types/types";
import { DetailedHTMLProps, HTMLAttributes } from "react";
export interface ComicInfoProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  comic: IComic | null;
}
