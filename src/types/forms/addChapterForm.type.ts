import { chapterType } from "../chapter.type";

export type addChapterFormType = Omit<
  chapterType,
  "_id" | "pages" | "createdAt" | "comicId"
>;
