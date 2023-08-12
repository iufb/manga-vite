import { BiBookAdd } from "react-icons/bi";
import { ImagePreview } from "../../ImagePreview/ImagePreview";
import { ComicHeader } from "../ComicHeader/ComicHeader";
import { ComicInfo } from "../ComicInfo/ComicInfo";
import { ComicTabContent } from "../ComicTabContent/ComicTabContent";
import { ComicContentProps } from "./ComicContent.props";
import { Link } from "react-router-dom";
import { ComicButton } from "../ComicButton/ComicButton";
import { IComic } from "../../../types/comic.type";

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
const oldLayout = (comic: IComic) => {
  return (
    <div
      className={` grid mb-10 desktop:grid-cols-comicDesktop desktop:grid-rows-comicDesktop gap-2 `}
    >
      <ImagePreview
        src={comic.comicCover}
        className="desktop:w-65 mobile:w-56 mobile:-mt-28 desktop:-mt-0  mobile:justify-self-center desktop:justify-self-start  z-0 desktop:col-start-1 desktop:col-end-2 desktop:row-start-1 desktop:row-end-3 desktop:items-start"
      >
        <Link
          to="add-chapter"
          className="absolute bottom-2 text-3xl bg-indigoGrey rounded-md text-white"
        >
          <BiBookAdd />
        </Link>
      </ImagePreview>
      <ComicHeader
        title={comic.title}
        className="mobile:-mt-20 desktop:-mt-0 desktop:col-start-2 desktop:col-end-3 desktop:row-start-1 desktop:row-end-2 z-30"
      />
      <ComicInfo
        comic={comic}
        className="desktop:col-start-1 desktop:col-end-2 desktop:row-start-4 desktop:row-end-5 z-30  "
      />
      <ComicTabContent
        description={comic.description}
        genres={comic.genres}
        id={comic._id}
        className="desktop:col-start-2 desktop:col-end-3 desktop:z-50 min-h-[500px] desktop:row-start-2 desktop:row-end-5 "
      />
      <ComicButton
        comic={comic}
        className="desktop:col-start-1 desktop:col-end-2 desktop:row-start-3 desktop:row-end-4  w-full z-50"
      />
    </div>
  );
};
