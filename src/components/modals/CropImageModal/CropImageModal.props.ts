import { DetailedHTMLProps, HTMLAttributes, SetStateAction } from "react";
export interface CropImageModalProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  image: File | Blob | null | undefined;
  setImage: React.Dispatch<SetStateAction<File | Blob | null | undefined>>;
  setIsValid: React.Dispatch<SetStateAction<boolean>>;
  imageFor: "avatar" | "comicBg" | "comicCover";
}
