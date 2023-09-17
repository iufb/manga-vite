import { addComicToListType } from "../../types/list.type";
import { instance } from "../axios-client";

export const addComicToList = (list: addComicToListType) => {
  return instance().post("list", list);
};
export const createList = (comicId: string) => {
  return instance().post("list/create", { comic: comicId });
};
export const updateLastChapter = (
  userId: string,
  comicId: string,
  chapterNumber: number,
  page: number
) => {
  return instance().patch(`list/lastChapter/${userId}/${comicId}`, {
    chapterNumber,
    page,
  });
};
