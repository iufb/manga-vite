import { IComic } from "../comic.type";

export type addComicFormType = Omit<IComic, "imgCover" | "genres">;
