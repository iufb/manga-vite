import { CatalogProps } from "./Catalog.props";
import { IComic } from "../../types/comic.type";
import { ComicCard } from "../Comic/ComicCard/ComicCard";
import { useEffect, useState } from "react";
import { findByTitle, getAllComics } from "../../api/comic/comic";
import { FilterForm } from "../forms/filterForm/FilterForm";
import { Loader } from "../Loader/Loader";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { updateComics } from "../../redux/features/comic/comicSlice";
import { updateModalStatus } from "../../redux/features/modal/modalSlice";
import { useWindowSize } from "../../hooks/useWindowSize";
import { ComicsGrid } from "../ComicsGrid/ComicsGrid";

export const Catalog = ({ className, ...props }: CatalogProps): JSX.Element => {
  const [search, setSearch] = useState<string>("");
  const { width } = useWindowSize();
  const { comics } = useAppSelector((state) => state.comic);
  const dispatch = useAppDispatch();
  const updateCatalog = (comics: IComic[]) => {
    dispatch(updateComics(comics));
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
      className={`${className}  flex desktop:flex-row pb-10 tablet:px-10  tablet:flex-row mobile:flex-col mobile:items-center tablet:items-start  gap-5 relative  justify-center items-start my-5  w-full h-full  `}
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
        <ComicsGrid className="max-w-[820px] ">
          {comics.length == 0 && (
            <Loader size="md" className="justify-self-center" />
          )}
          {comics.length > 0 ? (
            comics.map(({ comicCover, title, _id, type }) => (
              <ComicCard
                id={_id}
                comicLayout="tile"
                type={type}
                cover={comicCover}
                name={title}
                key={title}
              />
            ))
          ) : (
            <div className="text-center text-gray-400 text-md col-start-3 col-end-4  center">
              Nothing was found
            </div>
          )}
        </ComicsGrid>
      </div>
      {width > 640 && <FilterForm />}
      <div className="mobile:flex tablet:hidden fixed bottom-0 bg-customWhite z-50 w-full center py-2 px-1  ">
        <button className="btn btn-sm bg-gray-300 text-gray-500 flex-1">
          Sort
        </button>
        <button
          className="btn btn-sm bg-gray-300 text-gray-500  flex-1 "
          onClick={() =>
            dispatch(
              updateModalStatus({ modal: "filterModalState", status: "open" })
            )
          }
        >
          Filters
        </button>
      </div>
    </div>
  );
};
