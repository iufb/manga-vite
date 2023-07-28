import { useState } from "react";
import { ImageFormProps } from "./ImageForm.props";
import { ImageInput } from "../../inputs/ImageInput/ImageInput";
import { ImagePreview } from "../../ImagePreview/ImagePreview";
import { CropImageModal } from "../../modals/CropImageModal/CropImageModal";
import { ModalContainer } from "../../modals/ModalContainer/ModalContainer";
import { useAuth } from "../../../hooks";
import { AiOutlineDelete } from "react-icons/ai";

export const ImageForm = ({
  image,
  setImage,
  deleteAvatar,
  label,
  imageFor,
  className,
  ...props
}: ImageFormProps): JSX.Element => {
  const [isValid, setIsValid] = useState<boolean>(true);
  const { user } = useAuth();
  return (
    <div {...props} className={`${className} flex gap-4 items-end`}>
      <ImageInput
        setImage={setImage}
        label={label}
        setIsValid={setIsValid}
        minWidth={imageFor == "comicBg" ? 1200 : undefined}
      />
      {!image && deleteAvatar && (
        <ImagePreview
          src={user?.avatar}
          width={90}
          height={90}
          deleteImage={user?.avatar ? deleteAvatar : undefined}
        >
          <button
            className="absolute  iconBtn top-0 left-0"
            onClick={deleteAvatar}
          >
            <AiOutlineDelete className=" fill-gray-700   " />
          </button>
        </ImagePreview>
      )}
      {image && isValid && (
        <ImagePreview
          width={imageFor == "avatar" || imageFor == "comicCover" ? 90 : 400}
          local
          height={imageFor == "avatar" || imageFor == "comicCover" ? 90 : 200}
          src={URL.createObjectURL(image)}
        >
          <button
            className="absolute iconBtn top-0 left-0"
            onClick={() => setImage(null)}
          >
            <AiOutlineDelete className="fill-gray-700  " />
          </button>
        </ImagePreview>
      )}
      {!isValid && image && (
        <ModalContainer>
          <CropImageModal
            image={image}
            imageFor={imageFor}
            setImage={setImage}
            setIsValid={setIsValid}
          />
        </ModalContainer>
      )}
    </div>
  );
};
