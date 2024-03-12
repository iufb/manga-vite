import { Link } from "react-router-dom";
import fetcher from "../../../api/axios-client";
import { popularUpdatesType } from "../../../types/chapter.type";
import { ComicCard } from "../../Comic/ComicCard/ComicCard";
import { Loader } from "../../Loader/Loader";
import { PopularUpdatesProps } from "./PopularUpdates.props";

import useSWR from "swr";
export const PopularUpdates = ({
  className,
  ...props
}: PopularUpdatesProps): JSX.Element => {
  const {
    data: popular,
    isLoading,
    error,
  } = useSWR<popularUpdatesType[]>("chapter/popular", fetcher);
  return (
    <div
      className={`${className} w-full mobile:max-w-[350px]  mx-auto tablet:max-w-[640px]   desktop:max-w-full  bg-customWhite rounded-md p-2  col items-center gap-2`}
      {...props}
    >
      <h2 className="text-lg font-bold text-gray-600 border-b w-full pb-1 border-gray-300">
        Popular updates:
      </h2>
      <div className="w-full flex justify-center gap-4 overflow-x-scroll custom-scrollbar pb-3">
        {isLoading && <Loader size="md" className="justify-self-center " />}
        {popular &&
          popular.map((chapter) => (
            <div key={chapter._id} className="col gap-1">
              <ComicCard
                comicLayout="tile"
                cover={chapter.comic.comicCover}
                name={chapter.comic.title}
                id={chapter.comicId}
                chaptersCount={chapter.chapterNumber}
              />
              <Link
                to={`/reader/${chapter.comicId}/${chapter.chapterNumber}?page=1`}
                className="font-bold bg-gray-200 px-1 py-1 rounded-md"
              >
                {chapter.chapterNumber} chapter
              </Link>
            </div>
          ))}
        {error && (
          <div className="text-red-900 text-lg font-bold">
            Something went wrong
          </div>
        )}
      </div>
    </div>
  );
};
