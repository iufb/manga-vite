import { IComic } from "@/types/types";
import { DetailedHTMLProps, HTMLAttributes } from "react";
export interface ComicSidebarProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  comic: IComic | null;
}
