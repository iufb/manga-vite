import { IComic, IListComic } from "../../types/comic.type";
import { filterFormType } from "../../types/forms/filterForm.type";
import { listType } from "../../types/list.type";
import { instance } from "../axios-client";

export const createComic = async (data: IComic) => {
  return instance().post("/comic/create", data);
};

export const getComic = async (id: string) => {
  return instance().get<IComic>(`comic/${id}`);
};
export const getAllComics = async () => {
  return instance().get<IComic[]>("comic");
};
export const getComicByType = async (type: string) => {
  return instance().get<IComic[]>(`comic/type/${type}`);
};
export const deleteComic = async (id: string) => {
  return instance().delete(`comic/${id}`);
};
export const findByTitle = async (title: string) => {
  return instance().get<IComic[]>(`comic/search/${title}`);
};
export const filterComics = async (filter: filterFormType) => {
  return instance().post<IComic[]>("comic/filter", filter);
};
export const getComicsByList = async (userId: string, listType?: listType) => {
  return instance().get<IListComic[]>("list/listType", {
    params: {
      userId,
      listType,
    },
  });
};
