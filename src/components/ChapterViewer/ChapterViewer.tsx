import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import fetcher from "../../api/axios-client";
import { ChapterViewerProps } from "./ChapterViewer.props";
import useSWR, { mutate } from "swr";
import { ImagePreview } from "../ImagePreview/ImagePreview";
import { useEffect } from "react";
import { useImageLoading } from "../../hooks/useImageLoading";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setPagesQuantity } from "../../redux/features/chapter/chapterSlice";
import { scrollToTop } from "../../utils/helpers";
import { updateLastChapter } from "../../api/list/list";
import { useAuth } from "../../hooks";
import { ReaderNavigation } from "../ReaderHeader/ReaderNavigation/ReaderNavigation";
export const ChapterViewer = ({
  className,
  ...props
}: ChapterViewerProps): JSX.Element => {
  const { user } = useAuth();
  const { comicId, chapterNumber } = useParams();
  const [searchParams] = useSearchParams();
  const { chaptersQuantity } = useAppSelector((state) => state.chapter);
  const navigate = useNavigate();
  const currentPage = Number(searchParams.get("page"));
  const dispatch = useAppDispatch();
  const { data } = useSWR<{
    chapterId: string;
    baseUrl: string;
    pagesQuantity: number;
    prevChapterPageQuantity: number;
  }>(`chapter/${comicId}/${chapterNumber}`, fetcher);
  const imageUrl = `${data?.baseUrl}/${currentPage}.webp`;
  const { loading, setLoading } = useImageLoading(imageUrl);
  useEffect(() => {
    data && dispatch(setPagesQuantity(data?.pagesQuantity));
  }, [data]);
  const goForward = () => {
    setLoading(true);
    scrollToTop();
    if (currentPage == data?.pagesQuantity) {
      if (Number(chapterNumber) == chaptersQuantity) {
        navigate(`/comic/${comicId}`);
        if (user && comicId && chapterNumber) {
          updateLastChapter(
            user?._id,
            comicId,
            Number(chapterNumber),
            currentPage
          );
          mutate(`list/lastChapter/${user._id}/${comicId}`);
        }
        return;
      } else {
        navigate(`/reader/${comicId}/${Number(chapterNumber) + 1}?page=1`);
        if (user && comicId && chapterNumber) {
          updateLastChapter(
            user?._id,
            comicId,
            Number(chapterNumber),
            currentPage
          );
          mutate(`list/lastChapter/${user._id}/${comicId}`);
        }
        return;
      }
    }
    navigate(`?page=${currentPage + 1}`);
  };
  const goBack = () => {
    setLoading(true);

    scrollToTop();
    if (currentPage == 1) {
      if (Number(chapterNumber) == 1) {
        navigate(`/comic/${comicId}`);
        return;
      } else {
        navigate(
          `/reader/${comicId}/${Number(chapterNumber) - 1}?page=${
            data?.prevChapterPageQuantity
          }`
        );
        return;
      }
    }
    navigate(`?page=${currentPage - 1}`);
  };

  return (
    <div className={`${className} relative w-full grid `} {...props}>
      {currentPage && (
        <div className=" justify-self-center">
          <div
            className="absolute left-0 top-0 z-40 w-[50%] h-full cursor-pointer"
            onClick={goBack}
          />
          {loading ? (
            <div className="text-customWhite bg-gray-900 text-4xl mobile:w-[390px] tablet:w-[768px] desktop:w-[700px] h-screen center">
              <img src="/loader.gif" />
            </div>
          ) : (
            <ImagePreview
              src={`${data?.baseUrl}/${currentPage}.webp`}
              className={`desktop:max-w-[1200px]`}
            />
          )}
          <div
            className="absolute right-0 top-0 z-40 w-[50%] h-full cursor-pointer"
            onClick={goForward}
          />
        </div>
      )}

      <ReaderNavigation className="sticky z-51 left-5 bottom-5" />
    </div>
  );
};
