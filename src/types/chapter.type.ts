export type chapterType = {
  _id: string;
  comicId: string;
  comicName?: [string];
  chapterNumber: number;
  name?: string;
  pages: string[];
  createdAt: Date;
};
export type createChapterType = {
  comicId: string;
  chapterNumber: number;
  name?: string;
  pages: string[];
};
export type updateChapterType = Omit<
  chapterType,
  "pages" | "chapterNumber" | "name"
> & {
  chapterNumbers: {
    chapter: number;
    name: string;
  }[];
  comic: {
    comicCover: string;
    title: string;
    alternativeTitle: string;
  };
};
export type popularUpdatesType = Omit<updateChapterType, "chapterNumbers"> & {
  avgRating: number;
  chapterNumber: number;
  comic: {
    comicBg: string;
  };
};
