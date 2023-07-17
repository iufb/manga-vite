import {
  DetailedHTMLProps,
  Dispatch,
  HTMLAttributes,
  SetStateAction,
} from "react";
export interface ImageFormProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  image: File | Blob | null | undefined;
  setImage: Dispatch<SetStateAction<File | Blob | null | undefined>>;
  label: string;
  imageFor: "default" | "bg";
  deleteAvatar?: () => void;
}
