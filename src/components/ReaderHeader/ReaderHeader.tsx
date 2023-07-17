import { Link, useParams } from "react-router-dom";
import { ChapterNavigation } from "./ChapterNavigation/ChapterNavigation";
import { ReaderHeaderProps } from "./ReaderHeader.props";
import useSWR from "swr";
import fetcher from "../../api/axios-client";
export const ReaderHeader = ({
  className,
  ...props
}: ReaderHeaderProps): JSX.Element => {
  const { comicId } = useParams();
  const { data } = useSWR(`chapter/byComic/${comicId}`, fetcher);
  console.log(data);
  return (
    <div
      className={`${className} w-full h-12 sticky top-0  z-30 flex px-3 gap-3 bg-gray-700 text-customWhite `}
      {...props}
    >
      <Link to={`/comic/${comicId}`}></Link>
      <ChapterNavigation />
    </div>
  );
};
