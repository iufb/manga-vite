import useSWR from "swr";
import fetcher from "../api/axios-client";
import { IComic } from "../types/comic.type";
import { ComicCard } from "../components/Comic/ComicCard/ComicCard";
export const CatalogPage = () => {
  const { data: comics } = useSWR<IComic[]>("comic", fetcher);
  return (
    <div>
      {comics?.map(({ comicCover, title, _id, type }) => (
        <ComicCard
          type={type}
          cover={comicCover}
          name={title}
          key={title}
          to={`/comic/${_id}`}
        />
      ))}
    </div>
  );
};
