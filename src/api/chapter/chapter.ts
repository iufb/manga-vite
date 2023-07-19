import { createChapterType } from "../../types/chapter.type";
import { instance } from "../axios-client";

export const getChapterByComic = (id: string) => {
  return instance().get(`chapter/byComic/${id}`);
};
export const createChapter = (chapter: createChapterType) => {
  return instance().post(`chapter/create`, chapter);
};
export const getChapterPage = (id: string, currentPage: number) => {
  return instance().get(`chapter/${id}`, {
    params: {
      currentPage,
    },
  });
};
