import { BiBookmark } from "react-icons/bi";
import { BookmarkProps } from "./Bookmark.props";
import { useParams } from "react-router-dom";
import useSWR, { mutate } from "swr";
import { useAuth } from "../../hooks";
import fetcher from "../../api/axios-client";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import { updateLastChapter } from "../../api/list/list";
import { useAppDispatch } from "../../redux/hooks";
import { setAlert } from "../../redux/features/alert/alertSlice";
export const Bookmark = ({
  className,
  ...props
}: BookmarkProps): JSX.Element => {
  const { user } = useAuth();
  const { comicId, chapterNumber } = useParams();
  const dispatch = useAppDispatch()
  const { data: lastChapter } = useSWR(
    `list/lastChapter/${user?._id}/${comicId}`,
    fetcher
  );
  const saveLastChapter = () => {
    //to do
    if (user && comicId && chapterNumber) {
      updateLastChapter(user?._id, comicId, Number(chapterNumber)).then(() => {
        dispatch(setAlert({ text: 'Bookmark added.', alertStatus: 'success' }))
        mutate(`list/lastChapter/${user?._id}/${comicId}`);
      });
    }
  };
  return (
    <div className={`${className}`} {...props}>
      <button
        className="btn btn-sm bg-inherit border-none text-customWhite text-xl hover:readerLinkHover h-full"
        onClick={saveLastChapter}
      >
        {chapterNumber == lastChapter ? (
          <BsFillBookmarkStarFill />
        ) : (
          <BiBookmark />
        )}
      </button>
    </div>
  );
};
