import { CatalogProps } from "./Catalog.props";
import { IComic } from "../../types/comic.type";
import { ComicCard } from "../Comic/ComicCard/ComicCard";
import { useEffect, useState } from "react";
import { filterComics, findByTitle, getAllComics } from "../../api/comic/comic";
import { FilterForm } from "../forms/filterForm/FilterForm";
import { Loader } from "../Loader/Loader";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setError, updateComics } from "../../redux/features/comic/comicSlice";
import { updateModalStatus } from "../../redux/features/modal/modalSlice";
import { useWindowSize } from "../../hooks/useWindowSize";
import { ComicsGrid } from "../ComicsGrid/ComicsGrid";
import { useSearchParams } from "react-router-dom";
import { Sort } from "../Sort/Sort";

export const Catalog = ({ className, ...props }: CatalogProps): JSX.Element => {
  const [search, setSearch] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const { sortType, direction } = useAppSelector((state) => state.sort);

  const { width } = useWindowSize();
  const { comics, error } = useAppSelector((state) => state.comic);
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const checkExistingSearchParams = () => {
    const genres = searchParams.getAll("genres");
    const status = searchParams.getAll("status");
    const translateStatus = searchParams.getAll("translateStatus");
    const type = searchParams.getAll("type");
    let isExist = false;
    if (
      genres.length > 0 ||
      status.length > 0 ||
      translateStatus.length > 0 ||
      type.length > 0
    ) {
      isExist = true;
    } else {
      isExist = false;
    }
    return { genres, status, translateStatus, type, isExist };
  };
  const handleEnter = (e: React.KeyboardEvent) => {
    if (e.code == "Enter") {
      search == ""
        ? getAllComics({ sortType, direction }).then(({ data }) =>
            updateCatalog(data)
          )
        : findByTitle(search).then(({ data }) => updateCatalog(data));
    }
  };
  const updateCatalog = (comics: IComic[]) => {
    setLoading(false);
    dispatch(updateComics(comics));
  };
  const handleError = () => {
    setLoading(false);
    dispatch(setError(true));
  };
  useEffect(() => {
    updateCatalog([]);
    const controller = new AbortController();
    setLoading(true);
    const { isExist, genres, status, translateStatus, type } =
      checkExistingSearchParams();
    if (isExist) {
      filterComics(
        {
          genres,
          status,
          translateStatus,
          type,
          sortType,
          sortDirection: direction,
        },
        controller.signal
      )
        .then(({ data }) => updateCatalog(data))
        .catch(() => handleError());
    } else {
      getAllComics({ sortType, direction, signal: controller.signal }).then(
        ({ data }) => updateCatalog(data)
      );
    }
    return () => controller.abort();
  }, [direction, sortType, searchParams]);
  return (
    <div
      className={`${className}  flex desktop:flex-row pb-10 tablet:px-10  tablet:flex-row mobile:flex-col mobile:items-center tablet:items-start  gap-5 relative  justify-center items-start my-5  w-full h-full  `}
      {...props}
    >
      <div className={`bg-customWhite py-3 px-4 rounded-md`}>
        <div className="flex justify-between ">
          {" "}
          <h1 className="text-2xl mb-3">Catalog</h1>
          <Sort className="mobile:hidden tablet:flex" />
        </div>
        <input
          className="w-full px-2 py-1 focus:outline-indigoLight mb-3"
          placeholder="Find comic by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleEnter}
        />
        <ComicsGrid className="desktop:w-[720px] tablet:w-[500px] mobile:w-[350px]  ">
          {loading && <Loader size="md" className="mx-auto" />}
          {comics.length > 0 &&
            comics.map(({ comicCover, title, _id, type, chaptersCount }) => (
              <ComicCard
                chaptersCount={chaptersCount}
                id={_id}
                comicLayout="tile"
                type={type}
                cover={comicCover}
                name={title}
                key={title}
              />
            ))}
          {error && (
            <div className=" mx-auto text-gray-400 text-md col-start-3 col-end-4  ">
              Nothing was found
            </div>
          )}
        </ComicsGrid>
      </div>
      {width > 640 && <FilterForm />}
      <div className="mobile:flex tablet:hidden fixed bottom-0 bg-customWhite z-50 w-full center py-2 px-1  ">
        <button
          className="btn btn-sm bg-gray-300 text-gray-500 flex-1"
          onClick={() =>
            dispatch(updateModalStatus({ modal: "sort", status: "open" }))
          }
        >
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
