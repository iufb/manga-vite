import { CommentInput } from "../../inputs/CommentInput/CommentInput";
import { CommentHeaderProps } from "./CommentHeader.props";

export const CommentHeader = ({
  className,
  type,
  ...props
}: CommentHeaderProps): JSX.Element => {
  return (
    <div className={`${className} w-full`} {...props}>
      <CommentInput type={type} />
    </div>
  );
};
