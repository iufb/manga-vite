import { createRef } from "react";
import { Cropper, ReactCropperElement } from "react-cropper";
import "cropperjs/dist/cropper.css";
import { CropImageModalProps } from "./CropImageModal.props";
export const CropImageModal = ({
  className,
  image,
  setImage,
  setIsValid,
  imageFor,
  ...props
}: CropImageModalProps): JSX.Element => {
  const src = image ? URL.createObjectURL(image) : "default-image.png";
  const img = new Image();
  img.src = src;
  const cropperRef = createRef<ReactCropperElement>();
  let options: { height: number; width: number };
  let cropOptions: { height: number; width: number };
  switch (imageFor) {
    case "avatar": {
      cropOptions = {
        height: 247.85,
        width: 247.85,
      };
      options = {
        height: 320,
        width: 320,
      };
      break;
    }
    case "comicBg": {
      cropOptions = {
        height: 100,
        width: 748,
      };
      options = {
        height: 350,
        width: 1920,
      };
      break;
    }
    case "comicCover": {
      cropOptions = {
        width: 350,
        height: 400,
      };
      options = {
        width: 500,
        height: 600,
      };
      break;
    }
  }
  const getCropData = () => {
    if (typeof cropperRef.current?.cropper !== "undefined") {
      cropperRef.current?.cropper
        .getCroppedCanvas(options)
        .toBlob((file) => setImage(file));
    }
  };
  const handleCrop = () => {
    if (cropperRef.current) {
      cropperRef.current.cropper.setCropBoxData(cropOptions);
    }
  };

  return (
    <div
      className={`${className} bg-indigoGrey  desktop:w-[1000px] desktop:h-[700px] mobile:w-[366px] mobile:h-[500px] p-4 center flex flex-col gap-2 rounded-md z-20 `}
      {...props}
    >
      <Cropper
        className="desktop:w-[748px] desktop:h-[400px] mobile:w-[366px] mobile:h-[424px]"
        crop={handleCrop}
        viewMode={1}
        minCropBoxHeight={100}
        ref={cropperRef}
        disabled={true}
        initialAspectRatio={16 / 9}
        src={src}
        autoFocus={false}
        background={true}
        responsive={false}
        autoCropArea={1}
        dragMode="move"
        zoomTo={0}
        scalable={true}
        cropBoxResizable={false}
        checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
        guides={false}
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
