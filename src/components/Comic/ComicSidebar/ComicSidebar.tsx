import { Link } from "react-router-dom";
import { ImagePreview } from "../../ImagePreview/ImagePreview";
import { ComicSidebarProps } from "./ComicSidebar.props";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { ComicInfo } from "../ComicInfo/ComicInfo";
export const ComicSidebar = ({
  className,
  comic,
  ...props
}: ComicSidebarProps): JSX.Element => {
  return (
    <div className={`${className} flex flex-col gap-4`} {...props}>
      <ImagePreview src={comic?.comicCover} width={250} height={337}>
        <Link
          to={`add-chapter`}
          className="absolute bottom-2 text-3xl bg-indigoGrey rounded-md text-white"
        >
          <AiOutlinePlusSquare />
        </Link>
      </ImagePreview>
      <ComicInfo comic={comic} />
    </div>
  );
};
