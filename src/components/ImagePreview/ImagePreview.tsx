import { ImagePreviewProps } from "./ImagePreview.props";
import { AiOutlineDelete } from "react-icons/ai";
import defaultUser from "../../assets/default-image.png";
export const ImagePreview = ({
  className,
  width,
  height,
  fill,
  src,
  children,
  deleteImage,
  local,
  ...props
}: ImagePreviewProps) => {
  const imageSrc =
    src && local ? src : `${import.meta.env.VITE_API_HOST}/${src}`;

  return (
    <div
      {...props}
      className={`relative center ${className} `}
      style={{
        width,
      }}
    >
      <img
        width={width}
        height={height}
        style={{
          objectFit: fill ? "contain" : "cover",
        }}
        src={src ? imageSrc : defaultUser}
        alt={"preview"}
      />

      {children}
      {deleteImage && (
        <button
          className="absolute btn bg-opacity-80 btn-sm btn-square top-0 left-0"
          onClick={deleteImage}
        >
          <AiOutlineDelete className="  bg-gray-700  fill-white  " />
        </button>
      )}
    </div>
  );
};
