import { BiBookmark } from "react-icons/bi";
import { BookmarkProps } from "./Bookmark.props";
import { useParams, useSearchParams } from "react-router-dom";
import useSWR, { mutate } from "swr";
import { useAuth } from "../../hooks";
import fetcher from "../../api/axios-client";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import { updateLastChapter } from "../../api/list/list";
import { useAppDispatch } from "../../redux/hooks";
import { setAlert } from "../../redux/features/alert/alertSlice";
import { updateModalStatus } from "../../redux/features/modal/modalSlice";
import { lastChapterType } from "../../types/list.type";
export const Bookmark = ({
  className,
  ...props
}: BookmarkProps): JSX.Element => {
  const { user } = useAuth();
  const { comicId, chapterNumber } = useParams();
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get("page") ?? 1);
  const dispatch = useAppDispatch();
  const { data: lastChapter } = useSWR<lastChapterType>(
    `list/lastChapter/${user?._id}/${comicId}`,
    fetcher,
    { refreshInterval: 10000 }
  );

  const saveLastChapter = () => {
    //to do
    if (!user) {
      dispatch(updateModalStatus({ modal: "accessModal", status: "open" }));
      return;
    }
    if (user && comicId && chapterNumber && page) {
      updateLastChapter(user?._id, comicId, Number(chapterNumber), page).then(
        () => {
          dispatch(
            setAlert({ text: "Bookmark added.", alertStatus: "success" })
          );
          mutate(`list/lastChapter/${user?._id}/${comicId}`);
        }
      );
    }
  };
  return (
    <div className={`${className}  `} {...props}>
      <button
        className="btn btn-sm   bg-inherit border-none text-customWhite text-xl hover:readerLinkHover h-full"
        onClick={saveLastChapter}
      >
        {chapterNumber == lastChapter?.chapter && page == lastChapter?.page ? (
          <BsFillBookmarkStarFill />
        ) : (
          <BiBookmark />
        )}
      </button>
    </div>
  );
};
