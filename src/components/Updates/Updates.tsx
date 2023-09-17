import fetcher from "../../api/axios-client";
import { updateChapterType } from "../../types/chapter.type";
import { UpdatesProps } from "./Updates.props";
import useSWR from "swr";
import { UpdatesItem } from "./UpdatesItem/UpdatesItem";
import { Loader } from "../Loader/Loader";

export const Updates = ({ className, ...props }: UpdatesProps): JSX.Element => {
  const {
    data: chapters,
    isLoading,

    error,
  } = useSWR<updateChapterType[]>("chapter/latest", fetcher);

  const groupUpDuplicates = (chapters: updateChapterType[]) => {
    const map = new Map<string, updateChapterType>();
    chapters.forEach((chapter) => {
      const id = chapter.comicId;
      if (map.has(id)) {
        if (
          map
            .get(id)
            ?.chapterNumbers.findIndex(
              (c) => c.chapter == chapter.chapterNumbers[0].chapter
            ) === -1
        ) {
          map.get(id)?.chapterNumbers.push(chapter.chapterNumbers[0]);
        }
      } else {
        map.set(id, chapter);
      }
    });
    const result = Array.from(map.values());
    return result;
  };

  return (
    <div
      className={`${className}  w-full h-full mobile:max-w-[390px] tablet:max-w-full min-h-[200px] bg-customWhite rounded-md p-3`}
      {...props}
    >
      <h2 className="text-lg text-gray-600  border-b border-gray-300">
        New chapters:
      </h2>
      <div className="col gap-2 mt-5 center ">
        {isLoading && <Loader size="lg" />}
        {chapters &&
          groupUpDuplicates(chapters).map((chapter) => (
            <UpdatesItem chapter={chapter} key={chapter._id} />
          ))}
        {error && (
          <div className="text-red-800 text-lg font-bold">
            Something went wrong...
          </div>
        )}
      </div>
    </div>
  );
};
