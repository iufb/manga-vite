import { comicType } from "../../../types/comic.type";
import { HTMLMotionProps } from "framer-motion";
import { lastChapterType } from "../../../types/list.type";
export interface ComicCardProps extends HTMLMotionProps<"div"> {
  cover: string;
  id: string;
  chaptersCount: number;
  name: string;
  type?: comicType;
  lastChapter?: lastChapterType;
  createdAt?: string;
  comicLayout: "list" | "tile";
}
