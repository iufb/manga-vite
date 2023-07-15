import { SetStateAction, createRef } from "react";
import { Cropper, ReactCropperElement } from "react-cropper";
import "cropperjs/dist/cropper.css";
export const CropImageModal = ({
  image,
  setImage,
  setIsValid,
  imageFor,
}: {
  image: File | Blob | null | undefined;
  setImage: React.Dispatch<SetStateAction<File | Blob | null | undefined>>;
  setIsValid: React.Dispatch<SetStateAction<boolean>>;
  imageFor: "default" | "bg";
}): JSX.Element => {
  const src = image ? URL.createObjectURL(image) : "default-image.png";
  const cropperRef = createRef<ReactCropperElement>();
  const options = {
    height: imageFor == "default" ? 320 : 350,
    width: imageFor == "default" ? 320 : 1920,
  };
  const getCropData = () => {
    if (typeof cropperRef.current?.cropper !== "undefined") {
      cropperRef.current?.cropper
        .getCroppedCanvas(options)
        .toBlob((file) => setImage(file));
    }
  };

  return (
    <div className="bg-indigoGrey  w-[1000px] h-[700px] p-4 center flex flex-col gap-2 rounded-md z-20 ">
      <Cropper
        ref={cropperRef}
        style={{ height: "600px", width: "100%" }}
        disabled={true}
        initialAspectRatio={1}
        preview=".img-preview"
        src={src}
        minCropBoxHeight={imageFor == "bg" ? 190 : 10}
        minCropBoxWidth={imageFor == "bg" ? 1920 : 10}
        background={false}
        responsive={true}
        autoCropArea={1}
        checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
        guides={true}
      />
      <div className="gap-2 flex z-40 ">
        <button
          onClick={() => {
            getCropData();
            setIsValid(true);
          }}
          className="btn"
        >
          Continue
        </button>
        <button
          className="btn"
          onClick={() => {
            setIsValid(true);
            setImage(null);
          }}
        >
          Exit
        </button>
      </div>
    </div>
  );
};
