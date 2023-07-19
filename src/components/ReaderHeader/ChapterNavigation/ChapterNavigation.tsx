import { useParams } from "react-router-dom";
import { ChapterNavigationProps } from "./ChapterNavigation.props";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { useAppDispatch } from "../../../redux/hooks";
import { updateModalStatus } from "../../../redux/features/modal/modalSlice";

export const ChapterNavigation = ({
  chaptersQuantity,
  className,
  ...props
}: ChapterNavigationProps): JSX.Element => {
  const { chapterNumber } = useParams();
  const currentChapter = chapterNumber && Number(chapterNumber[1]);
  const dispatch = useAppDispatch();
  return (
    <div className={`${className} center gap-1`} {...props}>
      <button
        className="h-full readerLinkHover px-3 py-4 center"
        onClick={() => {}}
      >
        <MdArrowBackIos />
      </button>
      <button
        className="readerLinkHover p-2 h-full "
        onClick={() =>
          dispatch(
            updateModalStatus({
              modal: "chapterListModalState",
              status: "open",
            })
          )
        }
      >
        Chapter {currentChapter}
      </button>

      <button
        className="h-full readerLinkHover px-3 py-4 center "
        disabled={currentChapter == chaptersQuantity}
      >
        <MdArrowForwardIos />
      </button>
    </div>
  );
};
