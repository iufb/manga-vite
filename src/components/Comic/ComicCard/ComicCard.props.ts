import { comicType } from "../../../types/comic.type";
import { HTMLMotionProps } from "framer-motion";
export interface ComicCardProps extends HTMLMotionProps<"div"> {
  cover: string;
  id: string;
  chaptersCount: number;
  name: string;
  type?: comicType;
  lastChapter?: number;
  createdAt?: string;
  comicLayout: "list" | "tile";
}
