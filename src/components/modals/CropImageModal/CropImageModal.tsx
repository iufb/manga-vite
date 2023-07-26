import { SetStateAction, createRef, useState } from "react";
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
  const img = new Image();
  img.src = src;
  const cropperRef = createRef<ReactCropperElement>();
  const options = {
    height: imageFor == "default" ? 320 : 350,
    width: imageFor == "default" ? 320 : 1920,
  };
  const cropHeight = imageFor == "default" ? 240 : 350;
  const getCropData = () => {
    if (typeof cropperRef.current?.cropper !== "undefined") {
      cropperRef.current?.cropper
        .getCroppedCanvas(options)
        .toBlob((file) => setImage(file));
    }
  };
  const handleCrop = () => {
    if (cropperRef.current) {
      cropperRef.current.cropper.setCropBoxData({
        height: cropHeight,
        width: img.width,
      });
    }
  };

  return (
    <div className="bg-indigoGrey  desktop:w-[1000px] desktop:h-[700px] mobile:w-[350px] mobile:h-[350px] p-4 center flex flex-col gap-2 rounded-md z-20 ">
      <Cropper
        crop={handleCrop}
        style={{
          width: imageFor == "default" ? 240 : "100%",
          height: imageFor == "default" ? 320 : 540,
        }}
        minCropBoxHeight={100}
        ref={cropperRef}
        disabled={false}
        initialAspectRatio={16 / 9}
        minContainerHeight={200}
        src={src}
        background={false}
        responsive={false}
        autoCropArea={1}
        dragMode="move"
        zoomable
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
