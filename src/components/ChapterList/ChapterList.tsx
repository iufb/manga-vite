import { Link, useParams } from "react-router-dom";
import { ChapterListProps } from "./ChapterList.props";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { AiOutlineClose } from "react-icons/ai";
import { updateModalStatus } from "../../redux/features/modal/modalSlice";

export const ChapterList = ({
  className,
  ...props
}: ChapterListProps): JSX.Element => {
  const { comicId } = useParams();
  const { chaptersQuantity } = useAppSelector((state) => state.chapter);
  const dispatch = useAppDispatch();
  const closeModal = () => {
    dispatch(
      updateModalStatus({
        modal: "chapterListModalState",
        status: "close",
      })
    );
  };
  return (
    <div
      className={`${className}  h-full bg-gray-800 col gap-2 pt-4 pl-4`}
      {...props}
    >
      <div className="text-white flex justify-between px-4 ">
        <h1 className="text-xl">Chapters:</h1>
        <button
          className="text-gray-300 hover:text-customWhite text-2xl"
          onClick={closeModal}
        >
          <AiOutlineClose />
        </button>
      </div>
      {new Array(chaptersQuantity).fill(chaptersQuantity).map((_, idx) => (
        <Link
          to={`/reader/${comicId}/${idx + 1}?page=1`}
          onClick={closeModal}
          key={idx}
          className="text-customWhite w-full hover:bg-opacity-70 hover:bg-gray-600 px-1"
        >
          Chapter {idx + 1}
        </Link>
      ))}
    </div>
  );
};
