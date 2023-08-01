import { HTMLMotionProps } from "framer-motion";
import { IComic } from "../../../types/comic.type";
export interface FilterFormProps extends HTMLMotionProps<"form"> {
  setComics: (comics: IComic[]) => void;
}
