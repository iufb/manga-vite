import { useNavigate } from "react-router-dom";
import { ImagePreview } from "../../ImagePreview/ImagePreview";
import { ComicSidebarProps } from "./ComicSidebar.props";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { ComicInfo } from "../ComicInfo/ComicInfo";
import { useAuth } from "../../../hooks";
import { useAppDispatch } from "../../../redux/hooks";
import { updateModalStatus } from "../../../redux/features/modal/modalSlice";
export const ComicSidebar = ({
  className,
  comic,
  ...props
}: ComicSidebarProps): JSX.Element => {
  const { user } = useAuth();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const addChapter = () => {
    if (!user) {
      dispatch(updateModalStatus({ modal: "accessModal", status: "open" }));
      return;
    }
    navigate("add-chapter");
  };
  return (
    <div className={`${className} flex flex-col gap-4`} {...props}>
      <ImagePreview src={comic?.comicCover} width={250} height={337}>
        <span
          className="absolute bottom-2 text-3xl bg-indigoGrey rounded-md text-white"
          onClick={addChapter}
        >
          <AiOutlinePlusSquare />
        </span>
      </ImagePreview>
      <ComicInfo comic={comic} />
    </div>
  );
};
