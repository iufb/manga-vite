import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import { modalType } from "../../../redux/features/modal/modalSlice";
export interface BaseModalProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title?: string;
  modalType: modalType;
  children: ReactNode;
}
