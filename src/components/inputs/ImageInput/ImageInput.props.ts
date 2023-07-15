import {
  DetailedHTMLProps,
  Dispatch,
  HTMLAttributes,
  SetStateAction,
} from "react";
export interface ImageInputProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  setImage: Dispatch<SetStateAction<File | Blob | null | undefined>>;
  label: string;
  minWidth?: number;
  setIsValid: Dispatch<SetStateAction<boolean>>;
}
