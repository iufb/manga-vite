import { useNavigate, useParams } from "react-router-dom";
import { ChapterNavigationProps } from "./ChapterNavigation.props";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { useAppDispatch } from "../../../redux/hooks";
import { updateModalStatus } from "../../../redux/features/modal/modalSlice";

export const ChapterNavigation = ({
  chaptersQuantity,
  className,
  ...props
}: ChapterNavigationProps): JSX.Element => {
  const { chapterNumber, comicId } = useParams();
  const currentChapter = Number(chapterNumber);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  return (
    <div className={`${className} center gap-1`} {...props}>
      {currentChapter && (
        <>
          <button
            className="h-full readerLinkHover px-3 py-4 center"
            onClick={() => {
              navigate(`${comicId}/${currentChapter - 1}?page=1`);
            }}
            disabled={currentChapter == 1}
          >
            <MdArrowBackIos />
          </button>
          <button
            className="readerLinkHover p-2 h-full mobile:p-1 mobile:text-sm tablet:text-lg flex gap-1 "
            onClick={() =>
              dispatch(
                updateModalStatus({
                  modal: "chapterListModalState",
                  status: "open",
                })
              )
            }
          >
            <span className="mobile:hidden tablet:block">Chapter</span>{" "}
            {currentChapter}
          </button>

          <button
            className="h-full readerLinkHover px-3 py-4 center "
            disabled={currentChapter == chaptersQuantity}
            onClick={() => {
              navigate(`${comicId}/${currentChapter + 1}?page=1`);
            }}
          >
            <MdArrowForwardIos />
          </button>
        </>
      )}
    </div>
  );
};
