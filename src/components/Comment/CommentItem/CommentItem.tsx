import { useState } from "react";
import { CommentItemProps } from "./CommentItem.props";
import { CommentInput } from "../../inputs/CommentInput/CommentInput";
import { ImagePreview } from "../../ImagePreview/ImagePreview";
import { Vote } from "./Vote/Vote";
import { calculateTimeElapsed } from "../../../utils/helpers";
export const CommentItem = ({
  className,
  comment,
  type,
  replies,
  ...props
}: CommentItemProps): JSX.Element => {
  const [showInput, setShowInput] = useState(false);
  const getPaddingLeft = (level: number) => {
    return level * 20;
  };
  const isPage = type == "page";
  return (
    <div
      className={`${className}   flex flex-col items-start gap-2 relative  ${
        comment.commentLevel > 0 &&
        ` relative before:absolute before:w-[1px] before:h-full before:left-1  before:bg-customWhite`
      }  `}
      {...props}
    >
      <div
        className={`flex w-full justify-between ${
          isPage ? "text-customWhite" : "text-gray-950"
        } `}
      >
        <div className="flex items-center gap-2">
          <ImagePreview src={comment.user.avatar} width={40} />
          <span className=" font-bold text-md ">{comment.user.name}</span>
          <span className=" opacity-60 desktop:text-md mobile:text-sm">
            {calculateTimeElapsed(comment.createdAt)}
          </span>
        </div>
        <Vote
          commentId={comment._id}
          votesDown={comment.votesDown}
          votesUp={comment.votesUp}
          className="mr-4"
        />
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: comment.comment }}
        className={` ${isPage ? "text-customWhite" : "text-gray-950"} `}
      />
      <button
        className=" text-gray-400 hover:text-indigoGrey text-md"
        onClick={() => setShowInput(true)}
      >
        Answer
      </button>
      {showInput && (
        <CommentInput
          rootId={comment.rootId == "none" ? comment._id : comment.rootId}
          parentComment={comment._id}
          commentLevel={comment.commentLevel + 1}
          setShowInput={setShowInput}
          type={type}
        />
      )}
      <div className="w-full">
        {replies?.map((c) => {
          if (c.rootId == comment._id || c.parentComment == comment._id)
            return (
              <CommentItem
                comment={c}
                type={type}
                key={c.comment}
                className=" h-full  w-full  "
                style={{
                  paddingLeft: getPaddingLeft(c.commentLevel),
                }}
              />
            );
        })}
      </div>
    </div>
  );
};
