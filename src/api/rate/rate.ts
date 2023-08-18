import { instance } from "../axios-client";

export const addRatingToComic = (
  comicId: string,
  userId: string,
  rate: number
) => {
  return instance().post("rating", { comicId, userId, rate });
};
