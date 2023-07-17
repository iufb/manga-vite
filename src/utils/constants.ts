import { comicFormType } from "../types/comic.type";

export const comicTypes = ["Manga", "Manhwa", "Manhua"];
export const comicStatus = ["Ongoing", "Finished", "Dropped"];
export const genres = [
  "Action",
  "Adventure",
  "Comedy",
  "Drama",
  "Fantasy",
  "Historical",
  "Horror",
  "Mystery",
  "Psychological",
  "Romance",
  "Sci-Fi",
  "Slice of Life",
  "Sports",
  "Supernatural",
  "Thriller",
  "Yaoi",
  "Yuri",
  "Harem",
  "Isekai",
  "Mecha",
  "Music",
  "School",
  "Shoujo",
  "Shounen",
  "Seinen",
  "Josei",
  "Ecchi",
  "Adult",
  "Gore",
  "Tragedy",
  "Webtoon",
  "Manhwa",
  "Martial Arts",
  "Superpower",
  "Vampire",
  "Zombie",
  "Magical Girl",
  "Reverse Harem",
  "Police",
  "Samurai",
  "Cooking",
  "Gaming",
  "Demons",
  "Space",
  "Post-Apocalyptic",
  "Time Travel",
  "Cyberpunk",
  "Military",
  "Mature",
  "Parody",
  "Aliens",
  "Moe",
  "Gender Bender",
  "Dementia",
  "Medical",
  "Superhero",
  "War",
  "Fantasy World",
  "Romantic Comedy",
  "Hentai",
];
export const newComicInputs: {
  label: string;
  registerProp: comicFormType;
}[] = [
  {
    label: "Title",
    registerProp: "title",
  },
  {
    label: "Alternative title",
    registerProp: "alternativeTitle",
  },
  {
    label: "Description",
    registerProp: "description",
  },

  {
    label: "Author",
    registerProp: "author",
  },
  {
    label: "Artist",
    registerProp: "artist",
  },
  {
    label: "Publish company",
    registerProp: "publishingCompany",
  },
];
export const newComicSelects: {
  items: string[];
  defaultValue: string;
  registerProp: comicFormType;
}[] = [
  {
    items: comicTypes,
    defaultValue: "Select title type",
    registerProp: "type",
  },
  {
    items: comicStatus,
    defaultValue: "Select title status",
    registerProp: "status",
  },
  {
    items: comicStatus,
    defaultValue: "Select translate status",
    registerProp: "translateStatus",
  },
];
