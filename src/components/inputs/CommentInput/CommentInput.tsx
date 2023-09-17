import React, { useEffect, useRef, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { CommentInputProps } from "./CommentInput.props";
import { useOnClickOutside } from "../../../hooks/useOnClickOutside";
import { TextStyles } from "./TextStyles/TextStyles";
import { createComment } from "../../../api/comment/comment";
import { useAuth } from "../../../hooks";
import { mutate } from "swr";

export const CommentInput = ({
  className,
  commentLevel,
  parentComment,
  setShowInput,
  rootId,
  type,
  ...props
}: CommentInputProps): JSX.Element => {
  const [expand, setExpand] = useState(false);
  const [comment, setComment] = useState<string>("");
  const ref = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const divRef = useRef<HTMLDivElement>(null);
  const [searchParams] = useSearchParams();
  const { comicId, chapterNumber } = useParams();
  const page = Number(searchParams.get("page"));
  const { user } = useAuth();
  const stopCommenting = () => {
    setExpand(false);
    setComment("");
    if (setShowInput) setShowInput(false);
  };
  useEffect(() => {
    if (setShowInput) {
      inputRef.current?.focus();
    } else {
      stopCommenting();
    }
  }, []);
  const forPage = type == "page";
  useOnClickOutside(ref, stopCommenting);
  const handleKey = (e: React.KeyboardEvent) => {
    if (e.code == "Enter") {
      sendComment();
    }
    if (e.code == "Escape") {
      stopCommenting();
    }
  };
  const sendComment = async () => {
    if (user && comicId)
      await createComment({
        userId: user._id,
        comment,
        type,
        commentFor: {
          comicId,
          chapterNumber: forPage ? Number(chapterNumber) : undefined,
          page: forPage ? page : undefined,
        },
        rootId: rootId ? rootId : "none",
        commentLevel: commentLevel ? commentLevel : 0,
        parentComment: parentComment ? parentComment : "none",
        votesUp: 0,
        votesDown: 0,
        sticky: false,
      });
    forPage ? mutate("comment/chapter") : mutate("comment/comic");
    stopCommenting();
  };
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    const tags = ["<b>", "</b>", "<i>", "</i>", "<s>", "</s>", "<u>", "</u>"];

    let endsWithTag = false;
    for (const tag of tags) {
      if (newValue.endsWith(tag)) {
        endsWithTag = true;
        setComment(newValue.slice(0, -tag.length));
        break;
      }
    }

    if (!endsWithTag) {
      setComment(newValue);
    }
  };
  return (
    <div
      className={`${className} w-full border border-gray-400  hover:cursor-text ${
        expand ? "h-full min-h-[125px]" : "h-[50px] "
      }  rounded-md relative  ${expand ? "px-2  py-1 col gap-1" : "p-3"}   `}
      {...props}
      onClick={() => {
        inputRef.current?.focus();
        setExpand(true);
      }}
      ref={ref}
    >
      <input
        value={comment}
        ref={inputRef}
        onChange={handleInput}
        className=" absolute  opacity-0 "
        onKeyDown={handleKey}
      />
      {!expand && (
        <span
          className={`${
            forPage ? "text-customWhite" : " text-gray-950 "
          } opacity-60`}
        >
          Add comment...
        </span>
      )}
      <div
        ref={divRef}
        role="textbox"
        onClick={() => inputRef.current?.focus()}
        className={`  w-fit h-full    mobile:max-w-[400px]  tablet:max-w-[700px] desktop:max-w-[1200px]  min-h-[80px]   ${
          forPage ? "text-customWhite" : "text-gray-950"
        }  [line-height: 20px] relative  ${
          expand ? "after:absolute" : "after:hidden"
        }  after:h-5 after:w-[1px] after:bg-gray-400 after:animate-blink after:ml-1`}
        dangerouslySetInnerHTML={{
          __html: comment,
        }}
      />
      <div className={` justify-between      ${expand ? "flex" : "hidden"} `}>
        <TextStyles setComment={setComment} comment={comment} />
        <button
          className={` ${
            !forPage ? "bg-indigoGrey " : "bg-gray-900 "
          } text-customWhite  px-2 py-1 rounded-md`}
          onClick={sendComment}
        >
          Send
        </button>
      </div>
    </div>
  );
};
