import { VoteProps } from "./Vote.props";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";
import { changeVote, getUserVote } from "../../../../api/comment/comment";
import { useAuth } from "../../../../hooks";
import { mutate } from "swr";
import { useEffect, useState } from "react";
import { userVoteType } from "../../../../types/comment.type";
import { useAppDispatch } from "../../../../redux/hooks";
import { updateModalStatus } from "../../../../redux/features/modal/modalSlice";

export const Vote = ({
  className,
  commentId,
  votesDown,
  votesUp,
  ...props
}: VoteProps) => {
  const voteValue = votesUp - votesDown;
  const { user } = useAuth();
  const dispatch = useAppDispatch();
  const [userVote, setUserVote] = useState<userVoteType | null>(null);
  useEffect(() => {
    if (user)
      getUserVote(commentId, user._id).then(({ data }) => setUserVote(data));
  }, [voteValue]);
  const changeCommentVote = (liked: boolean) => {
    if (!user) {
      dispatch(updateModalStatus({ modal: "accessModal", status: "open" }));
      return;
    }
    changeVote(commentId, user._id, liked).then(() => {
      mutate("comment/chapter");
      mutate("replies");
      mutate("comment/vote/user");
    });
  };
  function getNumberColor() {
    if (voteValue == 0) {
      return "text-gray-500";
    }
    return voteValue > 0 ? "text-green-500" : " text-red-500";
  }
  function getIconColor(arrowDirection: "up" | "down") {
    if (commentId == userVote?.commentId) {
      switch (userVote.vote) {
        case "up":
          return arrowDirection == "up" && "text-green-500";
        case "down":
          return arrowDirection == "down" && "text-red-500";
        case "none":
          return "text-gray-300";
      }
    }
  }
  return (
    <div className={`${className} cursor-pointer center gap-4`} {...props}>
      <BsArrowUp
        onClick={() => changeCommentVote(true)}
        className={`${getIconColor("up")} text-gray-500`}
      />
      <span className={getNumberColor()}>{voteValue}</span>
      <BsArrowDown
        onClick={() => changeCommentVote(false)}
        className={`${getIconColor("down")} text-gray-500`}
      />
    </div>
  );
};
