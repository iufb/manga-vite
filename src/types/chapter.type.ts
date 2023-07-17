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
