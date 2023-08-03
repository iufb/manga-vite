import { CatalogProps } from "./Catalog.props";
import { IComic } from "../../types/comic.type";
import { ComicCard } from "../Comic/ComicCard/ComicCard";
import { useEffect, useState } from "react";
import { findByTitle, getAllComics } from "../../api/comic/comic";
import { FilterForm } from "../forms/filterForm/FilterForm";
import { Loader } from "../Loader/Loader";

export const Catalog = ({ className, ...props }: CatalogProps): JSX.Element => {
  const [search, setSearch] = useState<string>("");
  const [comics, setComics] = useState<IComic[]>([]);
  const updateCatalog = (comics: IComic[]) => {
    setComics(comics);
  };
  const handleEnter = (e: React.KeyboardEvent) => {
    if (e.code == "Enter") {
      search == ""
        ? getAllComics().then(({ data }) => updateCatalog(data))
        : findByTitle(search).then(({ data }) => updateCatalog(data));
    }
  };
  useEffect(() => {
    getAllComics().then(({ data }) => updateCatalog(data));
  }, []);
  return (
    <div
      className={`${className} grid grid-cols-catalog gap-5 relative  justify-center items-start my-5  w-full h-full  `}
      {...props}
    >
      <div className={`bg-customWhite py-3 px-4 rounded-md`}>
        <h1 className="text-2xl mb-3">Catalog</h1>
        <input
          className="w-full px-2 py-1 focus:outline-indigoLight mb-3"
          placeholder="Find comic by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleEnter}
        />
        <div className="grid desktop:grid-cols-5 tablet:grid-cols-4 mobile:grid-cols-2  gap-2 w-[830px] min-h-[111px] ">
          {comics.length == 0 && (
            <Loader size="md" className="justify-self-center" />
          )}
          {comics.length > 0 ? (
            comics.map(({ comicCover, title, _id, type }) => (
              <ComicCard
                type={type}
                cover={comicCover}
                name={title}
                key={title}
                to={`/comic/${_id}`}
              />
            ))
          ) : (
            <div className="text-center text-gray-400 text-md col-start-3 col-end-4  center">
              Nothing was found
            </div>
          )}
        </div>
      </div>
      <FilterForm
        className="col-start-2 col-end-3 row-start-1 row-end-3  "
        setComics={updateCatalog}
      />
    </div>
  );
};
