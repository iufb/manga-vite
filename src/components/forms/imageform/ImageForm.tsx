import { useState } from "react";
import { ImageFormProps } from "./ImageForm.props";
import { ImageInput } from "../../inputs/ImageInput/ImageInput";
import { ImagePreview } from "../../ImagePreview/ImagePreview";
import { CropImageModal } from "../../modals/CropImageModal/CropImageModal";
import { ModalContainer } from "../../modals/ModalContainer/ModalContainer";
import { useAuth } from "../../../hooks";

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
        minWidth={imageFor == "bg" ? 1200 : undefined}
      />
      {!image && (
        <ImagePreview
          src={user?.avatar}
          width={90}
          height={90}
          deleteImage={user?.avatar ? deleteAvatar : undefined}
        />
      )}
      {image && isValid && (
        <ImagePreview
          width={imageFor == "default" ? 90 : 400}
          local
          height={imageFor == "default" ? 90 : 200}
          src={URL.createObjectURL(image)}
          deleteImage={() => {
            setImage(null);
          }}
        />
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
