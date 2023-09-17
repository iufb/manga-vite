import { HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";
import { modalType } from "../../redux/features/modal/modalSlice";

export interface SlidePanelProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  modal?: modalType;
  position: "right" | "left" | "up" | "down";
  bottom?: boolean;
}
