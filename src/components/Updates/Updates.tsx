import fetcher from "../../api/axios-client";
import { updateChapterType } from "../../types/chapter.type";
import { UpdatesProps } from "./Updates.props";
import useSWR from "swr";
import { UpdatesItem } from "./UpdatesItem/UpdatesItems";

export const Updates = ({ className, ...props }: UpdatesProps): JSX.Element => {
  const { data: chapters, isLoading } = useSWR<updateChapterType[]>(
    "chapter/latest",
    fetcher
  );
  return (
    <div
      className={`${className} w-full h-full bg-customWhite rounded-md p-3`}
      {...props}
    >
      <h2 className="text-lg text-gray-600  border-b border-gray-300">
        New chapters:
      </h2>
      <div className="col gap-2 mt-5">
        {isLoading && <div>Loading</div>}
        {chapters &&
          chapters.map((chapter) => <UpdatesItem chapter={chapter} />)}
      </div>
    </div>
  );
};
