import { ImagePreviewProps } from "./ImagePreview.props";
import defaultUser from "../../assets/default-image.png";
export const ImagePreview = ({
  className,
  width,
  height,
  src,
  children,
  local,
  ...props
}: ImagePreviewProps) => {
  const imageSrc =
    src && local ? src : `${import.meta.env.VITE_API_HOST}/${src}`;

  return (
    <div
      {...props}
      className={`relative center  ${className} h-fit `}
      style={{
        width,
      }}
    >
      <img
        width={width}
        height={height}
        className={`${className}`}
        src={src ? imageSrc : defaultUser}
        alt={"preview"}
      />

      {children}
    </div>
  );
};
