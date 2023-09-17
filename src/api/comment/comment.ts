import { createCommentType, userVoteType } from "../../types/comment.type";
import { instance } from "../axios-client";

export const createComment = (comment: createCommentType) => {
  return instance().post("comment/create", comment);
};
export const changeVote = (
  commentId: string,
  userId: string,
  liked: boolean
) => {
  return instance().patch("comment/vote", { commentId, userId, liked });
};
export const getUserVote = (commentId: string, userId: string) => {
  return instance().get<userVoteType>("comment/vote/user", {
    params: { commentId, userId },
  });
};
