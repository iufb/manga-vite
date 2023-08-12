import { HTMLMotionProps } from "framer-motion";
export interface UserMenuModalProps extends HTMLMotionProps<"div"> {
  logout: () => void;
}
