import { ComicHeader } from "../ComicHeader/ComicHeader";
import { ComicTabContent } from "../ComicTabContent/ComicTabContent";
import { ComicContentProps } from "./ComicContent.props";

export const ComicContent = ({
  comic,
  className,
  ...props
}: ComicContentProps): JSX.Element => {
  return (
    <div className={`${className} flex-1  z-20 `} {...props}>
      {comic && <ComicHeader title={comic.title} />}
      {comic && (
        <ComicTabContent
          description={comic.description}
          genres={comic.genres}
          id={comic._id}
        />
      )}
    </div>
  );
};
