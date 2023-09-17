export type commentsDataType = {
  comments: commentType[];
  replies: commentType[];
};

export type commentType = {
  _id: string;
  comment: string;
  commentLevel: number;
  parentComment: string;
  rootId: string;
  user: {
    avatar: string;
    name: string;
  };
  createdAt: string;
  votesUp: number;
  votesDown: number;
};
type commentForType = {
  comicId: string;

  chapterNumber?: number;

  page?: number;
};
export type createCommentType = {
  userId: string;
  type: "comic" | "page";
  comment: string;

  rootId: string;

  commentFor: commentForType;

  commentLevel: number;

  parentComment: string;

  votesUp: number;

  votesDown: number;

  sticky: boolean;
};
export type userVoteType = {
  commentId: string;
  vote: "up" | "down" | "none";
};
