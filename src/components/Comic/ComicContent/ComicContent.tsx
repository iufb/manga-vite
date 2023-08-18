import { BiBookAdd } from "react-icons/bi";
import { ImagePreview } from "../../ImagePreview/ImagePreview";
import { ComicHeader } from "../ComicHeader/ComicHeader";
import { ComicInfo } from "../ComicInfo/ComicInfo";
import { ComicTabContent } from "../ComicTabContent/ComicTabContent";
import { ComicContentProps } from "./ComicContent.props";
import { Link } from "react-router-dom";
import { ComicButton } from "../ComicButton/ComicButton";

export const ComicContent = ({
  comic,
  className,
  ...props
}: ComicContentProps): JSX.Element => {
  return (
    <div
      className={`${className} flex desktop:flex-row mobile:flex-col gap-2 z-50 mb-2 `}
      {...props}
    >
      <div className="col desktop:gap-1 mobile:gap-0 mobile:center  desktop:bg-inherit z-10  ">
        <ImagePreview
          src={comic.comicCover}
          className="mobile:max-w-[200px] desktop:max-w-[250px]"
        >
          <Link
            to="add-chapter"
            className="absolute bottom-2 text-3xl bg-indigoGrey rounded-md text-white "
          >
            <BiBookAdd />
          </Link>
        </ImagePreview>
        <ComicHeader
          className="mobile:flex desktop:hidden w-full center"
          title={comic.title}
        />

        <ComicButton comic={comic} />
        <ComicInfo comic={comic} className=" " />
      </div>
      <div className="z-0 w-full">
        <ComicHeader
          title={comic.title}
          className="mobile:hidden desktop:flex"
        />
        <ComicTabContent
          description={comic.description}
          genres={comic.genres}
          id={comic._id}
          className="min-h-[300px]"
        />
      </div>
    </div>
  );
};
