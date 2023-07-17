import { IComic } from "../../types/comic.type";
import { instance } from "../axios-client";

export const createComic = async (data: IComic) => {
  return instance.post("/comic/create", data);
};

export const getComic = async (id: string) => {
  return instance.get<IComic>(`comic/${id}`);
};
