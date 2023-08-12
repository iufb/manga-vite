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

  lastChapter?: number;
};
export type createList = {
  comic: string;
};
