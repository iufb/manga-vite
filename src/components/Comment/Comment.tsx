import { CommentProps } from "./Comment.props";
import { CommentItem } from "./CommentItem/CommentItem";
import { CommentHeader } from "./CommentHeader/CommentHeader";
import useSWR, { mutate } from "swr";
import { commentsDataType } from "../../types/comment.type";
import fetcher from "../../api/axios-client";
import { useParams, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
export const Comment = ({
  className,
  type,
  ...props
}: CommentProps): JSX.Element => {
  const { comicId, chapterNumber } = useParams();
  const [searchparams] = useSearchParams();
  const page = Number(searchparams.get("page"));
  const forPage = type == "page";
  const { data: commentsData } = useSWR<commentsDataType>(
    forPage ? "comment/chapter" : "comment/comic",
    () =>
      fetcher(forPage ? "comment/chapter" : "comment/comic", undefined, {
        comic: comicId,
        type,
        chapter: forPage ? chapterNumber : undefined,
        page: forPage ? page : undefined,
      })
  );
  useEffect(() => {
    mutate("comment/chapter");
  }, [page, chapterNumber]);

  return (
    <div
      className={`${className}  mobile:max-w-[390px]    p-2 rounded-md col gap-2 w-full mt-2 pb-10 ${
        type == "page" ? "bg-gray-900" : "bg-inherit"
      } `}
      {...props}
    >
      <CommentHeader type={type} />
      <div className=" col gap-1  ">
        {commentsData?.comments.map((comment) => (
          <CommentItem
            key={comment._id}
            comment={comment}
            replies={commentsData.replies}
            type={type}
          />
        ))}
      </div>
    </div>
  );
};
