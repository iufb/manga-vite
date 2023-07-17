export interface IComic {
  _id: string;
  comicCover: string;
  comicBg: string;
  title: string;
  alternativeTitle: string;
  description: string;
  type: comicType;
  genres: string[];
  status: comicStatusType;
  translateStatus: comicStatusType;
  author: string;
  artist: string;
  publishingCompany: string;
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
