import { CatalogProps } from "./Catalog.props";
import useSWR from "swr";
import { IComic } from "../../types/comic.type";
import { ComicCard } from "../Comic/ComicCard/ComicCard";
import fetcher from "../../api/axios-client";

export const Catalog = ({ className, ...props }: CatalogProps): JSX.Element => {
  const { data: comics } = useSWR<IComic[]>(`comic/type/Manga`, fetcher);
  return (
    <div className={`${className} flex gap-5 relative`} {...props}>
      <div className={`bg-customWhite p-10`}>
        <h1 className="text-2xl">Catalog</h1>
        <div className="grid desktop:grid-cols-5 tablet:grid-cols-4 mobile:grid-cols-2  gap-2 overflow-y-scroll">
          {comics &&
            comics
              .concat(comics)
              .concat(comics)
              .concat(comics)
              .concat(comics)
              .concat(comics)
              .map(({ comicCover, title, _id, type }) => (
                <ComicCard
                  type={type}
                  cover={comicCover}
                  name={title}
                  key={title}
                  to={`/comic/${_id}`}
                />
              ))}
        </div>
      </div>

      <div className="w-[314px] h-full bg-customWhite fixed right-0">
        filter
      </div>
    </div>
  );
};
