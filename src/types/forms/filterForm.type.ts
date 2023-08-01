import { comicStatus, comicTypes, genres } from "../../utils/constants";

export type filterFormType = {
  genres?: typeof genres;
  type?: typeof comicTypes;
  status?: typeof comicStatus;
  translateStatus?: typeof comicStatus;
};
