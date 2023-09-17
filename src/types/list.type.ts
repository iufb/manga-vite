export type listType =
  | string
  | "reading"
  | "planned"
  | "dropped"
  | "finished"
  | "add to list";
export type addComicToListType = {
  comic: string;

  user: string;

  listType: listType;

  lastChapter?: lastChapterType;
};
export type createList = {
  comic: string;
};
export type lastChapterType = {
  chapter: number;
  page: number;
};
