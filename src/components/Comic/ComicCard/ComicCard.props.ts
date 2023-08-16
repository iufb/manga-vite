import { LinkProps } from "react-router-dom";
import { comicType } from "../../../types/comic.type";
export interface ComicCardProps extends LinkProps {
  cover: string;
  name: string;
  type?: comicType;
}
