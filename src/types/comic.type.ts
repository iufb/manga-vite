import { lastChapterType } from "./list.type";

export interface IComic {
  _id: string;
  comicCover: string;
  comicBg: string;
  title: string;
  alternativeTitle: string;
  description: string;
  chaptersCount: number;
  type: comicType;
  genres: string[];
  status: comicStatusType;
  translateStatus: comicStatusType;
  author: string;
  artist: string;
  publishingCompany: string;
  rate: number;
  rateCount: number;
  createdAt: string;
  updatedAt: string;
}
export interface IListComic {
  comic: string;
  lastChapter: lastChapterType;
  chaptersCount: number;
  updatedAt: string;
  comicData: {
    alternativeTitle: string;
    comicCover: string;
    title: string;
  };
}
export type comicType = "manga" | "manhwa" | "manhua";
export type comicStatusType = "ongoing" | "finished" | "dropped";
export type comicFormType =
  | "title"
  | "alternativeTitle"
  | "description"
  | "type"
  | "status"
  | "translateStatus"
  | "author"
  | "artist"
  | "publishingCompany";
