import { Link, useParams } from "react-router-dom";
import { ChapterNavigation } from "./ChapterNavigation/ChapterNavigation";
import { ReaderHeaderProps } from "./ReaderHeader.props";
import { RxHamburgerMenu } from "react-icons/rx";
import useSWR from "swr";
import fetcher from "../../api/axios-client";
import { useAppDispatch } from "../../redux/hooks";
import { updateModalStatus } from "../../redux/features/modal/modalSlice";
import { useEffect } from "react";
import { setChaptersQuantity } from "../../redux/features/chapter/chapterSlice";
export const ReaderHeader = ({
  className,
  ...props
}: ReaderHeaderProps): JSX.Element => {
  const { comicId } = useParams();
  const dispatch = useAppDispatch();
  const { data } = useSWR<{ chaptersQuantity: number; comicName: string }>(
    `chapter/reader/${comicId}`,
    fetcher
  );
  useEffect(() => {
    if (data) dispatch(setChaptersQuantity(data.chaptersQuantity));
  }, [data]);
  return (
    <div
      className={`${className} w-full h-12 sticky top-0  z-30 flex px-3 gap-3 bg-gray-700 text-customWhite items-center `}
      {...props}
    >
      {data && (
        <>
          <button
            className="active:scale-110 active:transition active:ease-in-out readerLinkHover p-2"
            onClick={() =>
              dispatch(
                updateModalStatus({
                  status: "open",
                  modal: "sidebarModalState",
                })
              )
            }
          >
            <RxHamburgerMenu className="w-6 h-6 text-customWhite " />
          </button>
          <Link to={`/comic/${comicId}`} className="readerLinkHover p-2">
            {data.comicName}
          </Link>
          <ChapterNavigation chaptersQuantity={data.chaptersQuantity} />
        </>
      )}
    </div>
  );
};
